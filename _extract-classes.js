const fs = require("fs");
const path = require("path");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (/\.(html|js)$/.test(full) && !name.startsWith("_")) acc.push(full);
  }
  return acc;
}

const files = walk(__dirname);
const set = new Set();
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const re = /class(?:Name)?="([^"]+)"/g;
  let match;
  while ((match = re.exec(text))) {
    match[1].split(/\s+/).filter(Boolean).forEach((cls) => set.add(cls));
  }
}

const html = `<div class="${[...set].join(" ")}"></div>\n`;
fs.writeFileSync(
  path.join(__dirname, "..", "Samatha-green-website-main", "static-scan", "safelist.html"),
  html,
);
console.log("wrote safelist with", set.size, "classes");
