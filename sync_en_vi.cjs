const fs = require("fs");
const path = require("path");

const translationsPath = path.join(__dirname, "src", "translations");
const enPath = path.join(translationsPath, "en.json");
const viPath = path.join(translationsPath, "vi.json");

const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
let vi = {};

// Đọc file vi.json hiện tại để preserve content đã dịch
try {
  vi = JSON.parse(fs.readFileSync(viPath, "utf8"));
} catch (e) {
  console.log("Creating new vi.json...");
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
        console.log(`🔄 Converting "${key}" from ${typeof targetValue} to object (following en.json structure)`);
        newTarget[key] = syncKeysStrict(sourceValue, {});
      }
    } else {
      if (typeof targetValue === "object" && targetValue !== null) {
        console.log(`⚠️  TYPE MISMATCH at "${key}":`);
        console.log(`     en.json: "${sourceValue}" (${typeof sourceValue})`);
        console.log(`     vi.json: [object] (${typeof targetValue})`);
        console.log(`     → Resetting to empty string to match en.json structure`);
        newTarget[key] = "";
      } else {
        newTarget[key] = targetValue || "";
      }
    }
  }
  
  return newTarget;
}

console.log("🔍 Syncing vi.json structure to match en.json...\n");

const syncedVi = syncKeysStrict(en, vi);

fs.writeFileSync(viPath, JSON.stringify(syncedVi, null, 2));

console.log("\n✅ Structure sync completed!");
console.log("📋 vi.json now matches en.json structure exactly");
console.log("🇺🇸 English version (en.json) is the source of truth");
console.log("🇻🇳 Vietnamese version (vi.json) now follows the same structure");