const fs = require("fs");
const path = require("path");

const translationsPath = path.join(__dirname, "src", "translations");
const viPath = path.join(translationsPath, "vi.json");
const enPath = path.join(translationsPath, "en.json");

const vi = JSON.parse(fs.readFileSync(viPath, "utf8"));
let en = {};

// Đọc file en.json hiện tại để preserve content đã dịch
try {
  en = JSON.parse(fs.readFileSync(enPath, "utf8"));
} catch (e) {
  console.log("Creating new en.json...");
}

function syncKeysStrict(source, target) {
  const newTarget = {};
  
  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = target[key];
    
    if (typeof sourceValue === "object" && sourceValue !== null) {
      if (typeof targetValue === "object" && targetValue !== null) {
        newTarget[key] = syncKeysStrict(sourceValue, targetValue);
      } else {
        console.log(`🔄 Converting "${key}" from ${typeof targetValue} to object (following vi.json structure)`);
        newTarget[key] = syncKeysStrict(sourceValue, {});
      }
    } else {
      if (typeof targetValue === "object" && targetValue !== null) {
        console.log(`⚠️  TYPE MISMATCH at "${key}":`);
        console.log(`     vi.json: "${sourceValue}" (${typeof sourceValue})`);
        console.log(`     en.json: [object] (${typeof targetValue})`);
        console.log(`     → Resetting to empty string to match vi.json structure`);
        newTarget[key] = "";
      } else {
        newTarget[key] = targetValue || "";
      }
    }
  }
  
  return newTarget;
}

console.log("🔍 Syncing en.json structure to match vi.json...\n");

const syncedEn = syncKeysStrict(vi, en);

fs.writeFileSync(enPath, JSON.stringify(syncedEn, null, 2));

console.log("\n✅ Structure sync completed!");
console.log("📋 en.json now matches vi.json structure exactly");
console.log("🇻🇳 Vietnam version (vi.json) is the source of truth");
console.log("🌍 English version (en.json) now follows the same structure");