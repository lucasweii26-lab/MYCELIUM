// Checks every /img/... file the site refers to, the way Netlify (Linux, case-sensitive) will see it.
// Usage (project root):   node scripts/check-media.mjs        (after `npm run build` it also checks dist/)
// Windows and macOS ignore upper/lower case, so a name that works on localhost can 404 once deployed.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const skip = new Set(["node_modules", "dist", ".git", "img", "hero-frames", "hero-frames-large", "hero-wire", "hero-depth", "locales"]);
const exts = new Set([".html", ".js", ".mjs", ".css"]);
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (exts.has(path.extname(name))) files.push(full);
  }
})(root);

const pattern = /(["'`(=\s])((?:\.\/|\/)img\/[^"'`)\s?#$]+?\.(?:png|jpe?g|webp|gif|svg|avif|mp4|webm|mp3|ogg|wav))/gi;
const refs = new Map(); // path -> { files:Set, relative:boolean }
for (const file of files) {
  const text = readFileSync(file, "utf8");
  // gallery-seed.js style:  const IMG = "/img/gallery/";   ...   cover: IMG + "market.webp"
  const bases = [...text.matchAll(/const\s+(\w+)\s*=\s*["'`]((?:\.\/|\/)img\/[^"'`]*\/)["'`]/g)];
  for (const [, name, base] of bases) {
    const join = new RegExp(`\\b${name}\\s*\\+\\s*["'\`]([^"'\`]+\\.(?:png|jpe?g|webp|gif|svg|avif|mp4|webm))["'\`]`, "gi");
    for (const m of text.matchAll(join)) {
      const key = (base + m[1]).replace(/^\.\//, "/");
      const entry = refs.get(key) || { files: new Set(), relative: false };
      entry.files.add(path.relative(root, file));
      refs.set(key, entry);
    }
  }
  for (const match of text.matchAll(pattern)) {
    const raw = match[2];
    const key = raw.replace(/^\.\//, "/");
    const entry = refs.get(key) || { files: new Set(), relative: false };
    entry.files.add(path.relative(root, file));
    if (raw.startsWith("./") && !file.endsWith(".html")) entry.relative = true;
    refs.set(key, entry);
  }
}

// Case-exact existence: walk the path one segment at a time against the real directory listing.
function exactStatus(rel) {
  let current = root;
  for (const part of rel.split("/").filter(Boolean)) {
    if (!existsSync(current) || !statSync(current).isDirectory()) return { ok: false };
    const names = readdirSync(current);
    if (names.includes(part)) { current = path.join(current, part); continue; }
    const alt = names.find((n) => n.toLowerCase() === part.toLowerCase());
    return alt ? { ok: false, caseHint: alt } : { ok: false };
  }
  return { ok: true };
}

let problems = 0;
for (const [ref, info] of [...refs].sort()) {
  const status = exactStatus(ref);
  const where = [...info.files].join(", ");
  if (!status.ok) {
    problems++;
    console.log(status.caseHint ? `CASE MISMATCH  ${ref}  (file on disk is named "${status.caseHint}")  <- ${where}` : `MISSING        ${ref}  <- ${where}`);
  } else if (info.relative) {
    problems++;
    console.log(`RELATIVE PATH  ${ref}  written as ./img in script code; breaks on /my/jb/ and /us/pl/  <- ${where}`);
  }
}
const dist = path.join(root, "dist");
if (existsSync(dist)) {
  for (const ref of refs.keys()) {
    if (exactStatus(ref).ok && !existsSync(path.join(dist, ref))) {
      problems++;
      console.log(`NOT IN dist    ${ref}  exists in the project but the build did not copy it (vite.config.js)`);
    }
  }
}
console.log(problems ? `\n${problems} problem(s) found.` : `\nAll ${refs.size} referenced media files look fine.`);
process.exitCode = problems ? 1 : 0;
