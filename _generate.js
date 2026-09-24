const fs = require("fs");
const path = require("path");
const { icon } = require("./js/icons.js");

function activeClass(pageName, names) {
  return names.indexOf(pageName) !== -1 ? "text-brand-green" : "text-slate-700 hover:text-brand-green";
}

function headerMarkup(root, pageName) {
  const href = (p) => root + p;
  const img = (n) => root + "images/" + n;
  const chevron = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  return `<header class="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div class="mx-auto flex h-[92px] w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="flex min-w-0 flex-1 items-center justify-start">
          <a href="${href("index.html")}" class="flex shrink-0 items-center"><img src="${img("logo.png")}" alt="Samatha Green Energy Solutions" class="h-[3.5rem] w-auto object-contain sm:h-[3.85rem] lg:h-[4.25rem]" /></a>
        </div>
        <nav id="desktop-nav" class="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex mr-10">
          <a href="${href("index.html")}" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["home"])}">Home</a>
          <div class="relative nav-dd" data-dd="products">
            <button type="button" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["products"])}" aria-haspopup="menu">Products ${chevron}</button>
            <div class="nav-dd-menu hidden absolute left-0 top-full z-50 pt-3">
              <div class="min-w-[180px] rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("products/samatha-home.html")}#renemu-home">reneμ Home</a>
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("products/samatha-elite.html")}#renemu-elite">reneμ Elite</a>
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("products/samatha-plus.html")}#renemu-plus">reneμ Plus</a>
              </div>
            </div>
          </div>
          <div class="relative nav-dd" data-dd="solutions">
            <button type="button" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["solutions"])}" aria-haspopup="menu">Solutions ${chevron}</button>
            <div class="nav-dd-menu hidden absolute left-0 top-full z-50 pt-3">
              <div class="min-w-[180px] rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("solutions/on-grid.html")}#on-grid">On grid</a>
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("solutions/off-grid.html")}#off-grid">Off grid</a>
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("solutions/hybrid.html")}#hybrid">Hybrid</a>
                <a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="${href("solutions/ess.html")}#ess">ESS</a>
              </div>
            </div>
          </div>
          <a href="${href("services.html")}" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["services"])}">Services</a>
          <a href="${href("about.html")}" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["about"])}">About Us</a>
          <a href="${href("blog.html")}" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["blog"])}">Blog</a>
          <a href="${href("contact.html")}" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ${activeClass(pageName, ["contact"])}">Contact Us</a>
        </nav>
        <div class="flex flex-1 items-center justify-end gap-2.5">
          <div id="desktop-actions" class="hidden items-center gap-2.5 lg:flex">
            <button type="button" class="js-open-search flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-brand-blue transition hover:bg-[#e2ebf4]" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
            <a href="${href("index.html")}#download" class="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-[#b8cce3] bg-white px-4 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-[#f5f9fd]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4V15M12 15L8 11M12 15L16 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5 19H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>Download App</a>
            <button type="button" class="js-open-quote inline-flex h-10 items-center whitespace-nowrap rounded-full bg-brand-green px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(45,189,110,0.28)] transition hover:bg-brand-green-dark">Get a Free Quote</button>
          </div>
          <button type="button" class="js-open-search inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
          <button type="button" id="mobile-toggle" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden" aria-label="Toggle menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
        <nav class="flex flex-col gap-1">
          <a href="${href("index.html")}" class="py-2 text-base font-medium ${activeClass(pageName, ["home"])}">Home</a>
          <button type="button" class="js-mobile-dd flex w-full items-center justify-between py-2 text-base font-medium ${activeClass(pageName, ["products"])}" data-target="m-products">Products ${chevron}</button>
          <div id="m-products" class="hidden mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">
            <a class="block py-1.5 text-sm text-slate-600" href="${href("products/samatha-home.html")}#renemu-home">reneμ Home</a>
            <a class="block py-1.5 text-sm text-slate-600" href="${href("products/samatha-elite.html")}#renemu-elite">reneμ Elite</a>
            <a class="block py-1.5 text-sm text-slate-600" href="${href("products/samatha-plus.html")}#renemu-plus">reneμ Plus</a>
          </div>
          <button type="button" class="js-mobile-dd flex w-full items-center justify-between py-2 text-base font-medium ${activeClass(pageName, ["solutions"])}" data-target="m-solutions">Solutions ${chevron}</button>
          <div id="m-solutions" class="hidden mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">
            <a class="block py-1.5 text-sm text-slate-600" href="${href("solutions/on-grid.html")}#on-grid">On grid</a>
            <a class="block py-1.5 text-sm text-slate-600" href="${href("solutions/off-grid.html")}#off-grid">Off grid</a>
            <a class="block py-1.5 text-sm text-slate-600" href="${href("solutions/hybrid.html")}#hybrid">Hybrid</a>
            <a class="block py-1.5 text-sm text-slate-600" href="${href("solutions/ess.html")}#ess">ESS</a>
          </div>
          <a href="${href("services.html")}" class="py-2 text-base font-medium ${activeClass(pageName, ["services"])}">Services</a>
          <a href="${href("about.html")}" class="py-2 text-base font-medium ${activeClass(pageName, ["about"])}">About Us</a>
          <a href="${href("blog.html")}" class="py-2 text-base font-medium ${activeClass(pageName, ["blog"])}">Blog</a>
          <a href="${href("contact.html")}" class="py-2 text-base font-medium ${activeClass(pageName, ["contact"])}">Contact Us</a>
        </nav>
        <div class="mt-4 flex flex-col gap-2">
          <a href="${href("index.html")}#download" class="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#b8cce3] text-sm font-semibold text-brand-blue">Download App</a>
          <button type="button" class="js-open-quote inline-flex h-11 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white">Get a Free Quote</button>
        </div>
      </div>
    </header>`;
}

function page({ title, description, root, pageName, file = "", extraHead = "", body, cta = false, ctaTitle, ctaDesc }) {
  const css = root + "css/style.css";
  const jsIcons = root + "js/icons.js";
  const jsData = root + "js/data.js";
  const jsMain = root + "js/script.js";
  const canonical = !file || file === "index.html" ? "https://samatha.green/" : "https://samatha.green/" + file.replace(/\\/g, "/");
  return `<!DOCTYPE html>
<html lang="en-IN" data-root="${root}" data-page="${pageName}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" href="${root}images/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${css}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            "brand-green": "#2dbd6e",
            "brand-green-dark": "#24a85f",
            "brand-navy": "#071f3b",
            "brand-blue": "#1d4f91",
            "brand-muted": "#64748b"
          }
        }
      }
    };
  </script>
  ${extraHead}
</head>
<body class="flex min-h-screen flex-col bg-white font-sans">
  <div id="site-header">${headerMarkup(root, pageName)}</div>
  <main class="flex-1">
${body}
  </main>
  <div id="site-footer" data-cta="${cta ? "true" : "false"}"${ctaTitle ? ` data-cta-title="${ctaTitle.replace(/"/g, "&quot;")}"` : ""}${ctaDesc ? ` data-cta-desc="${ctaDesc.replace(/"/g, "&quot;")}"` : ""}></div>
  <script src="${jsIcons}"></script>
  <script src="${jsData}"></script>
  <script src="${jsMain}"></script>
</body>
</html>
`;
}

const hero = (root) => `
<section class="relative min-h-[calc(100vh-88px)] overflow-hidden bg-brand-navy" data-hero>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:1"><img src="${root}images/slide-2.png" alt="Rooftop solar and clean energy solutions" class="absolute inset-0 h-full w-full object-cover object-pos-68" /><div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"></div></div>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:0"><img src="${root}images/slide-4.png" alt="Professional solar installation" class="absolute inset-0 h-full w-full object-cover object-pos-78" /><div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"></div></div>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:0"><img src="${root}images/slide-3.png" alt="Solar energy consultation" class="absolute inset-0 h-full w-full object-cover object-pos-72" /><div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"></div></div>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:0"><img src="${root}images/slide-5.png" alt="Samatha digital platform" class="absolute inset-0 h-full w-full object-cover object-pos-82" /><div class="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/15"></div></div>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:0"><img src="${root}images/slide-1.png" alt="Hybrid solar system with battery backup" class="absolute inset-0 h-full w-full object-cover object-pos-80" /><div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"></div></div>
  <div class="hero-slide absolute inset-0 transition-opacity duration-700" style="opacity:0"><img src="${root}images/slide-6.png" alt="Commercial and industrial solar" class="absolute inset-0 h-full w-full object-cover object-pos-70" /><div class="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-transparent"></div></div>
  <button type="button" data-hero-prev aria-label="Previous slide" class="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white sm:left-5">${icon("arrowLeft", 18)}</button>
  <button type="button" data-hero-next aria-label="Next slide" class="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white sm:right-5">${icon("arrowRight", 18)}</button>
  <div class="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-[1280px] flex-col justify-center px-4 py-16 pb-24 sm:px-6 lg:px-8">
    <div class="hero-copy max-w-5xl"><h1 class="animate-fade-up font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9] tracking-[-0.035em]"><span class="block text-brand-green">ONE PARTNER.</span><span class="block text-brand-green">ALL ENERGY</span><span class="block text-white">SOLUTION.</span></h1><div class="animate-fade-up delay-1 mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="animate-fade-up delay-1 mt-4 text-base font-medium text-white sm:text-lg">Powering a <span class="text-brand-green">smarter</span> and <span class="text-brand-green">greener</span> tomorrow.</p></div>
    <div class="hero-copy hidden max-w-5xl"><h1 class="font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9]"><span class="block text-brand-green">SMART</span><span class="block text-brand-green">SOLUTIONS.</span><span class="block text-white">STRONGER FUTURE.</span></h1><div class="mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">From expert installation to lasting performance, we deliver reliable solar and renewable solutions tailored to <span class="text-brand-green">your energy needs</span>.</p></div>
    <div class="hero-copy hidden max-w-5xl"><h1 class="font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9]"><span class="block text-brand-green">CONSULT</span><span class="block text-white">WITH US.</span></h1><div class="mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="mt-4 text-base font-medium text-white sm:text-lg">Your Vision. Our Expertise. <span class="text-brand-green">A Sustainable Future.</span></p></div>
    <div class="hero-copy hidden max-w-5xl"><h1 class="font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9]"><span class="block text-brand-green">SMART DIGITAL</span><span class="block text-white">PLATFORM.</span></h1><div class="mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">One platform to monitor, manage and maximize the performance of all your renewable energy assets.</p></div>
    <div class="hero-copy hidden max-w-5xl"><h1 class="font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9]"><span class="block text-brand-green">INTELLIGENT</span><span class="block text-brand-green">ENERGY.</span><span class="block text-white">SEAMLESS BACKUP.</span></h1><div class="mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">Reliable on-grid, off-grid, and hybrid solar solutions with intelligent battery backup.</p></div>
    <div class="hero-copy hidden max-w-5xl"><h1 class="font-display text-[clamp(2.35rem,6.4vw,4.75rem)] font-black uppercase leading-[0.9]"><span class="block text-brand-green">COMMERCIAL &amp;</span><span class="block text-brand-green">INDUSTRIAL</span><span class="block text-white">SOLUTIONS.</span></h1><div class="mt-4 h-[2px] w-12 rounded-full bg-brand-green"></div><p class="mt-4 text-base font-medium text-white sm:text-lg">Powering Business. <span class="text-brand-green">Driving Efficiency.</span></p></div>
    <div class="mt-6 flex flex-wrap items-center gap-2.5">
      <a href="${root}solutions/on-grid.html" class="inline-flex h-9 items-center rounded-full bg-brand-green px-5 text-xs font-semibold text-white sm:h-10 sm:px-6 sm:text-sm">Explore Solutions</a>
      <a href="${root}index.html#products" class="inline-flex h-9 items-center rounded-full border border-white/80 px-5 text-xs font-semibold text-white sm:h-10 sm:px-6 sm:text-sm">Solar Calculator</a>
    </div>
  </div>
  <div class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-8 bg-brand-green"></button>
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-2.5 bg-white/55"></button>
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-2.5 bg-white/55"></button>
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-2.5 bg-white/55"></button>
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-2.5 bg-white/55"></button>
    <button type="button" data-hero-dot class="rounded-full h-2.5 w-2.5 bg-white/55"></button>
  </div>
</section>`;

const banner = (root, title, desc) => `
<section class="relative min-h-[360px] overflow-hidden bg-[#0A4D8D] sm:min-h-[420px]">
  <img src="${root}images/slide-2.png" alt="" class="absolute inset-0 h-full w-full object-cover object-pos-70" />
  <div class="absolute inset-0 bg-gradient-to-r from-[#0A4D8D] via-[#0A4D8D]/90 to-[#0A4D8D]/42"></div>
  <div class="relative z-10 mx-auto flex min-h-[360px] max-w-[1280px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-8">
    <p class="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">SOLAR ENERGY SOLUTIONS</p>
    <h1 class="page-hero-title mt-3 max-w-3xl font-extrabold text-white">${title}</h1>
    <p class="page-desc-on-dark mt-4 max-w-2xl">${desc}</p>
  </div>
</section>`;

const files = {};

files["index.html"] = page({
  title: "Solar Panel Installation in Bengaluru | Samatha Green Energy",
  description: "Samatha Green Energy Solutions designs and installs rooftop solar, hybrid systems, and battery storage in Bengaluru.",
  root: "",
  pageName: "home",
  file: "index.html",
  body: `
${hero("")}
<section id="products" class="bg-white">
  <div id="download" class="scroll-mt-28"></div>
  <div class="mx-auto max-w-[1180px] px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20">
    <h2 class="font-sans text-[32px] font-bold leading-tight text-[#001F3F] lg:text-[36px]">Samatha Green Energy Solutions</h2>
    <p class="section-kicker mt-3 text-[#2cb673]">Clean Energy | Smart Solutions</p>
    <p class="mx-auto mt-5 max-w-[880px] text-[18px] leading-[1.65] text-[#334155]">Samatha Green Energy Solutions is an EPC renewable energy company providing complete solar solutions for residential, commercial, and industrial requirements. We deliver end-to-end solar services including design, installation, storage solutions, maintenance, and advanced monitoring systems.</p>
  </div>
  <div class="bg-[#eef3f8]">
    <div class="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
      <div>
        <p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">SOLAR CALCULATOR</p>
        <h3 class="calc-heading mt-3 max-w-[620px] text-[#071f3b]">Estimate Your Solar System Size and Savings</h3>
        <p class="mt-4 max-w-[540px] text-[16px] leading-[1.65] text-gray-500">Enter your monthly electricity bill and tariff to get a quick planning estimate before our team prepares a detailed proposal.</p>
        <div class="mt-7 rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(11,42,74,0.08)] sm:p-8">
          <h4 class="flex items-center gap-2 text-xl font-bold text-brand-navy sm:text-2xl"><span class="text-brand-green">${icon("calc", 22)}</span>Solar Calculator</h4>
          <p class="mt-1 text-base text-slate-500">Quick estimate for rooftop solar planning</p>
          <div class="mt-7 grid gap-5 sm:grid-cols-2">
            <label class="block text-left"><span class="mb-2 block text-sm font-semibold text-[#0D529C]">Monthly electricity bill</span><input id="calc-bill" type="number" min="0" value="6000" class="h-12 w-full rounded-xl border border-slate-200 px-4 text-lg font-semibold text-brand-navy outline-none focus:border-brand-green" /></label>
            <label class="block text-left"><span class="mb-2 block text-sm font-semibold text-[#0D529C]">Tariff per unit</span><input id="calc-tariff" type="number" min="0" step="0.1" value="8.8" class="h-12 w-full rounded-xl border border-slate-200 px-4 text-lg font-semibold text-brand-navy outline-none focus:border-brand-green" /></label>
          </div>
          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl bg-[#edf2f7] px-4 py-5"><p class="text-sm font-semibold text-slate-500">Estimated size</p><p id="calc-size" class="mt-2 text-2xl font-bold text-brand-navy">5.7 kW</p></div>
            <div class="rounded-2xl bg-[#edf2f7] px-4 py-5"><p class="text-sm font-semibold text-slate-500">Monthly units</p><p id="calc-units" class="mt-2 text-2xl font-bold text-brand-navy">682</p></div>
            <div class="rounded-2xl bg-brand-green px-4 py-5 text-white"><p class="text-sm font-semibold text-white/90">Yearly savings</p><p id="calc-savings" class="mt-2 text-2xl font-bold">₹56,160</p></div>
          </div>
          <p class="mt-5 text-left text-[0.8rem] text-slate-400">This is an indicative estimate based on average generation and tariff assumptions.</p>
        </div>
      </div>
      <div class="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
        <p class="mb-3 text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#2cb673]">Choose Your Need</p>
        <h3 class="choose-heading text-[#071f3b]">Solar solutions for every property type</h3>
        <p class="mt-4 text-[15px] leading-[1.65] text-gray-500">Select the closest category during enquiry and we will guide you with system sizing, cost, subsidy, installation timeline, and maintenance options.</p>
        <div class="mt-8 flex flex-col gap-3">
          <a href="products/samatha-home.html#renemu-home" class="need-card group flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4"><span class="grid h-10 w-10 place-items-center rounded-lg bg-white text-[#2cb673] group-hover:bg-[#2cb673] group-hover:text-white">${icon("home", 21)}</span><span class="flex-1 text-lg font-medium text-[#071f3b]">reneμ Home</span><span class="need-arrow">${icon("arrow", 16)}</span></a>
          <a href="products/samatha-elite.html#renemu-elite" class="need-card group flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4"><span class="grid h-10 w-10 place-items-center rounded-lg bg-white text-[#2cb673] group-hover:bg-[#2cb673] group-hover:text-white">${icon("shield", 21)}</span><span class="flex-1 text-lg font-medium text-[#071f3b]">reneμ Elite</span><span class="need-arrow">${icon("arrow", 16)}</span></a>
          <a href="products/samatha-plus.html#renemu-plus" class="need-card group flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-5 py-4"><span class="grid h-10 w-10 place-items-center rounded-lg bg-white text-[#2cb673] group-hover:bg-[#2cb673] group-hover:text-white">${icon("wrench", 21)}</span><span class="flex-1 text-lg font-medium text-[#071f3b]">reneμ Plus</span><span class="need-arrow">${icon("arrow", 16)}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="services" class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center">
    <p class="text-[14px] font-extrabold tracking-[0.16em] text-[#2cb673]">OUR PROCESS</p>
    <h2 class="mx-auto mt-3 max-w-3xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold text-[#0a1c3e]">We Ensure Smooth Flow in Our Process with 100% Results</h2>
    <p class="mx-auto mt-4 max-w-3xl text-[16px] text-gray-500">From the first conversation to long-term maintenance, every step is planned to keep your solar project clear, efficient, and dependable.</p>
  </div>
  <div class="relative mx-auto mt-8 w-full max-w-[1000px] px-4"><img src="images/process-infinity.png" alt="Our process" class="mx-auto h-auto w-full object-contain" /></div>
</section>
<section class="bg-[#eef3f8] px-4 py-12 sm:px-6 sm:py-16">
  <div class="mx-auto grid max-w-[1280px] items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
      <p class="text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">What We Provide</p>
      <h2 class="mt-3 max-w-xl text-[32px] font-extrabold text-[#0A2540] sm:text-[36px]">Reliable Solar Systems for Every Energy Need</h2>
      <p class="mt-4 max-w-xl text-[17px] text-gray-500">Choose the right solar setup for your site, power usage, backup requirement, and long-term energy goals.</p>
      <div class="mt-7 grid gap-4 sm:grid-cols-2">
        <a href="solutions/on-grid.html#on-grid" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("zap", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">On-Grid Solar Systems</span></a>
        <a href="solutions/off-grid.html#off-grid" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("battery", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Off-Grid Solar Systems</span></a>
        <a href="solutions/hybrid.html#hybrid" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("copy", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Hybrid Solar Systems</span></a>
        <a href="solutions/ess.html#ess" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("battery", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Energy Storage Systems (ESS)</span></a>
        <a href="services.html" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("house", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Rooftop Solar Solutions</span></a>
        <a href="services.html" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("pin", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Ground Mounted Solar Systems</span></a>
        <a href="services.html" class="group provide-item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5"><span class="provide-icon grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F1F8] text-[#1B4F8A]">${icon("building", 22)}</span><span class="text-[15px] font-extrabold text-[#0A2540]">Solar Carports</span></a>
      </div>
    </div>
    <aside class="rounded-3xl bg-[#0D529C] p-6 text-white sm:p-8">
      <p class="mb-3 text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">Why Choose Us</p>
      <h2 class="max-w-md text-[32px] font-extrabold !text-white sm:text-[36px]">Built for dependable solar performance</h2>
      <p class="mt-4 text-[19px] font-medium text-white/80">Our team handles planning, materials, installation, monitoring, and support so your system keeps producing with fewer interruptions.</p>
      <ul class="mt-8 grid gap-3">
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("check", 20)}</span><span class="text-base font-semibold">Complete EPC Solar Solutions</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("user", 20)}</span><span class="text-base font-semibold">Expert Site Survey &amp; Design</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("shield", 20)}</span><span class="text-base font-semibold">Quality Materials &amp; Reliable Installation</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("wrench", 20)}</span><span class="text-base font-semibold">AMC Service Support</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("zap", 20)}</span><span class="text-base font-semibold">Fast Issue Resolution</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("phone", 20)}</span><span class="text-base font-semibold">Mobile App Monitoring</span></li>
        <li class="flex items-center gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"><span class="grid h-10 w-10 place-items-center rounded-xl bg-[#2cb673] text-white">${icon("building", 20)}</span><span class="text-base font-semibold">Residential to Industrial Solutions</span></li>
      </ul>
    </aside>
  </div>
</section>
<section id="projects" class="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1280px]">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-2xl"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">PROJECTS</p><h2 class="mt-3 text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold text-brand-navy">Recent Solar Panel Installation Projects</h2><p class="mt-3 text-[15px] text-gray-500">Explore residential, commercial, and industrial renewable energy solutions completed by our team.</p></div>
      <div class="flex items-center gap-2"><button type="button" data-projects-prev class="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] hover:bg-brand-green hover:text-white">${icon("arrowLeft", 16)}</button><button type="button" data-projects-next class="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] hover:bg-brand-green hover:text-white">${icon("arrowRight", 16)}</button></div>
    </div>
    <div id="home-projects" class="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
    <div class="mt-8 flex justify-center"><a href="projects.html" class="inline-flex h-11 items-center gap-2 rounded-full bg-[#0D529C] px-6 text-sm font-semibold text-white hover:bg-brand-green">View All Projects ${icon("arrow", 14)}</a></div>
  </div>
</section>
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1280px]">
    <div class="relative flex flex-col items-center text-center">
      <p class="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand-green">TESTIMONIALS</p>
      <h2 class="mt-2 text-[33px] font-extrabold text-brand-navy">What Our Solar Customers Say</h2>
      <div class="mt-4 flex items-center gap-2 sm:absolute sm:right-0"><button type="button" data-testimonial-prev class="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] hover:bg-brand-green hover:text-white">${icon("arrowLeft", 16)}</button><button type="button" data-testimonial-next class="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-[#0D529C] hover:bg-brand-green hover:text-white">${icon("arrowRight", 16)}</button></div>
    </div>
    <div id="testimonial-list" class="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
  </div>
</section>
<section id="faq" class="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.3fr]">
    <div><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">FAQ</p><h2 class="mt-3 max-w-md text-[clamp(1.55rem,3vw,2.2rem)] font-bold text-brand-navy">Common Questions About Solar Installation</h2><p class="mt-4 max-w-md text-[16px] text-gray-500">Find Quick answers about rooftop solar, system types, savings, maintenance, and what to expect when you work with Samatha.</p></div>
    <div id="faq-list" class="space-y-3"></div>
  </div>
</section>
<section id="blog" class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1280px]">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">BLOG</p><h2 class="mt-3 text-[clamp(1.55rem,3.2vw,2.2rem)] font-bold text-brand-navy">Renewable Energy Insights</h2><p class="mt-3 text-[16px] text-gray-500">Practical articles on solar planning, storage, savings, and cleaner energy for homes and businesses.</p></div>
      <a href="blog.html" class="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0D529C] px-6 text-sm font-semibold text-white hover:bg-[#2cb673]">View Blog ${icon("arrow", 14)}</a>
    </div>
    <div class="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article class="hover-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"><span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">ENERGY PLANNING</p><h3 class="mt-3 text-2xl font-extrabold text-[#0A2540]">How to Choose the Right Renewable Energy System</h3><p class="mt-3 flex-1 text-[15px] text-gray-500">A practical look at matching solar, hybrid, BESS, and microgrid options to your site, energy usage, and backup requirements.</p><p class="mt-5 text-sm font-bold text-slate-500">May 2026</p></article>
      <article class="hover-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"><span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">BATTERY STORAGE</p><h3 class="mt-3 text-2xl font-extrabold text-[#0A2540]">Why BESS Matters for Reliable Clean Power</h3><p class="mt-3 flex-1 text-[15px] text-gray-500">Battery Energy Storage Systems improve backup, peak load management, renewable energy utilization, and long-term energy reliability.</p><p class="mt-5 text-sm font-bold text-slate-500">May 2026</p></article>
      <article class="hover-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"><span class="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">SOLAR SOLUTIONS</p><h3 class="mt-3 text-2xl font-extrabold text-[#0A2540]">Understanding On-Grid, Off-Grid, and Hybrid Systems</h3><p class="mt-3 flex-1 text-[15px] text-gray-500">Compare the three common solar system types and learn which one fits homes, businesses, industries, and remote sites.</p><p class="mt-5 text-sm font-bold text-slate-500">May 2026</p></article>
    </div>
  </div>
</section>
`
});

files["about.html"] = page({
  title: "About Our Solar Company in Bengaluru | Samatha Green Energy Solutions",
  description: "Samatha Green Energy Solutions is a Bengaluru solar EPC company delivering rooftop solar, battery storage, and tech-enabled renewable energy.",
  root: "",
  pageName: "about",
  file: "about.html",
  cta: true,
  body: `
${banner("", "About Samatha Green Energy Solutions", "Your trusted partner in the clean energy transition, delivering tech-enabled renewable energy solutions across residential, commercial, industrial, utility, and community requirements.")}
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
    <div>
      <p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">COMPANY INTRODUCTION</p>
      <h2 class="page-title mt-3 font-bold text-brand-navy">Advanced Renewable Energy Solutions with Digital Intelligence</h2>
      <p class="page-desc mt-5">Welcome to Samatha Green Energy Solutions Pvt Ltd., your trusted partner in the clean energy transition. We provide advanced renewable energy solutions with our tech-enabled platform to measure, build, and monitor high efficiency Solar PV systems, battery energy storage systems (BESS), EV charging infrastructure, wind energy integration, microgrid, green hydrogen, and allied technologies for residential, commercial, industrial, and utility requirements.</p>
      <p class="page-desc mt-4">We provide our own Samatha platform to aggregate renewable energy systems into a clean energy ecosystem for residential, commercial, and industrial requirements. The platform supports performance tracking, status monitoring, digital warranty, and service requests.</p>
    </div>
    <div class="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0b3a7a]"><img src="images/aboutimage.jpg" alt="Samatha energy monitoring platform dashboard" class="h-full w-full object-cover scale-[1.1]" /></div>
  </div>
</section>
<section class="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-2">
    <article class="rounded-[24px] bg-white px-7 py-8 sm:px-9 sm:py-10"><h3 class="page-card-title font-bold !text-[#125393]">Our Mission</h3><p class="page-desc mt-4">Our mission is to deliver tech-enabled, reliable, and eco-friendly green energy solutions to residential, commercial, industrial, institutional, and utility customers that reduce energy costs and carbon footprint, supporting a cleaner, greener tomorrow for us and future generations.</p></article>
    <article class="rounded-[24px] bg-white px-7 py-8 sm:px-9 sm:py-10"><h3 class="page-card-title font-bold !text-[#125393]">Our Vision</h3><p class="page-desc mt-4">Our vision is to accelerate the transition towards a cleaner and net-zero carbon future. Our innovative renewable energy platform empowers residential, commercial, industrial, utility, and community users with an integrated clean energy ecosystem.</p></article>
  </div>
</section>
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">CORE PILLARS</p><h2 class="page-title mt-3 font-bold text-brand-navy">The Principles Behind Our Clean Energy Ecosystem</h2><p class="page-desc mx-auto mt-4 max-w-3xl">Our work is guided by innovation, sustainability, reliability, savings, and customer centricity across every solution we design, build, and support.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
    <article class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-brand-green">${icon("innovation", 28)}</span><h3 class="page-sub-title mt-4 font-extrabold text-brand-navy">Innovation</h3><p class="page-desc mt-2">Smart, tech-enabled renewable-energy solutions powered by the Samatha clean energy ecosystem.</p></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-brand-green">${icon("sustainability", 28)}</span><h3 class="page-sub-title mt-4 font-extrabold text-brand-navy">Sustainability</h3><p class="page-desc mt-2">Driving the transition toward a cleaner, greener, and net-zero carbon future.</p></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-brand-green">${icon("reliability", 28)}</span><h3 class="page-sub-title mt-4 font-extrabold text-brand-navy">Reliability</h3><p class="page-desc mt-2">Delivering dependable, high-performance energy systems for long-term energy security.</p></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-brand-green">${icon("piggy", 28)}</span><h3 class="page-sub-title mt-4 font-extrabold text-brand-navy">Savings</h3><p class="page-desc mt-2">Reducing energy costs through efficient and optimized renewable energy solutions.</p></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-brand-green">${icon("headset", 28)}</span><h3 class="page-sub-title mt-4 font-extrabold text-brand-navy">Customer Centricity</h3><p class="page-desc mt-2">Providing tailored clean energy solutions with seamless digital support and lifecycle service.</p></article>
  </div>
</section>
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.12em] text-[#2cb673]">QUALIFICATIONS, EXPERTISE, COMPLIANCES AND CERTIFICATIONS</p><h2 class="page-title mt-3 font-bold text-[#0A2540]">Expertise and Capabilities</h2><p class="page-desc mx-auto mt-4 max-w-3xl">From certified project teams to advanced design, quality assurance, and long-term support — Samatha delivers end-to-end renewable energy capability.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1200px] gap-5 lg:grid-cols-3">
    <article class="rounded-2xl bg-[#f4f8f5] p-6 sm:p-7"><div class="flex items-start gap-3"><span class="mt-0.5 shrink-0 text-[#2cb673]">${icon("badge", 22)}</span><h3 class="page-sub-title font-extrabold text-[#0A2540]">Certified Experienced Team</h3></div><div class="mt-6 grid gap-5"><div><h4 class="text-base font-bold !text-[#0D529C]">Certified Professionals</h4><p class="page-desc mt-1.5">Our team of experts, qualified engineers, and certified professionals are equipped to execute top-notch renewable energy solutions. We are proud partners with Waaree, Luminous, Schneider Electric, and other leading energy brands.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Deep Industry Knowledge</h4><p class="page-desc mt-1.5">Extensive experience in designing and implementing renewable energy solutions, including grid-tied, off-grid, hybrid, and advanced energy systems.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Safety Excellence</h4><p class="page-desc mt-1.5">Strong commitment to safety and quality standards across system design, installation, testing, commissioning, and operational execution.</p></div></div></article>
    <article class="rounded-2xl bg-[#f4f8f5] p-6 sm:p-7"><div class="flex items-start gap-3"><span class="mt-0.5 shrink-0 text-[#2cb673]">${icon("clipboard", 22)}</span><h3 class="page-sub-title font-extrabold text-[#0A2540]">Comprehensive Service &amp; Project Management</h3></div><div class="mt-6 grid gap-5"><div><h4 class="text-base font-bold !text-[#0D529C]">End-to-End Project Management</h4><p class="page-desc mt-1.5">Comprehensive management of renewable energy projects from site assessment through commissioning.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Advanced System Design</h4><p class="page-desc mt-1.5">Leveraging advanced design tools and engineering expertise to optimize energy generation and ROI.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Financial &amp; Policy Guidance</h4><p class="page-desc mt-1.5">Expert support in navigating applicable subsidies, incentives, financing options, and regulatory approvals.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Seamless System Integration</h4><p class="page-desc mt-1.5">Specialized expertise in integrating solar PV, battery storage, EV infrastructure, and smart energy systems.</p></div></div></article>
    <article class="rounded-2xl bg-[#f4f8f5] p-6 sm:p-7"><div class="flex items-start gap-3"><span class="mt-0.5 shrink-0 text-[#2cb673]">${icon("quality", 22)}</span><h3 class="page-sub-title font-extrabold text-[#0A2540]">Cutting-Edge Technology &amp; Quality Assurance</h3></div><div class="mt-6 grid gap-5"><div><h4 class="text-base font-bold !text-[#0D529C]">Tier-1 Technology Solutions</h4><p class="page-desc mt-1.5">Partnerships with leading renewable energy brands to deliver high-performance modules, inverters, and storage.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Quality Assurance Excellence</h4><p class="page-desc mt-1.5">Rigorous multi-stage quality control across design, installation, testing, and commissioning.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Smart Performance Monitoring</h4><p class="page-desc mt-1.5">Advanced remote monitoring for real-time performance insights and proactive maintenance.</p></div><div><h4 class="text-base font-bold !text-[#0D529C]">Warranty &amp; Long-Term Support</h4><p class="page-desc mt-1.5">Comprehensive product warranties, workmanship assurance, and dedicated technical support.</p></div></div></article>
  </div>
</section>
`
});

files["services.html"] = page({
  title: "Solar Installation & Energy Assessment Services | Samatha Green Energy Solutions",
  description: "Energy assessment, rooftop solar installation, BESS, solar carports, street lights, and AMC support in Bengaluru.",
  root: "",
  pageName: "services",
  file: "services.html",
  cta: true,
  ctaTitle: "Need Solar Product Guidance?",
  ctaDesc: "Get help selecting the right renewable energy product, system design, and service plan for your site.",
  body: `
${hero("")}
<section class="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.92fr_1.18fr]">
    <div>
      <p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">ENERGY ASSESSMENT</p>
      <h2 class="page-title mt-3 max-w-lg font-extrabold text-[#0A2540]">Smarter Energy Planning Before System Selection</h2>
      <p class="page-desc mt-4 max-w-lg">Our Energy Assessment services provide a detailed analysis of energy consumption, system performance, and efficiency gaps to identify cost-saving opportunities.</p>
      <div class="service-image mt-8 aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-200 shadow-[0_12px_30px_rgba(10,77,141,0.1)]"><img src="images/ser.jpg" alt="Technician reviewing energy assessment data" /></div>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("search", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Identify Energy Losses</h3><p class="page-desc mt-2">Detect excessive power consumption, wastage, and system inefficiencies.</p></article>
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("gauge", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Improve System Efficiency</h3><p class="page-desc mt-2">Optimize electrical systems and equipment for stronger performance.</p></article>
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("chart", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Optimized Load Management</h3><p class="page-desc mt-2">Improve power distribution, operational stability, and energy utilization.</p></article>
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("sun", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Renewable Energy Planning</h3><p class="page-desc mt-2">Identify solar integration and sustainable energy opportunities.</p></article>
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("report", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Detailed Energy Reporting</h3><p class="page-desc mt-2">Get actionable insights for smarter planning and decision-making.</p></article>
      <article class="hover-card rounded-[18px] border border-[#E6EDF4] bg-white px-5 py-6"><span class="text-[#2cb673]">${icon("trend", 24)}</span><h3 class="mt-4 !text-[18px] font-extrabold text-[#0A2540]">Long-Term Cost Savings</h3><p class="page-desc mt-2">Reduce operating expenses through energy-efficient operations.</p></article>
    </div>
  </div>
</section>
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-[#2cb673]">SERVICES</p><h2 class="page-title mt-3 font-extrabold text-[#0A2540]">Solar and Renewable Energy Services</h2><p class="page-desc mx-auto mt-4 max-w-2xl">Explore our complete product range for homes, businesses, institutions, industries, and community energy requirements.</p></div>
  <div id="services-list" class="mx-auto mt-12 flex max-w-[1200px] flex-col gap-8 sm:gap-10"></div>
</section>
`
});

files["contact.html"] = page({
  title: "Contact Us for Solar Consultation in Bengaluru | Samatha Green Energy Solutions",
  description: "Call +91 80500 18267 or email enquiry@samatha.green for solar consultation, site survey, and AMC support.",
  root: "",
  pageName: "contact",
  file: "contact.html",
  cta: true,
  ctaTitle: "Need Solar Consultation or Service Support?",
  ctaDesc: "Contact us for installation, AMC, monitoring, repairs, upgrades, or a customized renewable energy solution.",
  body: `
${banner("", "Contact Us", "Get in touch with Samatha Green Energy Solutions for solar consultation, site survey requests, installation support, AMC services, and technical assistance.")}
<section id="quote" class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">CONTACT SERVICES</p><h2 class="page-title mt-3 font-extrabold text-brand-navy">How Our Team Can Help</h2><p class="page-desc mx-auto mt-4 max-w-2xl">Choose the right contact path for consultation, site planning, service support, AMC, monitoring, repairs, or upgrades.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1200px] gap-5 md:grid-cols-2 xl:grid-cols-3">
    <article class="group hover-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><span class="group-hover-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">${icon("headset", 30)}</span><h3 class="page-sub-title mt-5 font-extrabold text-brand-navy">Request a Free Consultation</h3><p class="page-desc mt-3">Customers can connect with our experts to discuss solar requirements for homes, businesses, and industrial projects.</p></article>
    <article class="group hover-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><span class="group-hover-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">${icon("calendar", 30)}</span><h3 class="page-sub-title mt-5 font-extrabold text-brand-navy">Book a Site Survey</h3><p class="page-desc mt-3">Schedule a professional site visit for system inspection, shadow analysis, and customized solar solution planning.</p></article>
    <article class="group hover-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><span class="group-hover-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">${icon("phone", 30)}</span><h3 class="page-sub-title mt-5 font-extrabold text-brand-navy">Service Support</h3><p class="page-desc mt-3">Raise service requests for maintenance, AMC support, complaint resolution, and technical assistance.</p></article>
  </div>
</section>
<section id="enquiry" class="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2">
    <div>
      <p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">GET IN TOUCH</p>
      <h2 class="page-title mt-3 font-extrabold text-[#0A2540]">Office Details</h2>
      <p class="page-desc mt-3">Use the details below for enquiries, site visits, installation support, AMC assistance, and renewable energy project planning.</p>
      <div class="mt-7 rounded-[28px] bg-white px-6 py-7">
        <div class="flex items-start gap-3"><span class="mt-0.5 text-[#2cb673]">${icon("office", 18)}</span><div><p class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#125393]">COMPANY NAME</p><p class="mt-1 font-bold text-[#0A2540]">Samatha Green Energy Solutions</p></div></div>
        <div class="mt-5 flex items-start gap-3"><span class="mt-0.5 text-[#2cb673]">${icon("map", 18)}</span><div><p class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#125393]">OFFICE ADDRESS</p><p class="mt-1 font-bold text-[#0A2540]">No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016</p></div></div>
        <div class="mt-5 flex items-start gap-3"><span class="mt-0.5 text-[#2cb673]">${icon("call", 18)}</span><div><p class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#125393]">CONTACT NUMBER</p><a href="tel:8050018267" class="mt-1 block font-bold text-[#0A2540]">8050018267</a></div></div>
        <div class="mt-5 flex items-start gap-3"><span class="mt-0.5 text-[#2cb673]">${icon("email", 18)}</span><div><p class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#125393]">EMAIL ADDRESS</p><a href="mailto:enquiry@samatha.green" class="mt-1 block font-bold text-[#0A2540]">enquiry@samatha.green</a></div></div>
      </div>
    </div>
    <div>
      <p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">Send Enquiry</p>
      <h2 class="page-title mt-3 font-extrabold text-[#0A2540]">Tell Us About Your Requirement</h2>
      <form id="enquiry-form" class="mt-7 rounded-[28px] bg-white px-6 py-7">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block"><span class="mb-2 block text-sm font-extrabold text-[#0A2540]">Name</span><input required name="name" class="h-12 w-full rounded-2xl border border-slate-200 px-4" placeholder="Your name" /></label>
          <label class="block"><span class="mb-2 block text-sm font-extrabold text-[#0A2540]">Phone</span><input required type="tel" name="phone" class="h-12 w-full rounded-2xl border border-slate-200 px-4" placeholder="Phone number" /></label>
          <label class="block"><span class="mb-2 block text-sm font-extrabold text-[#0A2540]">Email</span><input required type="email" name="email" class="h-12 w-full rounded-2xl border border-slate-200 px-4" placeholder="Email address" /></label>
          <label class="block"><span class="mb-2 block text-sm font-extrabold text-[#0A2540]">Service Required</span><select required name="service" class="h-12 w-full rounded-2xl border border-slate-200 px-4"><option value="">Select service</option><option>Residential Solar Installation</option><option>Commercial Solar Solutions</option><option>Industrial Solar Systems</option><option>Solar Panel Maintenance</option><option>Solar Consultation</option><option>Rooftop Solar Solutions</option></select></label>
          <label class="block sm:col-span-2"><span class="mb-2 block text-sm font-extrabold text-[#0A2540]">Message</span><textarea required name="message" rows="5" class="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Tell us about your property or energy needs"></textarea></label>
        </div>
        <button type="submit" class="mt-6 inline-flex h-12 items-center rounded-full bg-brand-green px-7 text-sm font-extrabold text-white">Send Enquiry</button>
        <p id="enquiry-success" class="hidden mt-3 text-sm font-bold text-brand-green">Thank you. Your enquiry has been noted. Our team will get back to you soon.</p>
      </form>
    </div>
  </div>
</section>
<section class="bg-white px-4 py-16">
  <div class="mx-auto max-w-[900px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">QUICK ACTIONS</p><h2 class="mt-3 font-extrabold text-brand-navy">Reach the Right Support Channel</h2></div>
  <div class="mx-auto mt-12 grid max-w-[980px] grid-cols-2 gap-8 sm:grid-cols-4">
    <a href="tel:+918050018267" class="quick-action flex flex-col items-center gap-3.5 text-center"><span class="quick-icon flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] text-[#1d4f91] sm:h-[80px] sm:w-[80px]">${icon("call", 28)}</span><span class="quick-label text-[14px] font-extrabold text-[#0A2540]">Call Now</span></a>
    <a href="https://wa.me/918050018267?text=Hi%20Samatha%2C%20I%20need%20solar%20support." target="_blank" rel="noopener noreferrer" class="quick-action flex flex-col items-center gap-3.5 text-center"><span class="quick-icon flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] text-[#1d4f91] sm:h-[80px] sm:w-[80px]">${icon("whatsapp", 28)}</span><span class="quick-label text-[14px] font-extrabold text-[#0A2540]">WhatsApp Support</span></a>
    <a href="contact.html#enquiry" class="quick-action flex flex-col items-center gap-3.5 text-center"><span class="quick-icon flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] text-[#1d4f91] sm:h-[80px] sm:w-[80px]">${icon("map", 28)}</span><span class="quick-label text-[14px] font-extrabold text-[#0A2540]">Book Site Visit</span></a>
    <a href="mailto:enquiry@samatha.green" class="quick-action flex flex-col items-center gap-3.5 text-center"><span class="quick-icon flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#eef3f8] text-[#1d4f91] sm:h-[80px] sm:w-[80px]">${icon("email", 28)}</span><span class="quick-label text-[14px] font-extrabold text-[#0A2540]">Email Support</span></a>
  </div>
</section>
<section class="bg-[#f7fafc] px-4 py-16">
  <div class="mx-auto max-w-[900px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">FIND US</p><h2 class="mt-3 font-extrabold text-brand-navy">Office Location</h2></div>
  <div class="mx-auto mt-10 grid max-w-[1280px] overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[0.9fr_1.2fr]">
    <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
      <span class="text-[#2cb673]">${icon("map", 22)}</span>
      <h3 class="page-card-title mt-4 font-extrabold text-brand-navy">Samatha Green Energy Solutions Pvt Ltd</h3>
      <p class="mt-1 text-base font-bold text-slate-500">Solar Energy Company</p>
      <p class="page-desc mt-4">No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016</p>
      <a href="https://www.google.com/maps?q=13.0192437,77.6788921&z=17&hl=en" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex h-11 w-fit items-center rounded-full bg-[#14559b] px-6 text-sm font-semibold text-white">Open in Google Maps</a>
    </div>
    <div class="relative min-h-[340px] bg-slate-100 lg:min-h-[460px]"><iframe title="Office location" src="https://www.google.com/maps?q=13.0192437,77.6788921&hl=en&z=17&output=embed" class="absolute inset-0 h-full w-full border-0" loading="lazy"></iframe></div>
  </div>
</section>
`
});

files["blog.html"] = page({
  title: "Solar Energy Insights and Planning Guides | Samatha Green Energy Solutions",
  description: "Practical guides on rooftop solar, hybrid systems, battery storage, and renewable energy planning.",
  root: "",
  pageName: "blog",
  file: "blog.html",
  cta: true,
  body: `
${banner("", "Blog", "Insights and practical guidance for choosing, installing, and maintaining renewable energy systems.")}
<section class="bg-[#f4f8fc] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[920px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-[#2cb673]">LATEST ARTICLES</p><h2 class="page-title mt-3 font-extrabold text-[#0A2540]">Renewable Energy Insights</h2><p class="page-desc mx-auto mt-4 max-w-2xl">Explore practical guidance on solar, battery storage, hybrid energy systems, and smart renewable energy planning.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
    <article class="hover-card flex h-full flex-col rounded-[18px] border border-[#E6EDF4] bg-white p-6"><span class="grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="mt-5 text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">ENERGY PLANNING</p><h3 class="mt-3 !text-[24px] font-extrabold text-[#0A2540]">How to Choose the Right Renewable Energy System</h3><p class="page-desc mt-3 flex-1">A practical look at matching solar, hybrid, BESS, and microgrid options to your site, energy usage, and backup requirements.</p><p class="mt-6 text-sm font-semibold text-[#6B7A8D]">May 2026</p></article>
    <article class="hover-card flex h-full flex-col rounded-[18px] border border-[#E6EDF4] bg-white p-6"><span class="grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="mt-5 text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">BATTERY STORAGE</p><h3 class="mt-3 !text-[24px] font-extrabold text-[#0A2540]">Why BESS Matters for Reliable Clean Power</h3><p class="page-desc mt-3 flex-1">Battery Energy Storage Systems improve backup, peak load management, renewable energy utilization, and long-term energy reliability.</p><p class="mt-6 text-sm font-semibold text-[#6B7A8D]">May 2026</p></article>
    <article class="hover-card flex h-full flex-col rounded-[18px] border border-[#E6EDF4] bg-white p-6"><span class="grid h-12 w-12 place-items-center rounded-xl bg-[#2cb673]/12 text-[#2cb673]">${icon("book", 23)}</span><p class="mt-5 text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">SOLAR SOLUTIONS</p><h3 class="mt-3 !text-[24px] font-extrabold text-[#0A2540]">Understanding On-Grid, Off-Grid, and Hybrid Systems</h3><p class="page-desc mt-3 flex-1">Compare the three common solar system types and learn which one fits homes, businesses, industries, and remote sites.</p><p class="mt-6 text-sm font-semibold text-[#6B7A8D]">May 2026</p></article>
  </div>
</section>
`
});

files["projects.html"] = page({
  title: "Solar Projects & Installation Gallery | Samatha Green Energy Solutions",
  description: "See completed rooftop solar, hybrid battery backup, and commercial solar installations.",
  root: "",
  pageName: "projects",
  file: "projects.html",
  cta: true,
  body: `
${banner("", "Projects & Gallery", "A look at completed solar panel installation projects across homes, businesses, and industrial facilities.")}
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">PROJECT GALLERY</p><h2 class="mt-3 text-[clamp(1.55rem,3.2vw,2.2rem)] font-extrabold text-brand-navy">Residential, Commercial, and Industrial Solar Work</h2><p class="mx-auto mt-4 max-w-2xl text-[19px] text-slate-500">Open any project card to view specifications, images, and installation details.</p></div>
  <div id="projects-gallery" class="mx-auto mt-10 grid max-w-[1200px] gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
  <div class="mx-auto mt-12 flex max-w-[1200px] justify-center"><a href="contact.html" class="inline-flex h-11 items-center rounded-full bg-brand-navy px-6 text-sm font-semibold text-white hover:bg-brand-green">Start Your Project</a></div>
</section>
`
});

const productBody = (root, active) => `
${hero(root)}
<section class="bg-[#eef3f8] px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[920px] text-center"><p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2cb673]">Products</p><h2 class="page-title mt-3 font-extrabold text-[#0A2540]">Our Products Categories - reneμX</h2><p class="page-desc mx-auto mt-3 max-w-2xl">Choose the right service category for your property type, energy usage, monitoring needs, and long-term maintenance expectations.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1280px] gap-8">
    <article id="renemu-home" class="hover-card scroll-mt-28 rounded-2xl bg-white p-5 ring-1 ${active === "home" ? "ring-[#2cb673]/40" : "ring-slate-200"} shadow-[0_16px_40px_rgba(0,0,0,0.16)]"><div class="p-2 sm:p-5"><span class="text-[#2cb673]">${icon("house", 42)}</span><p class="mt-4 text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">INDEPENDENT HOMES &amp; SMART LIVING</p><h3 class="page-card-title mt-2 font-extrabold text-[#0A2540]">reneμ Home</h3><p class="page-desc mt-4">Designed for independent homes seeking smarter energy management, reneμ Home combines clean energy solutions with intelligent monitoring for greater savings, convenience, and energy independence.</p><button type="button" class="js-open-quote mt-7 inline-flex h-11 items-center rounded-full bg-[#2cb673] px-6 text-sm font-bold text-white" data-service="reneμ Home">Get Service Quote</button></div></article>
    <article id="renemu-elite" class="hover-card scroll-mt-28 rounded-2xl bg-white p-5 ring-1 ${active === "elite" ? "ring-[#2cb673]/40" : "ring-slate-200"} shadow-[0_16px_40px_rgba(0,0,0,0.16)]"><div class="p-2 sm:p-5"><span class="text-[#2cb673]">${icon("elite", 42)}</span><p class="mt-4 text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">PREMIUM VILLAS &amp; LUXURY SPACES</p><h3 class="page-card-title mt-2 font-extrabold text-[#0A2540]">reneμ Elite</h3><p class="page-desc mt-4">Crafted for premium villas and luxury spaces, reneμ Elite delivers advanced renewable energy solutions that seamlessly integrate sustainability, aesthetics, and high-performance energy management.</p><button type="button" class="js-open-quote mt-7 inline-flex h-11 items-center rounded-full bg-[#2cb673] px-6 text-sm font-bold text-white" data-service="reneμ Elite">Get Service Quote</button></div></article>
    <article id="renemu-plus" class="hover-card scroll-mt-28 rounded-2xl bg-white p-5 ring-1 ${active === "plus" ? "ring-[#2cb673]/40" : "ring-slate-200"} shadow-[0_16px_40px_rgba(0,0,0,0.16)]"><div class="p-2 sm:p-5"><span class="text-[#2cb673]">${icon("plus", 42)}</span><p class="mt-4 text-[14px] font-extrabold uppercase tracking-[0.18em] text-[#2cb673]">COMMERCIAL &amp; INDUSTRIAL PROJECTS</p><h3 class="page-card-title mt-2 font-extrabold text-[#0A2540]">reneμ Plus</h3><p class="page-desc mt-4">Engineered for commercial, industrial and utility projects, reneμ Plus delivers customized renewable energy solutions tailored to resolve complex requirements, maximizing efficiency, reliability, and long-term business value with accurate ROI.</p><button type="button" class="js-open-quote mt-7 inline-flex h-11 items-center rounded-full bg-[#2cb673] px-6 text-sm font-bold text-white" data-service="reneμ Plus">Get Service Quote</button></div></article>
  </div>
</section>
`;

files["products/samatha-home.html"] = page({ title: "reneμ Home Rooftop Solar | Samatha Green Energy Solutions", description: "reneμ Home rooftop solar for residences in Bengaluru.", root: "../", pageName: "products", file: "products/samatha-home.html", cta: true, body: productBody("../", "home") });
files["products/samatha-elite.html"] = page({ title: "reneμ Elite Premium Solar | Samatha Green Energy Solutions", description: "reneμ Elite premium solar for villas and high-performance homes.", root: "../", pageName: "products", file: "products/samatha-elite.html", cta: true, body: productBody("../", "elite") });
files["products/samatha-plus.html"] = page({ title: "reneμ Plus Commercial Solar | Samatha Green Energy Solutions", description: "reneμ Plus commercial and industrial solar with scalable EPC delivery.", root: "../", pageName: "products", file: "products/samatha-plus.html", cta: true, body: productBody("../", "plus") });

const solutionBody = (root) => `
${hero(root)}
<section class="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div class="mx-auto max-w-[1100px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">SYSTEM TYPES</p><h2 class="page-title mt-3 font-bold text-brand-navy">Choose the Right Solar System</h2><p class="page-desc mx-auto mt-4 max-w-2xl">The first three system types cover standard grid connected, independent, and backup ready solar requirements.</p></div>
  <div class="mx-auto mt-10 grid max-w-[1180px] gap-5 lg:grid-cols-3">
    <article id="on-grid" class="hover-card scroll-mt-28 rounded-[20px] border border-[#E6EDF4] bg-[#F4F8FB] p-4 sm:p-5"><a href="${root}solutions/on-grid.html#on-grid" class="group flex h-full flex-col no-underline"><div class="overflow-hidden rounded-[16px] bg-white px-4 py-8"><div class="relative mx-auto h-[170px] w-full max-w-[200px]"><img src="${root}images/ongrid21.jpg" alt="On-Grid System" class="absolute inset-0 h-full w-full object-contain transition group-hover:scale-105" /></div></div><h3 class="page-card-title mt-5 px-2 font-extrabold text-[#0B2545]">On-Grid System</h3><p class="page-desc mt-3 px-2">The standard choice for the fastest return on investment (ROI) with hassle-free maintenance. This system is connected to the utility grid and helps reduce electricity bills through net metering.</p></a></article>
    <article id="off-grid" class="hover-card scroll-mt-28 rounded-[20px] border border-[#E6EDF4] bg-[#F4F8FB] p-4 sm:p-5"><a href="${root}solutions/off-grid.html#off-grid" class="group flex h-full flex-col no-underline"><div class="overflow-hidden rounded-[16px] bg-white px-4 py-8"><div class="relative mx-auto h-[170px] w-full max-w-[200px]"><img src="${root}images/offgrid.jpg" alt="Off-Grid System" class="absolute inset-0 h-full w-full object-contain transition group-hover:scale-105" /></div></div><h3 class="page-card-title mt-5 px-2 font-extrabold text-[#0B2545]">Off-Grid System</h3><p class="page-desc mt-3 px-2">Recommended for locations where grid power is unavailable or unreliable. This system uses battery backup and works independently without utility grid support.</p></a></article>
    <article id="hybrid" class="hover-card scroll-mt-28 rounded-[20px] border border-[#E6EDF4] bg-[#F4F8FB] p-4 sm:p-5"><a href="${root}solutions/hybrid.html#hybrid" class="group flex h-full flex-col no-underline"><div class="overflow-hidden rounded-[16px] bg-white px-4 py-8"><div class="relative mx-auto h-[170px] w-full max-w-[200px]"><img src="${root}images/hybrid21.jpg" alt="Hybrid System" class="absolute inset-0 h-full w-full object-contain transition group-hover:scale-105" /></div></div><h3 class="page-card-title mt-5 px-2 font-extrabold text-[#0B2545]">Hybrid System</h3><p class="page-desc mt-3 px-2">Best for areas with frequent power cuts. It combines battery backup and grid connection while also allowing excess power to be sent back through net metering.</p></a></article>
  </div>
</section>
<section class="bg-white px-4 py-16">
  <div class="mx-auto max-w-[820px] text-center"><p class="text-[14px] font-extrabold tracking-[0.18em] text-brand-green">COMPARISON</p><h2 class="page-title mt-3 font-extrabold text-brand-navy">System Comparison Table</h2><p class="page-desc mx-auto mt-4 max-w-[640px]">Compare On-Grid, Off-Grid, and Hybrid solar systems across grid connection, backup, outage support, surplus energy handling, and cost.</p></div>
  <div class="mx-auto mt-10 max-w-[1210px] overflow-x-auto rounded-[22px] border border-[#e6edf5] bg-white">
    <table class="min-w-[980px] w-full border-collapse text-left">
      <thead><tr class="bg-brand-blue text-white"><th class="px-6 py-[18px] text-base font-bold">Property</th><th class="border-l border-white/20 px-6 py-[18px]">On-Grid</th><th class="border-l border-white/20 px-6 py-[18px]">Off-Grid</th><th class="border-l border-white/20 px-6 py-[18px]">Hybrid</th></tr></thead>
      <tbody>
        <tr class="bg-white"><td class="px-6 py-5 font-bold text-brand-navy">Connection to Grid</td><td class="px-6 py-5 text-slate-500">Yes</td><td class="px-6 py-5 text-slate-500">No</td><td class="px-6 py-5 text-slate-500">Yes</td></tr>
        <tr class="bg-[#f4f8fc]"><td class="px-6 py-5 font-bold text-brand-navy">Battery Backup</td><td class="px-6 py-5 text-slate-500">No</td><td class="px-6 py-5 text-slate-500">Yes</td><td class="px-6 py-5 text-slate-500">Yes</td></tr>
        <tr class="bg-white"><td class="px-6 py-5 font-bold text-brand-navy">Night Time</td><td class="px-6 py-5 text-slate-500">Uses Grid</td><td class="px-6 py-5 text-slate-500">Uses Battery</td><td class="px-6 py-5 text-slate-500">Uses both Grid and Battery</td></tr>
        <tr class="bg-[#f4f8fc]"><td class="px-6 py-5 font-bold text-brand-navy">In Case of Low Energy Generation</td><td class="px-6 py-5 text-slate-500">Supplements through electric grid</td><td class="px-6 py-5 text-slate-500">Unable to charge battery</td><td class="px-6 py-5 text-slate-500">Supplements through electric grid</td></tr>
        <tr class="bg-white"><td class="px-6 py-5 font-bold text-brand-navy">In Case of Surplus Energy</td><td class="px-6 py-5 text-slate-500">Sent back to grid</td><td class="px-6 py-5 text-slate-500">Wasted</td><td class="px-6 py-5 text-slate-500">Sent back to the grid</td></tr>
        <tr class="bg-[#f4f8fc]"><td class="px-6 py-5 font-bold text-brand-navy">Cost</td><td class="px-6 py-5 text-slate-500">Low</td><td class="px-6 py-5 text-slate-500">High</td><td class="px-6 py-5 text-slate-500">High</td></tr>
        <tr class="bg-white"><td class="px-6 py-5 font-bold text-brand-navy">Works During Power Outages</td><td class="px-6 py-5 text-slate-500">No</td><td class="px-6 py-5 text-slate-500">Yes</td><td class="px-6 py-5 text-slate-500">Yes</td></tr>
        <tr class="bg-[#f4f8fc]"><td class="px-6 py-5 font-bold text-brand-navy">Unit Adjustment in Electricity Bill</td><td class="px-6 py-5 text-slate-500">Yes</td><td class="px-6 py-5 text-slate-500">No</td><td class="px-6 py-5 text-slate-500">Yes</td></tr>
      </tbody>
    </table>
  </div>
</section>
<section class="bg-[#eef3f8] px-4 py-16">
  <div class="mx-auto max-w-[1000px] text-center"><p class="text-[14px] font-extrabold tracking-[0.16em] text-brand-green">ADVANCED SOLUTIONS</p><h2 class="page-title mt-3 font-bold text-brand-navy">Energy Storage Solutions</h2><p class="page-desc mx-auto mt-4 max-w-3xl">For customers who need stronger backup, smarter energy control, and reliable renewable power, we design advanced storage systems.</p></div>
  <div class="mx-auto mt-10 grid max-w-[580px]"><article id="ess" class="hover-card scroll-mt-28 rounded-[20px] border border-[#E6EDF4] bg-[#F4F8FB] p-4 sm:p-5"><a href="${root}solutions/ess.html#ess" class="group flex h-full flex-col no-underline"><div class="overflow-hidden rounded-[16px] bg-white px-4 py-8"><div class="relative mx-auto h-[170px] w-full max-w-[200px]"><img src="${root}images/ess.jpg" alt="ESS" class="absolute inset-0 h-full w-full object-contain" /></div></div><h3 class="page-card-title mt-5 px-2 font-extrabold text-[#0B2545]">ESS (Energy Storage System)</h3><p class="page-desc mt-3 px-2">A smart battery hub that manages the timing and flow of electricity to save money and provide backup protection during blackouts.</p></a></article></div>
</section>
`;

files["solutions/on-grid.html"] = page({ title: "On-Grid Solar Systems in Bengaluru | Samatha Green Energy Solutions", description: "Grid-tied on-grid solar systems for faster payback and net metering.", root: "../", pageName: "solutions", file: "solutions/on-grid.html", cta: true, ctaTitle: "Need Help Choosing the Right Solar System?", ctaDesc: "Our experts will compare on-grid, off-grid, hybrid, and ESS options for your property.", body: solutionBody("../") });
files["solutions/off-grid.html"] = page({ title: "Off-Grid Solar with Battery Backup | Samatha Green Energy Solutions", description: "Independent off-grid solar systems with battery backup.", root: "../", pageName: "solutions", file: "solutions/off-grid.html", cta: true, ctaTitle: "Need Help Choosing the Right Solar System?", ctaDesc: "Our experts will compare on-grid, off-grid, hybrid, and ESS options for your property.", body: solutionBody("../") });
files["solutions/hybrid.html"] = page({ title: "Hybrid Solar Systems in Bengaluru | Samatha Green Energy Solutions", description: "Hybrid solar systems with grid connection and battery backup.", root: "../", pageName: "solutions", file: "solutions/hybrid.html", cta: true, ctaTitle: "Need Help Choosing the Right Solar System?", ctaDesc: "Our experts will compare on-grid, off-grid, hybrid, and ESS options for your property.", body: solutionBody("../") });
files["solutions/ess.html"] = page({ title: "Energy Storage Systems (ESS) | Samatha Green Energy Solutions", description: "Battery energy storage systems for backup and peak-load savings.", root: "../", pageName: "solutions", file: "solutions/ess.html", cta: true, ctaTitle: "Need Help Choosing the Right Solar System?", ctaDesc: "Our experts will compare on-grid, off-grid, hybrid, and ESS options for your property.", body: solutionBody("../") });

const outDir = __dirname;
for (const [name, html] of Object.entries(files)) {
  const full = path.join(outDir, name);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, "utf8");
  console.log("wrote", name);
}

