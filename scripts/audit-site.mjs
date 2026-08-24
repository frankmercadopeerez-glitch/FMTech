import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignored = new Set(["node_modules", ".git", "social"]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));
const errors = [];
const warnings = [];
const titles = new Map();

const attr = (tag, name) => new RegExp(`${name}=["']([^"']+)["']`, "i").exec(tag)?.[1];
const cleanTarget = (value) => value.split("#")[0].split("?")[0];

for (const file of htmlFiles) {
  const rel = path.relative(root, file).replaceAll("\\", "/");
  const html = fs.readFileSync(file, "utf8");
  const title = /<title>([\s\S]*?)<\/title>/i.exec(html)?.[1].trim();
  if (!title) errors.push(`${rel}: missing title`);
  else {
    if (!titles.has(title)) titles.set(title, []);
    titles.get(title).push(rel);
  }

  if (!/<meta\s+name=["']description["']/i.test(html)) warnings.push(`${rel}: missing meta description`);
  if (!/<h1(?:\s|>)/i.test(html)) errors.push(`${rel}: missing h1`);
  if (!/<html[^>]+lang=["'][^"']+["']/i.test(html)) errors.push(`${rel}: missing html lang`);
  const noindex = /<meta\s+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if (!noindex && !/<link\s+rel=["']canonical["']/i.test(html)) warnings.push(`${rel}: missing canonical URL`);

  for (const script of html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(script[1]); } catch (error) { errors.push(`${rel}: invalid JSON-LD (${error.message})`); }
  }

  for (const form of html.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/gi)) {
    const markup = form[0];
    const opening = /^<form\b[^>]*>/i.exec(markup)?.[0] || "";
    if (attr(opening, "method")?.toLowerCase() !== "post") errors.push(`${rel}: form must use POST`);
    if (!/^https:\/\//i.test(attr(opening, "action") || "")) errors.push(`${rel}: form needs an HTTPS action`);
    if (!/<input[^>]+type=["']email["'][^>]+required/i.test(markup) && !/<input[^>]+required[^>]+type=["']email["']/i.test(markup)) errors.push(`${rel}: form needs a required email field`);
    if (!/type=["']checkbox["'][^>]+required/i.test(markup) && !/required[^>]+type=["']checkbox["']/i.test(markup)) errors.push(`${rel}: form needs required privacy consent`);
  }

  for (const tag of html.matchAll(/<(?:a|img|link|script)\b[^>]*>/gi)) {
    const raw = tag[0];
    const value = attr(raw, raw.startsWith("<a") || raw.startsWith("<link") ? "href" : "src");
    if (!value || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(value)) continue;
    let target = decodeURIComponent(cleanTarget(value));
    if (!target) continue;
    if (target.startsWith("/")) target = target.slice(1) || "index.html";
    let resolved = path.resolve(path.dirname(file), target);
    if (value.startsWith("/")) resolved = path.resolve(root, target);
    if (target.endsWith("/")) resolved = path.join(resolved, "index.html");
    if (!path.extname(resolved) && fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) resolved = path.join(resolved, "index.html");
    if (!fs.existsSync(resolved)) errors.push(`${rel}: broken local reference ${value}`);
  }
}

for (const [title, files] of titles) {
  if (files.length > 1) warnings.push(`duplicate title "${title}": ${files.join(", ")}`);
}

console.log(`Audited ${htmlFiles.length} HTML files.`);
for (const warning of warnings) console.log(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);
console.log(`${errors.length} error(s), ${warnings.length} warning(s).`);
process.exitCode = errors.length ? 1 : 0;
