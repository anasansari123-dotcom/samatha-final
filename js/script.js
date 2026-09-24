(function () {
  var root = document.documentElement.getAttribute("data-root") || "";
  var page = document.documentElement.getAttribute("data-page") || "";
  var img = function (name) { return root + "images/" + name; };
  var href = function (path) { return root + path; };

  function qs(sel, parent) { return (parent || document).querySelector(sel); }
  function qsa(sel, parent) { return Array.prototype.slice.call((parent || document).querySelectorAll(sel)); }

  function activeClass(names) {
    return names.indexOf(page) !== -1 ? "text-brand-green" : "text-slate-700 hover:text-brand-green";
  }

  function chevron() {
    return '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>';
  }

  function renderHeader() {
    var el = qs("#site-header");
    if (!el) return;
    if (el.querySelector("header")) return;
    el.innerHTML =
      '<header class="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">' +
      '<div class="mx-auto flex h-[92px] w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">' +
      '<div class="flex min-w-0 flex-1 items-center justify-start">' +
      '<a href="' + href("index.html") + '" class="flex shrink-0 items-center"><img src="' + img("logo.png") + '" alt="Samatha Green Energy Solutions" class="h-[3.5rem] w-auto object-contain sm:h-[3.85rem] lg:h-[4.25rem]" /></a>' +
      "</div>" +
      '<nav id="desktop-nav" class="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex mr-10">' +
      '<a href="' + href("index.html") + '" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["home"]) + '">Home</a>' +
      '<div class="relative nav-dd" data-dd="products">' +
      '<button type="button" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["products"]) + '" aria-haspopup="menu">Products ' + chevron() + "</button>" +
      '<div class="nav-dd-menu hidden absolute left-0 top-full z-50 pt-3">' +
      '<div class="min-w-[180px] rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("products/samatha-home.html") + '#renemu-home">reneμ Home</a>' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("products/samatha-elite.html") + '#renemu-elite">reneμ Elite</a>' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("products/samatha-plus.html") + '#renemu-plus">reneμ Plus</a>' +
      "</div></div></div>" +
      '<div class="relative nav-dd" data-dd="solutions">' +
      '<button type="button" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["solutions"]) + '" aria-haspopup="menu">Solutions ' + chevron() + "</button>" +
      '<div class="nav-dd-menu hidden absolute left-0 top-full z-50 pt-3">' +
      '<div class="min-w-[180px] rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("solutions/on-grid.html") + '#on-grid">On grid</a>' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("solutions/off-grid.html") + '#off-grid">Off grid</a>' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("solutions/hybrid.html") + '#hybrid">Hybrid</a>' +
      '<a class="block px-5 py-2.5 text-[0.92rem] font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green" href="' + href("solutions/ess.html") + '#ess">ESS</a>' +
      "</div></div></div>" +
      '<a href="' + href("services.html") + '" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["services"]) + '">Services</a>' +
      '<a href="' + href("about.html") + '" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["about"]) + '">About Us</a>' +
      '<a href="' + href("blog.html") + '" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["blog"]) + '">Blog</a>' +
      '<a href="' + href("contact.html") + '" class="inline-flex items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium ' + activeClass(["contact"]) + '">Contact Us</a>' +
      "</nav>" +
      '<div class="flex flex-1 items-center justify-end gap-2.5">' +
      '<div id="desktop-actions" class="hidden items-center gap-2.5 lg:flex">' +
      '<button type="button" class="js-open-search flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f8] text-brand-blue transition hover:bg-[#e2ebf4]" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      '<a href="' + href("index.html") + '#download" class="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-[#b8cce3] bg-white px-4 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-[#f5f9fd]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4V15M12 15L8 11M12 15L16 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5 19H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>Download App</a>' +
      '<button type="button" class="js-open-quote inline-flex h-10 items-center whitespace-nowrap rounded-full bg-brand-green px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(45,189,110,0.28)] transition hover:bg-brand-green-dark">Get a Free Quote</button>' +
      "</div>" +
      '<button type="button" class="js-open-search inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden" aria-label="Search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      '<button type="button" id="mobile-toggle" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden" aria-label="Toggle menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      "</div></div>" +
      '<div id="mobile-menu" class="hidden border-t border-slate-100 bg-white px-4 py-4 lg:hidden">' +
      '<nav class="flex flex-col gap-1">' +
      '<a href="' + href("index.html") + '" class="py-2 text-base font-medium ' + activeClass(["home"]) + '">Home</a>' +
      '<button type="button" class="js-mobile-dd flex w-full items-center justify-between py-2 text-base font-medium ' + activeClass(["products"]) + '" data-target="m-products">Products ' + chevron() + "</button>" +
      '<div id="m-products" class="hidden mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("products/samatha-home.html") + '#renemu-home">reneμ Home</a>' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("products/samatha-elite.html") + '#renemu-elite">reneμ Elite</a>' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("products/samatha-plus.html") + '#renemu-plus">reneμ Plus</a>' +
      "</div>" +
      '<button type="button" class="js-mobile-dd flex w-full items-center justify-between py-2 text-base font-medium ' + activeClass(["solutions"]) + '" data-target="m-solutions">Solutions ' + chevron() + "</button>" +
      '<div id="m-solutions" class="hidden mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("solutions/on-grid.html") + '#on-grid">On grid</a>' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("solutions/off-grid.html") + '#off-grid">Off grid</a>' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("solutions/hybrid.html") + '#hybrid">Hybrid</a>' +
      '<a class="block py-1.5 text-sm text-slate-600" href="' + href("solutions/ess.html") + '#ess">ESS</a>' +
      "</div>" +
      '<a href="' + href("services.html") + '" class="py-2 text-base font-medium ' + activeClass(["services"]) + '">Services</a>' +
      '<a href="' + href("about.html") + '" class="py-2 text-base font-medium ' + activeClass(["about"]) + '">About Us</a>' +
      '<a href="' + href("blog.html") + '" class="py-2 text-base font-medium ' + activeClass(["blog"]) + '">Blog</a>' +
      '<a href="' + href("contact.html") + '" class="py-2 text-base font-medium ' + activeClass(["contact"]) + '">Contact Us</a>' +
      "</nav>" +
      '<div class="mt-4 flex flex-col gap-2">' +
      '<a href="' + href("index.html") + '#download" class="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#b8cce3] text-sm font-semibold text-brand-blue">Download App</a>' +
      '<button type="button" class="js-open-quote inline-flex h-11 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white">Get a Free Quote</button>' +
      "</div></div></header>";
  }

  function renderFooter() {
    var el = qs("#site-footer");
    if (!el) return;
    var showCta = el.getAttribute("data-cta") === "true";
    var ctaTitle = el.getAttribute("data-cta-title") || "Ready to Switch to Solar Energy?";
    var ctaDesc = el.getAttribute("data-cta-desc") || "Get expert guidance and a customized solar solution for your property.";
    var html = "";
    if (showCta) {
      html +=
        '<section class="cta-banner w-full"><div class="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-4 py-12 sm:flex-row sm:items-center sm:px-6 sm:py-14 lg:px-8">' +
        '<div class="max-w-3xl"><h3 class="page-title max-w-[720px] font-sans font-extrabold tracking-[-0.02em]">' + ctaTitle + "</h3>" +
        '<p class="page-desc-on-dark mt-3 max-w-[680px]">' + ctaDesc + "</p></div>" +
        '<a href="' + href("contact.html") + '#enquiry" class="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#0A2540] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-slate-50 hover:-translate-y-0.5">Request a Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></a></div></section>';
    }
    html +=
      '<footer id="contact" class="bg-[#071f3b] text-white">' +
      '<div class="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:px-8">' +
      '<div><a href="' + href("index.html") + '" class="footer-logo"><img src="' + img("logo-footer.png") + '" alt="Samatha Green Energy Solutions" /></a>' +
      '<p class="max-w-sm text-base font-medium leading-7 text-white/72">Professional solar panel installation, rooftop solar solutions, maintenance, and renewable energy services for homes, businesses, and industries.</p>' +
      '<div class="mt-6 flex gap-3">' +
      '<a href="https://www.facebook.com/profile.php?id=61583996971893" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#2cb673]"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
      '<a href="https://www.instagram.com/samathagreenenergysolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#2cb673]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="17" height="17" x="3.5" y="3.5" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg></a>' +
      "</div></div>" +
      '<div><h3 class="mb-5 text-xl font-bold !text-white">Quick Links</h3><div class="grid gap-3">' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("index.html") + '">Home</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("index.html") + '#products">Products</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("solutions/on-grid.html") + '">Solutions</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("services.html") + '">Services</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("about.html") + '">About Us</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("blog.html") + '">Blog</a>' +
      "</div></div>" +
      '<div><h3 class="mb-5 text-xl font-bold !text-white">Products</h3><div class="grid gap-3">' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("products/samatha-home.html") + '#renemu-home">reneμ Home</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("products/samatha-elite.html") + '#renemu-elite">reneμ Elite</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("products/samatha-plus.html") + '#renemu-plus">reneμ Plus</a>' +
      '<a class="text-white/72 text-base transition hover:text-[#2cb673]" href="' + href("services.html") + '">Services & AMC Support</a>' +
      "</div></div>" +
      '<div><h3 class="mb-5 text-xl font-bold !text-white">Contact</h3><div class="grid gap-3 text-white/72">' +
      '<a href="tel:+918050018267" class="flex gap-3 leading-7 transition hover:text-[#2cb673]"><span class="mt-0.5 shrink-0 text-[#2cb673]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span>+91 80500 18267</span></a>' +
      '<a href="mailto:enquiry@samatha.green" class="flex gap-3 leading-7 transition hover:text-[#2cb673]"><span class="mt-0.5 shrink-0 text-[#2cb673]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span><span>enquiry@samatha.green</span></a>' +
      '<p class="flex gap-3 leading-7"><span class="mt-0.5 shrink-0 text-[#2cb673]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span><span>No #53, Kowdenahalli, Kalkere Main Rd, K R Puram, Bengaluru, Karnataka 560016</span></p>' +
      '<p class="flex gap-3 leading-7"><span class="mt-0.5 shrink-0 text-[#2cb673]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>Mon - Sat: 9:00 AM - 6:00 PM</span></p>' +
      "</div></div></div>" +
      '<div class="border-t border-white/10 py-5 text-center text-sm text-white/65">Copyright © ' + SITE_DATA.year + ' Samatha Green Energy Solutions Pvt Ltd. All rights reserved. Powered by <a href="https://dreambuzz.in" target="_blank" rel="noreferrer" class="font-semibold text-[#2cb673] hover:text-white">DreamBuzz Solutions</a>.</div></footer>';
    el.innerHTML = html;
  }

  function bindHeader() {
    qsa(".nav-dd").forEach(function (dd) {
      var menu = qs(".nav-dd-menu", dd);
      dd.addEventListener("mouseenter", function () { menu.classList.remove("hidden"); });
      dd.addEventListener("mouseleave", function () { menu.classList.add("hidden"); });
      qs("button", dd).addEventListener("click", function () { menu.classList.toggle("hidden"); });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-dd")) qsa(".nav-dd-menu").forEach(function (m) { m.classList.add("hidden"); });
    });
    var toggle = qs("#mobile-toggle");
    var menu = qs("#mobile-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () { menu.classList.toggle("hidden"); });
    }
    qsa(".js-mobile-dd").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = qs("#" + btn.getAttribute("data-target"));
        if (target) target.classList.toggle("hidden");
      });
    });
  }

  function renderQuoteModal() {
    if (qs("#quote-modal")) return;
    var wrap = document.createElement("div");
    wrap.id = "quote-modal";
    wrap.className = "hidden fixed inset-0 z-[100] grid place-items-end bg-brand-navy/70 backdrop-blur-sm sm:place-items-center sm:px-4 sm:py-6";
    wrap.innerHTML =
      '<div class="max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl" data-stop="true">' +
      '<div class="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-7"><div>' +
      '<p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">Free Solar Quote</p>' +
      '<h2 id="quote-modal-title" class="mt-2 text-2xl font-extrabold text-brand-navy">Get a Customized Solar Proposal</h2>' +
      '<p class="mt-2 leading-6 text-slate-600">Share your requirement and send it directly to our WhatsApp team.</p></div>' +
      '<button type="button" class="js-close-quote grid h-10 w-10 place-items-center rounded-full bg-[#eef3f8] text-brand-navy hover:bg-brand-green hover:text-white" aria-label="Close quote form">×</button></div>' +
      '<form id="quote-form" class="p-5 sm:p-7"><div class="grid gap-5 sm:grid-cols-2">' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy">Name<input required name="name" class="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" placeholder="Your name"></label>' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy">Phone<input required type="tel" name="phone" class="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" placeholder="10-digit mobile number"></label>' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy">Location<input required name="location" class="rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/15" placeholder="City / area"></label>' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy">Service Required<select name="service" class="rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand-green"><option>Residential Solar</option><option>Commercial Solar</option><option>Industrial Solar</option><option>Hybrid / BESS</option><option>reneμ Home</option><option>reneμ Elite</option><option>reneμ Plus</option><option>AMC / Service Support</option><option>Site Survey</option><option>Other</option></select></label>' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy sm:col-span-2">Property Type<select name="propertyType" class="rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand-green"><option>Residential</option><option>Commercial</option><option>Industrial</option><option>Institutional</option><option>Other</option></select></label>' +
      '<label class="grid gap-2 text-sm font-semibold text-brand-navy sm:col-span-2">Message<textarea name="message" rows="4" class="resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-green" placeholder="Tell us about your roof space, monthly bill, or any special requirement"></textarea></label>' +
      '</div><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p class="max-w-sm text-sm leading-6 text-slate-500">Submitting opens WhatsApp with your quote details pre-filled.</p><button type="submit" class="inline-flex h-12 items-center justify-center rounded-full bg-[#2cb673] px-8 text-sm font-bold text-white">Send on WhatsApp</button></div></form></div>';
    document.body.appendChild(wrap);
    wrap.addEventListener("click", function (e) {
      if (!e.target.closest("[data-stop]")) closeQuote();
    });
    qs("#quote-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      var lines = ["New Solar Quote Request", "Name: " + f.name.value, "Phone: " + f.phone.value, "Location: " + f.location.value, "Service Required: " + f.service.value, "Property Type: " + f.propertyType.value, "Message: " + (f.message.value || "N/A")];
      window.open("https://wa.me/" + SITE_DATA.whatsapp + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener,noreferrer");
      closeQuote();
      f.reset();
    });
  }

  function openQuote(service) {
    var modal = qs("#quote-modal");
    if (!modal) return;
    if (service) {
      qs("#quote-modal-title").textContent = "Get " + service + " Quote";
      var sel = qs('[name="service"]', modal);
      if (sel) sel.value = service;
    } else {
      qs("#quote-modal-title").textContent = "Get a Customized Solar Proposal";
    }
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeQuote() {
    var modal = qs("#quote-modal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function renderSearch() {
    if (qs("#search-overlay")) return;
    var wrap = document.createElement("div");
    wrap.id = "search-overlay";
    wrap.className = "hidden fixed inset-0 z-[90] overflow-hidden bg-black/72 p-4 text-white backdrop-blur-sm";
    wrap.innerHTML =
      '<div class="mx-auto flex h-full max-w-[1280px] flex-col px-2 py-8 sm:px-6"><div class="flex justify-end"><button type="button" class="js-close-search grid h-12 w-12 place-items-center rounded-full bg-white text-[#0A2540]">×</button></div>' +
      '<div class="mx-auto mt-10 w-full max-w-3xl"><form id="search-form" class="flex items-center gap-3 rounded-full bg-white px-5 py-4 text-[#0A2540] shadow-2xl">' +
      '<input id="search-input" type="search" placeholder="Search products, services, solutions, FAQs..." class="min-w-0 flex-1 bg-transparent text-lg font-semibold outline-none placeholder:text-slate-400" />' +
      '</form><div id="search-results" class="mt-6 grid max-h-[calc(100vh-220px)] gap-3 overflow-y-auto pr-1"></div></div></div>';
    document.body.appendChild(wrap);
    qs("#search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var first = qs("#search-results a");
      if (first) window.location.href = first.getAttribute("href");
    });
    qs("#search-input").addEventListener("input", function () {
      var term = this.value.trim().toLowerCase();
      var box = qs("#search-results");
      if (!term) { box.innerHTML = ""; return; }
      var results = SITE_DATA.searchIndex.filter(function (item) {
        return (item.title + " " + item.text + " " + item.type).toLowerCase().indexOf(term) !== -1;
      }).slice(0, 8);
      if (!results.length) {
        box.innerHTML = '<p class="rounded-2xl bg-white p-5 text-slate-600 shadow-2xl">No matching website content found.</p>';
        return;
      }
      box.innerHTML = results.map(function (item) {
        return '<a href="' + href(item.href) + '" class="rounded-2xl bg-white p-5 text-left text-[#0A2540] shadow-2xl ring-1 ring-slate-200 transition hover:-translate-y-0.5"><span class="text-xs font-bold uppercase tracking-[0.16em] text-brand-green">' + item.type + '</span><span class="mt-2 block text-xl font-extrabold">' + item.title + '</span><span class="mt-2 block text-sm text-slate-600">' + item.text + "</span></a>";
      }).join("");
    });
  }
  function openSearch() {
    qs("#search-overlay").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(function () { qs("#search-input").focus(); }, 40);
  }
  function closeSearch() {
    qs("#search-overlay").classList.add("hidden");
    document.body.style.overflow = "";
    qs("#search-input").value = "";
    qs("#search-results").innerHTML = "";
  }

  function bindGlobal() {
    document.addEventListener("click", function (e) {
      if (e.target.closest(".js-open-quote")) {
        var name = e.target.closest(".js-open-quote").getAttribute("data-service") || "";
        openQuote(name);
      }
      if (e.target.closest(".js-close-quote")) closeQuote();
      if (e.target.closest(".js-open-search")) openSearch();
      if (e.target.closest(".js-close-search")) closeSearch();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeQuote(); closeSearch(); }
    });
  }

  function initHero() {
    var rootEl = qs("[data-hero]");
    if (!rootEl) return;
    var slides = qsa(".hero-slide", rootEl);
    var dots = qsa("[data-hero-dot]", rootEl);
    var texts = qsa(".hero-copy", rootEl);
    var i = 0;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.style.opacity = idx === i ? "1" : "0"; });
      texts.forEach(function (t, idx) { t.classList.toggle("hidden", idx !== i); });
      dots.forEach(function (d, idx) {
        d.className = idx === i
          ? "rounded-full h-2.5 w-8 bg-brand-green sm:h-3 sm:w-9"
          : "rounded-full h-2.5 w-2.5 bg-white/55 hover:bg-white/80 sm:h-3 sm:w-3";
      });
    }
    var timer = setInterval(function () { show(i + 1); }, 2000);
    var prev = qs("[data-hero-prev]", rootEl);
    var next = qs("[data-hero-next]", rootEl);
    if (prev) prev.addEventListener("click", function () { show(i - 1); });
    if (next) next.addEventListener("click", function () { show(i + 1); });
    dots.forEach(function (d, idx) { d.addEventListener("click", function () { show(idx); }); });
    show(0);
  }

  function initCalculator() {
    var bill = qs("#calc-bill");
    var tariff = qs("#calc-tariff");
    if (!bill || !tariff) return;
    function update() {
      var monthlyBill = Math.max(0, Number(bill.value) || 0);
      var rate = Math.max(0.1, Number(tariff.value) || 0.1);
      var units = monthlyBill / rate;
      var size = units / 120;
      var savings = monthlyBill * 12 * 0.78;
      qs("#calc-size").textContent = size.toFixed(1) + " kW";
      qs("#calc-units").textContent = Math.round(units).toLocaleString("en-IN");
      qs("#calc-savings").textContent = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Math.round(savings));
    }
    bill.addEventListener("input", update);
    tariff.addEventListener("input", update);
    update();
  }

  function initFaq() {
    var box = qs("#faq-list");
    if (!box) return;
    box.innerHTML = SITE_DATA.faqs.map(function (faq, index) {
      return '<div class="faq-item rounded-xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.03)]"><button type="button" class="faq-btn flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded="' + (index === 0) + '"><span class="text-[1.08rem] font-bold text-brand-navy">' + faq.question + '</span><svg class="faq-chevron shrink-0 text-slate-400 transition-transform ' + (index === 0 ? "rotate-180" : "") + '" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button><div class="faq-body ' + (index === 0 ? "" : "hidden") + ' border-t border-slate-100 px-5 pb-4 pt-3"><p class="text-[16px] leading-relaxed text-gray-500">' + faq.answer + "</p></div></div>";
    }).join("");
    qsa(".faq-item", box).forEach(function (item) {
      qs(".faq-btn", item).addEventListener("click", function () {
        var open = !qs(".faq-body", item).classList.contains("hidden");
        qsa(".faq-item", box).forEach(function (other) {
          qs(".faq-body", other).classList.add("hidden");
          qs(".faq-btn", other).setAttribute("aria-expanded", "false");
          qs(".faq-chevron", other).classList.remove("rotate-180");
        });
        if (!open) {
          qs(".faq-body", item).classList.remove("hidden");
          qs(".faq-btn", item).setAttribute("aria-expanded", "true");
          qs(".faq-chevron", item).classList.add("rotate-180");
        }
      });
    });
  }

  function projectCard(project, index) {
    return '<button type="button" class="js-open-project group flex h-full w-full flex-col rounded-2xl text-left transition hover:-translate-y-0.5" data-index="' + index + '">' +
      '<div class="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-slate-200"><img src="' + img(project.image) + '" alt="' + project.title + '" class="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" /></div>' +
      '<div class="flex min-h-[8.25rem] flex-1 flex-col pt-4 text-left"><p class="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#2F9B69]">' + project.category + '</p><h3 class="mt-2 line-clamp-2 min-h-[2.7em] text-[1.28rem] font-extrabold leading-[1.35] text-[#0A2540]">' + project.title + '</h3><p class="mt-auto pt-2 text-sm font-medium text-[#8a94a6]">' + project.location + "</p></div></button>";
  }

  function openProject(index) {
    var project = SITE_DATA.projects[index];
    if (!project) return;
    var existing = qs("#project-modal");
    if (existing) existing.remove();
    var tabIndex = 0;
    var wrap = document.createElement("div");
    wrap.id = "project-modal";
    wrap.className = "fixed inset-0 z-[100] grid place-items-end bg-brand-navy/70 backdrop-blur-sm sm:place-items-center sm:px-4 sm:py-6";
    function paint() {
      var tab = project.tabs[tabIndex];
      wrap.innerHTML =
        '<div class="max-h-[94vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-5xl sm:rounded-3xl" data-stop="true">' +
        '<div class="flex items-start justify-between gap-3 border-b border-slate-200 p-4 sm:p-7"><div><p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">' + project.category + '</p><h2 class="mt-2 text-xl font-extrabold text-brand-navy sm:text-3xl">' + project.title + '</h2><p class="mt-2 text-[13px] text-[#8a94a6]">' + project.location + '</p></div><button type="button" class="js-close-project grid h-10 w-10 place-items-center rounded-full bg-[#eef3f8]">×</button></div>' +
        '<div class="p-4 sm:p-7"><p class="max-w-3xl text-[15px] leading-7 text-slate-600">' + project.description + "</p>" +
        '<div class="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">' + project.specs.map(function (s) { return '<div class="rounded-xl bg-[#eef3f8] px-3.5 py-3 text-[13px] font-bold text-[#001F3F]">' + s + "</div>"; }).join("") + "</div>" +
        '<div class="mt-6 flex gap-2 overflow-x-auto border-b border-slate-200">' + project.tabs.map(function (t, i) {
          return '<button type="button" class="js-project-tab shrink-0 border-b-2 px-3 py-3 text-sm font-bold ' + (i === tabIndex ? "border-brand-green text-brand-green" : "border-transparent text-slate-500") + '" data-tab="' + i + '">' + t.label + "</button>";
        }).join("") + "</div>" +
        '<div class="grid gap-5 pt-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"><div class="overflow-hidden rounded-2xl bg-[#eef3f8]"><img src="' + img(tab.image) + '" alt="' + tab.label + '" class="h-auto w-full object-contain p-2" /></div><div><p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">' + tab.label + '</p><h3 class="mt-3 text-xl font-extrabold text-brand-navy">' + (tab.heading || project.title) + '</h3><p class="mt-4 text-[15px] leading-7 text-slate-600">' + tab.description + "</p></div></div></div></div>";
    }
    paint();
    document.body.appendChild(wrap);
    document.body.style.overflow = "hidden";
    wrap.addEventListener("click", function (e) {
      if (e.target.closest(".js-close-project") || !e.target.closest("[data-stop]")) {
        wrap.remove();
        document.body.style.overflow = "";
        return;
      }
      var tabBtn = e.target.closest(".js-project-tab");
      if (tabBtn) { tabIndex = Number(tabBtn.getAttribute("data-tab")); paint(); }
    });
  }

  function initProjects() {
    var home = qs("#home-projects");
    if (home) {
      var page = 0;
      function paint() {
        var cards = [];
        for (var n = 0; n < 3; n++) {
          var idx = (page + n) % SITE_DATA.projects.length;
          cards.push(projectCard(SITE_DATA.projects[idx], idx));
        }
        home.innerHTML = cards.join("");
      }
      paint();
      var prev = qs("[data-projects-prev]");
      var next = qs("[data-projects-next]");
      if (prev) prev.addEventListener("click", function () { page = (page - 1 + SITE_DATA.projects.length) % SITE_DATA.projects.length; paint(); });
      if (next) next.addEventListener("click", function () { page = (page + 1) % SITE_DATA.projects.length; paint(); });
    }
    var gallery = qs("#projects-gallery");
    if (gallery) {
      gallery.innerHTML = SITE_DATA.projects.map(projectCard).join("");
    }
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".js-open-project");
      if (btn) openProject(Number(btn.getAttribute("data-index")));
    });
  }

  function initTestimonials() {
    var box = qs("#testimonial-list");
    if (!box) return;
    var page = 0;
    var pages = [];
    for (var i = 0; i < SITE_DATA.testimonials.length; i += 3) pages.push(SITE_DATA.testimonials.slice(i, i + 3));
    function stars(n) {
      var out = "";
      for (var s = 0; s < 5; s++) out += '<span class="' + (s < n ? "text-amber-400" : "text-slate-300") + '">★</span>';
      return out;
    }
    function paint() {
      box.innerHTML = pages[page].map(function (item) {
        return '<article class="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><div class="mb-4 flex items-center justify-between"><span class="text-[#2cb673]">' + (window.icon ? window.icon("quote", 28) : "“") + "</span><div>" + stars(item.rating) + "</div></div><h3 class=\"mb-2 !text-[17px] font-extrabold text-[#0A2540]\">" + item.title + '</h3><p class="flex-1 text-[15px] leading-6 text-slate-600">“' + item.quote + '”</p><div class="mt-auto border-t border-slate-200 pt-4"><p class="text-[15px] font-semibold text-[#0A2540]">' + item.name + '</p><p class="mt-0.5 text-[13px] text-slate-500">' + item.meta + "</p></div></article>";
      }).join("");
    }
    paint();
    var prev = qs("[data-testimonial-prev]");
    var next = qs("[data-testimonial-next]");
    if (prev) prev.addEventListener("click", function () { page = (page - 1 + pages.length) % pages.length; paint(); });
    if (next) next.addEventListener("click", function () { page = (page + 1) % pages.length; paint(); });
    setInterval(function () { page = (page + 1) % pages.length; paint(); }, 3000);
  }

  function initServices() {
    var box = qs("#services-list");
    if (!box) return;
    box.innerHTML = SITE_DATA.services.map(function (service, index) {
      var imageRight = index % 2 === 1;
      var image = '<div class="' + (imageRight ? "lg:order-2" : "") + '"><div class="service-image group relative aspect-[5/4] w-full min-h-[280px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:min-h-[320px] lg:min-h-[400px]"><img src="' + img(service.image) + '" alt="' + service.title + '" /></div></div>';
      var content = '<div class="' + (imageRight ? "lg:order-1" : "") + '"><div class="flex h-full flex-col justify-start rounded-2xl p-3 sm:p-5"><p class="text-[14px] font-extrabold tracking-[0.14em] text-[#2cb673]">SOLAR PRODUCT</p><h3 class="page-card-title mt-2 font-extrabold text-[#0A2540]">' + service.title + '</h3><p class="page-desc mt-3">' + service.description + '</p><ul class="mt-5 space-y-1.5">' + service.points.map(function (p) {
        return '<li class="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-[#334155]"><span class="mt-0.5 text-[#2cb673]">' + (window.icon ? window.icon("check", 16) : "✓") + '</span><span>' + p + "</span></li>";
      }).join("") + "</ul></div></div>";
      var grid = imageRight ? "lg:grid-cols-[0.9fr_1.15fr]" : "lg:grid-cols-[1.15fr_0.9fr]";
      return '<article class="hover-card rounded-[28px] bg-[#eef3f8] p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"><div class="grid items-center gap-6 lg:gap-8 ' + grid + '">' + image + content + "</div></article>";
    }).join("");
  }

  function initContactForm() {
    var form = qs("#enquiry-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = qs("#enquiry-success");
      if (note) note.classList.remove("hidden");
      form.reset();
    });
  }

  function initHashScroll() {
    if (!location.hash) return;
    setTimeout(function () {
      var el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  renderHeader();
  renderFooter();
  renderQuoteModal();
  renderSearch();
  bindHeader();
  bindGlobal();
  initHero();
  initCalculator();
  initFaq();
  initProjects();
  initTestimonials();
  initServices();
  initContactForm();
  initHashScroll();
})();
