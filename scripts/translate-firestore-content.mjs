#!/usr/bin/env node
/**
 * Safely fills missing Firestore translations for the public Mycelium website.
 *
 * Required environment variables:
 *   FIREBASE_SERVICE_ACCOUNT_PATH=/absolute/path/to/service-account.json
 *   GOOGLE_AI_API_KEY=...
 * Optional:
 *   GOOGLE_AI_MODEL=gemini-2.5-flash
 *
 * Dry-run (default):
 *   node scripts/translate-firestore-content.mjs --site=MY_PP
 * Apply missing translations only:
 *   node scripts/translate-firestore-content.mjs --site=MY_PP --apply
 * All configured sites:
 *   node scripts/translate-firestore-content.mjs --apply
 *
 * The script never overwrites a non-empty translation. It reads the current city
 * collection first and uses the same legacy-path fallback as the public site.
 * It only writes with --apply. Keep the service-account file outside this repo.
 */
import { readFile } from "node:fs/promises";
import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const credentialsPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;
if (!credentialsPath) throw new Error("Set FIREBASE_SERVICE_ACCOUNT_PATH to a service-account JSON stored outside this repository.");
if (!apiKey) throw new Error("Set GOOGLE_AI_API_KEY (or GEMINI_API_KEY) before running this translation job.");

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const siteArg = args.find((arg) => arg.startsWith("--site="))?.split("=")[1]?.toUpperCase();
const limitArg = args.find((arg) => arg.startsWith("--limit="))?.split("=")[1];
const limit = limitArg ? Math.max(1, Number(limitArg) || 1) : Infinity;
const model = process.env.GOOGLE_AI_MODEL || "gemini-2.5-flash";

const SITES = {
  MY_PP: { country: "MY", city: "PP", legacy: [[]] },
  MY_JB: { country: "MY", city: "JB", legacy: [["locations", "MY_JB"]] },
  US_PL: { country: "US", city: "PL", legacy: [["locations", "US_PL"], ["locations", "US"]] },
};
const LANGUAGES = {
  es: "Spanish",
  "zh-CN": "Simplified Chinese",
  ms: "Malay (Bahasa Melayu)",
  ta: "Tamil",
};
const COLLECTIONS = [
  "announcements", "events", "faqs", "facilities", "services",
  "gallery_events", "volunteer_activities", "rules", "settings", "bookable_facilities",
];
const isBlank = (value) => value === undefined || value === null || (typeof value === "string" && !value.trim());
const isPlainObject = (value) => value && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);

if (siteArg && !SITES[siteArg]) throw new Error(`Unknown site ${siteArg}. Choose ${Object.keys(SITES).join(", ")}.`);

const serviceAccount = JSON.parse(await readFile(credentialsPath, "utf8"));
const app = initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore(app);

function collectEnglishFields(data, path = [], result = []) {
  if (!isPlainObject(data)) return result;
  for (const [key, value] of Object.entries(data)) {
    const nextPath = [...path, key];
    if (key.endsWith("_en") && (typeof value === "string" || (Array.isArray(value) && value.every((item) => typeof item === "string")))) {
      const base = key.slice(0, -3);
      if (!isBlank(value) && !(Array.isArray(value) && value.every(isBlank))) result.push({ sourcePath: nextPath, base, value });
      continue;
    }
    if (isPlainObject(value)) collectEnglishFields(value, nextPath, result);
  }
  return result;
}

function getAtPath(object, path) {
  return path.reduce((value, key) => value?.[key], object);
}

function setAtPath(object, path, value) {
  let cursor = object;
  for (const key of path.slice(0, -1)) cursor = cursor[key] ||= {};
  cursor[path.at(-1)] = value;
}

function collectMissing(data, englishFields, locale) {
  return englishFields.filter(({ sourcePath, base }) => {
    const targetPath = [...sourcePath.slice(0, -1), `${base}_${locale}`];
    const current = getAtPath(data, targetPath);
    return isBlank(current) || (Array.isArray(current) && current.every(isBlank));
  });
}

async function translateBatch(language, fields) {
  const payload = Object.fromEntries(fields.map(({ sourcePath, value }) => [sourcePath.join("."), value]));
  const system = [
    "You are a professional translator for MYCELIUM, a premium residential community website.",
    `Translate every supplied value into ${language}.`,
    "Return only valid JSON, preserving every exact object key and each array's length and order.",
    "Keep MYCELIUM and MYCELIUM Residences unchanged. Do not translate personal names, official place names, street addresses, email addresses, URLs, phone numbers, IDs, product names, or standard technical abbreviations.",
    "Preserve dates, times, numbers, placeholders such as {name}, and any HTML tags exactly unless the natural-language words around them need translation.",
    "Use clear, natural language suitable for residents. Do not add explanations or omit content.",
  ].join("\n");
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: [{ role: "user", parts: [{ text: JSON.stringify(payload) }] }],
          generationConfig: { temperature: 0.15, responseMimeType: "application/json" },
        }),
      });
      if (!response.ok) throw new Error(`Translation API HTTP ${response.status}: ${(await response.text()).slice(0, 240)}`);
      const responseData = await response.json();
      const raw = responseData?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim() || "";
      const parsed = JSON.parse(raw.replace(/^```(?:json)?\s*|\s*```$/g, ""));
      for (const [key, original] of Object.entries(payload)) {
        const translated = parsed[key];
        if (typeof original === "string" && (typeof translated !== "string" || !translated.trim())) throw new Error(`Missing translation for ${key}`);
        if (Array.isArray(original) && (!Array.isArray(translated) || translated.length !== original.length || translated.some((item) => typeof item !== "string" || !item.trim()))) throw new Error(`Invalid translated array for ${key}`);
      }
      return parsed;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 1200 * attempt));
    }
  }
  throw lastError;
}

function collectionRef(siteCode, collection) {
  const site = SITES[siteCode];
  return db.collection("countries").doc(site.country).collection("cities").doc(site.city).collection(collection);
}

async function readDocsWithLegacy(siteCode, collection) {
  const current = await collectionRef(siteCode, collection).get();
  if (!current.empty) return current.docs;
  for (const legacyPath of SITES[siteCode].legacy) {
    let ref = db.collection(legacyPath[0] || collection);
    if (legacyPath.length) ref = ref.doc(legacyPath[1]).collection(collection);
    const snapshot = await ref.get();
    if (!snapshot.empty) return snapshot.docs;
  }
  return [];
}

let docsSeen = 0;
let fieldsTranslated = 0;
let writes = 0;
try {
  const sites = siteArg ? [siteArg] : Object.keys(SITES);
  console.log(`Firestore translation ${apply ? "APPLY" : "DRY RUN"} · model ${model}`);
  console.log(`Sites: ${sites.join(", ")} · languages: ${Object.keys(LANGUAGES).join(", ")}`);
  for (const siteCode of sites) {
    for (const collection of COLLECTIONS) {
      const docs = await readDocsWithLegacy(siteCode, collection);
      for (const doc of docs) {
        if (docsSeen >= limit) break;
        if (collection === "settings" && doc.id !== "main") continue;
        if (collection === "rules" && doc.id !== "community") continue;
        docsSeen++;
        const data = doc.data() || {};
        const englishFields = collectEnglishFields(data);
        if (!englishFields.length) continue;
        const pendingByLanguage = Object.entries(LANGUAGES)
          .map(([locale, language]) => ({ locale, language, fields: collectMissing(data, englishFields, locale) }))
          .filter((entry) => entry.fields.length);
        if (!pendingByLanguage.length) continue;

        for (const { locale, language, fields } of pendingByLanguage) {
          const translated = await translateBatch(language, fields);
          const patch = {};
          for (const field of fields) {
            const translatedValue = translated[field.sourcePath.join(".")];
            const targetPath = [...field.sourcePath.slice(0, -1), `${field.base}_${locale}`];
            setAtPath(patch, targetPath, translatedValue);
          }
          const fieldCount = fields.length;
          fieldsTranslated += fieldCount;
          console.log(`${apply ? "READY" : "PREVIEW"} ${siteCode}/${collection}/${doc.id} · ${locale} · ${fieldCount} field(s)`);
          if (apply) {
            // Re-read immediately before writing; retain any translation another admin added meanwhile.
            const latest = await doc.ref.get();
            const latestData = latest.data() || {};
            const safePatch = {};
            for (const field of fields) {
              const targetPath = [...field.sourcePath.slice(0, -1), `${field.base}_${locale}`];
              if (isBlank(getAtPath(latestData, targetPath))) setAtPath(safePatch, targetPath, translated[field.sourcePath.join(".")]);
            }
            if (Object.keys(safePatch).length) {
              await doc.ref.set(safePatch, { merge: true });
              writes++;
            }
          } else {
            for (const [key, value] of Object.entries(translated)) console.log(`  ${key}: ${JSON.stringify(value).slice(0, 180)}`);
          }
        }
      }
      if (docsSeen >= limit) break;
    }
    if (docsSeen >= limit) break;
  }
  console.log(`\nFinished. Documents inspected: ${docsSeen}; missing fields translated: ${fieldsTranslated}; documents written: ${writes}.`);
  if (!apply) console.log("Dry run only: Firestore was not changed. Add --apply after reviewing the preview.");
} finally {
  await app.delete();
}
