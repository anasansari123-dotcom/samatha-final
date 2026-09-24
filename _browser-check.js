const puppeteer = require("d:/Samatha-green-website-main/Samatha-green-website-main/node_modules/puppeteer-core");

const base = process.env.BASE_URL || "http://127.0.0.1:4173";
const chrome = process.env.CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chrome,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  const issues = [];

  async function visit(path, checks) {
    const url = base + path;
    const res = await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    if (!res || !res.ok()) issues.push(path + " HTTP " + (res && res.status()));
    await page.waitForSelector("#site-header header", { timeout: 8000 });
    await page.waitForSelector("#site-footer footer", { timeout: 8000 });
    const broken = await page.evaluate(() => {
      return Array.from(document.images)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute("src"));
    });
    if (broken.length) issues.push(path + " broken images: " + broken.join(", "));
    if (checks) await checks();
    console.log("ok", path);
  }

  await visit("/", async () => {
    const title = await page.title();
    if (!/Samatha/i.test(title)) issues.push("home title missing Samatha");
    const calc = await page.$("#calc-bill");
    if (!calc) issues.push("calculator missing");
    await page.$eval("#calc-bill", (el) => {
      el.value = "8000";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });
    const size = await page.$eval("#calc-size", (el) => el.textContent);
    if (!/kW/.test(size)) issues.push("calculator did not update");
    const faqBtn = await page.$(".faq-btn");
    if (!faqBtn) issues.push("FAQ missing");
    await page.evaluate(() => document.querySelector(".js-open-quote").click());
    await page.waitForSelector("#quote-modal:not(.hidden)", { timeout: 4000 });
    await page.evaluate(() => document.querySelector(".js-close-quote").click());
    await page.evaluate(() => document.querySelector(".js-open-search").click());
    await page.waitForSelector("#search-overlay:not(.hidden)", { timeout: 4000 });
    await page.type("#search-input", "hybrid");
    await page.waitForFunction(() => document.querySelectorAll("#search-results a").length > 0, { timeout: 4000 });
    await page.evaluate(() => document.querySelector(".js-close-search").click());
    await page.evaluate(() => document.querySelector("[data-hero-next]").click());
    await page.goto(base + "/about.html", { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForSelector("[data-page='about']", { timeout: 8000 });
  });

  await page.setViewport({ width: 390, height: 844 });
  await visit("/services.html", async () => {
    await page.evaluate(() => document.querySelector("#mobile-toggle").click());
    const open = await page.$eval("#mobile-menu", (el) => !el.classList.contains("hidden"));
    if (!open) issues.push("mobile menu did not open");
    const cards = await page.$$("#services-list article");
    if (cards.length < 5) issues.push("services cards missing, got " + cards.length);
  });

  await page.setViewport({ width: 1440, height: 900 });
  for (const path of [
    "/about.html",
    "/contact.html",
    "/blog.html",
    "/projects.html",
    "/products/samatha-home.html",
    "/products/samatha-elite.html",
    "/products/samatha-plus.html",
    "/solutions/on-grid.html",
    "/solutions/off-grid.html",
    "/solutions/hybrid.html",
    "/solutions/ess.html",
  ]) {
    await visit(path);
  }

  await visit("/contact.html", async () => {
    await page.type("#enquiry-form input[name='name']", "Test User");
    await page.type("#enquiry-form input[name='phone']", "8050018267");
    await page.type("#enquiry-form input[name='email']", "test@example.com");
    await page.select("#enquiry-form select[name='service']", "Solar Consultation");
    await page.type("#enquiry-form textarea[name='message']", "Need a rooftop quote");
    await page.evaluate(() => document.querySelector("#enquiry-form button[type='submit']").click());
    const shown = await page.$eval("#enquiry-success", (el) => !el.classList.contains("hidden"));
    if (!shown) issues.push("contact form success message missing");
  });

  await browser.close();
  if (issues.length) {
    console.log("ISSUES\n" + issues.join("\n"));
    process.exit(1);
  }
  console.log("BROWSER_CHECK_OK");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
