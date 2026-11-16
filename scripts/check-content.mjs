// Lists every "TO CONFIRM" marker in the site's content and code.
// Fails the run (exit 1) unless --warn is passed, so the deploy workflow never
// publishes a page with an open question on it.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../src", import.meta.url));
const warnOnly = process.argv.includes("--warn");
const MARKER = "TO CONFIRM";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (/\.(md|mdx|astro|ts|yaml|json)$/.test(entry.name)) yield path;
  }
}

const hits = [];
for await (const file of walk(root)) {
  const lines = (await readFile(file, "utf8")).split("\n");
  lines.forEach((line, i) => {
    if (line.includes(MARKER)) hits.push(`src${file.slice(root.length)}:${i + 1}  ${line.trim()}`);
  });
}

if (hits.length === 0) {
  console.log("check-content: no open TO CONFIRM markers");
} else {
  const log = warnOnly ? console.warn : console.error;
  log(`check-content: ${hits.length} open TO CONFIRM marker(s):\n  ${hits.join("\n  ")}`);
  if (!warnOnly) process.exit(1);
}
