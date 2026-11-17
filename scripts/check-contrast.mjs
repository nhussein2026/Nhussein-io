// Checks WCAG 2.2 contrast for every colour pair the site uses, in both themes.
// Reads src/styles/tokens.css, prints a table and exits 1 on any failure.
//   bun run check:contrast
// Text needs 4.5:1 (1.4.3). UI parts and meaningful graphics need 3:1 (1.4.11).
// It also checks that the hex colours that cannot read CSS variables (favicon.svg and the
// theme-color meta tags) still match their tokens.
// The pairs and the colour maths live in src/lib/color.ts, shared with /styleguide.
import { readFileSync } from "node:fs";
import { parseTokens, toHex, contrast, contrastPairs } from "../src/lib/color.ts";

const root = new URL("..", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");
const themes = parseTokens(read("src/styles/tokens.css"));
const pairs = contrastPairs();

let failures = 0;
for (const [name, t] of Object.entries(themes)) {
  console.log(`\n${name.toUpperCase()} theme`);
  console.log("  ratio  min   foreground       on background    use");
  for (const [fg, bg, min, use] of pairs) {
    if (!t[fg] || !t[bg]) {
      console.log(`  MISSING token: ${!t[fg] ? fg : bg}`);
      failures++;
      continue;
    }
    const r = contrast(t[fg], t[bg]);
    const ok = r >= min;
    if (!ok) failures++;
    console.log(
      `  ${r.toFixed(2).padStart(5)}  ${min.toFixed(1)}  ${fg.padEnd(16)} ${bg.padEnd(16)} ${use}${ok ? "" : "   ✗ FAIL"}`,
    );
  }
}

const hexChecks = [
  ["public/favicon.svg", "light", ["logo-bg", "logo-fg"]],
  ["src/layouts/Base.astro", "light", ["bg"]],
  ["src/layouts/Base.astro", "dark", ["bg"]],
];
console.log("\nHex copies of tokens");
for (const [file, theme, names] of hexChecks) {
  const text = read(file).toLowerCase();
  for (const n of names) {
    const hex = toHex(themes[theme][n]);
    const ok = text.includes(hex);
    if (!ok) failures++;
    console.log(`  ${ok ? "ok  " : "FAIL"} ${file}: ${theme} ${n} ${hex}`);
  }
}

console.log(failures ? `\n${failures} check(s) failed.` : `\nAll ${pairs.length * 2} pairs pass.`);
process.exit(failures ? 1 : 0);
