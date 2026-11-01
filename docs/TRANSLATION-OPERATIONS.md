# Mycelium language and Firestore translation workflow

## Current visitor languages

The public site currently supports English (`en`), Spanish (`es`), Simplified Chinese (`zh-CN`), Malay (`ms`) and Tamil (`ta`). English is the source language. Visitor-facing Firestore records use language-suffixed fields such as `title_en`, `title_es`, `title_zh-CN`, `title_ms` and `title_ta`.

The public site should always resolve dynamic content in this order:

1. selected language field;
2. English field (`*_en`);
3. legacy unsuffixed field where that collection historically used one.

The Admin editor already writes five-language fields for announcements, events, Gallery stories and volunteer activities. This workflow does not translate or redesign the Admin interface. FAQ and Services records can be translated by the Firestore script below; their language fields can also be edited directly in Firestore. Private resident submissions (newsletter sign-ups, volunteer applications and reports) are deliberately excluded from translation. The public site now reads FAQ documents from Firestore for MY_PP as well as the other regions; when a Malaysian FAQ collection is empty or unavailable, the built-in five-language FAQ set remains the fallback.

## 1. Refresh the English interface source

Whenever English interface copy changes in `app.js`, run:

```bash
npm run export:locale
```

This exports the complete English dictionary, including the shared Gallery, Live News, Air Quality and Feature Details namespaces, to `locales/en.json`.

## 2. Generate complete interface packs

Install dependencies first, then set a Google AI Studio API key in your terminal environment. Do not paste the key into source files or commit it.

PowerShell:

```powershell
$env:GOOGLE_AI_API_KEY = "YOUR_KEY"
node scripts/translate-locales.mjs es zh-CN ms ta
```

The generated packs are merged over the built-in dictionaries at runtime. This means reviewed translations already in `app.js` remain available while the pack fills missing strings. The script adds generated codes to `locales/manifest.json`.

Run the audit:

```bash
npm run check:i18n
npm run check:i18n -- --strict
```

The strict form exits unsuccessfully if any English source key is still untranslated. Machine translations should receive a native-speaker review before publication, especially safety notices, legal text and resident instructions.

## 3. Translate existing Firestore records safely

The repository does not contain an export of the live Firestore database. The script below connects to the real project only when run from your own environment with a Firebase service-account file and translation API key.

Keep the service-account JSON outside this repository. PowerShell example:

```powershell
$env:FIREBASE_SERVICE_ACCOUNT_PATH = "C:\secure\mycelium-service-account.json"
$env:GOOGLE_AI_API_KEY = "YOUR_KEY"
node scripts/translate-firestore-content.mjs --site=MY_PP
```

The default is **dry run**: it reads records and prints proposed translations without writing anything. Inspect the output. To fill missing language fields only:

```powershell
node scripts/translate-firestore-content.mjs --site=MY_PP --apply
```

To process all configured sites:

```powershell
node scripts/translate-firestore-content.mjs --apply
```

Optional `--limit=10` restricts the number of documents inspected during a trial. The script processes announcements, events, FAQs, facilities, services, Gallery stories, volunteer activities, community rules and the main settings document. It translates non-empty fields ending in `_en`, creates the matching locale-suffixed field, and never overwrites a non-empty translation. It re-reads each document immediately before writing to avoid overwriting a translation added by an admin during the run.

**Important:** run the dry-run first, then back up Firestore (Firebase Console export or your normal backup process) before using `--apply`. Translation API use may incur charges. The script does not change Firestore Security Rules; adding translation fields to existing documents uses the same document permissions.

## 4. Verify each region

Test MY_PP, MY_JB and US_PL separately. Confirm that missing translations fall back to English, translated values appear when present, and no region reads another region's content. Also check announcement details, calendar entries, FAQ, Services, volunteer cards, Gallery stories, Air Quality and Live News in all five languages.

## Notes about Firebase access

The website's Firebase web configuration is public client configuration, not an administrative credential. This repository contains Firestore rules and sample data, but it does not contain a live database export or service-account key. Therefore, editing source files alone cannot translate the live documents already stored in Firebase. The authenticated migration script is the safe bridge for that work.
