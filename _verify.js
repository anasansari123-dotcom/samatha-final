const fs = require("fs");
const path = require("path");

const root = __dirname;
const pages = [
  "index.html",
  "about.html",
  "services.html",
  "contact.html",
  "blog.html",
  "projects.html",
  "404.html",
  "products/samatha-home.html",
  "products/samatha-elite.html",
  "products/samatha-plus.html",
  "solutions/on-grid.html",
  "solutions/off-grid.html",
  "solutions/hybrid.html",
  "solutions/ess.html",
];

const missing = [];
const forbidden = [];
const missingAssets = [];
const checked = new Set();

function walkHtml(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === "images" || name === "css" || name === "js") continue;
      walkHtml(full, acc);
    } else if (name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function resolveFrom(file, href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("https://") || href.startsWith("http://") || href.startsWith("javascript:")) {
    return null;
  }
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  return path.normalize(path.join(path.dirname(file), clean));
}

for (const page of pages) {
  const full = path.join(root, page);
  if (!fs.existsSync(full)) missing.push(page);
}

const htmlFiles = walkHtml(root);
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  if (/next\/|from ['"]react|ReactDOM|createRoot/.test(html)) forbidden.push(path.relative(root, file));
  const refs = [
    ...[...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1]),
  ];
  for (const href of refs) {
    const resolved = resolveFrom(file, href);
    if (!resolved || checked.has(resolved)) continue;
    checked.add(resolved);
    if (!fs.existsSync(resolved)) missingAssets.push(path.relative(root, resolved) + " (from " + path.relative(root, file) + ")");
  }
}

const jsFiles = ["js/data.js", "js/script.js"].map((f) => path.join(root, f));
for (const file of jsFiles) {
  const text = fs.readFileSync(file, "utf8");
  if (/next\/|from ['"]react/.test(text)) forbidden.push(path.relative(root, file));
  const refs = [...text.matchAll(/images\/([A-Za-z0-9._\- ]+\.[A-Za-z0-9]+)/g)].map((m) => m[1]);
  for (const name of refs) {
    const img = path.join(root, "images", name);
    if (!fs.existsSync(img)) missingAssets.push("images/" + name + " (from js)");
  }
}

console.log("pages missing:", missing.length ? missing.join(", ") : "none");
console.log("react/next leftovers:", forbidden.length ? forbidden.join(", ") : "none");
console.log("missing local assets:", missingAssets.length ? "\n  " + missingAssets.join("\n  ") : "none");
console.log("html files:", htmlFiles.length);
process.exit(missing.length || forbidden.length || missingAssets.length ? 1 : 0);
