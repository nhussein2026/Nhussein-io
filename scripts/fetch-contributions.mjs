// Saves my GitHub contribution calendar (last 12 months) to src/data/contributions.json.
// The heatmap on /journey is drawn from this file at build time, so no visitor's
// browser ever calls GitHub. If GitHub does not answer, the committed file is kept.
import { writeFile } from "node:fs/promises";

const USER = "nhussein2026";
const OUT = new URL("../src/data/contributions.json", import.meta.url);

async function main() {
  const res = await fetch(`https://github.com/users/${USER}/contributions`, {
    headers: { "User-Agent": "nhussein-io-build" },
  });
  if (!res.ok) throw new Error(`GitHub answered ${res.status}`);
  const html = await res.text();

  // Each day cell: <td data-date="2026-01-31" id="contribution-day-component-x-y" data-level="2" ...>
  const cells = new Map();
  for (const m of html.matchAll(
    /<td[^>]*data-date="([\d-]+)"[^>]*id="([^"]+)"[^>]*data-level="(\d)"/g,
  )) {
    cells.set(m[2], { date: m[1], level: Number(m[3]), count: 0 });
  }
  // Exact counts live in the tooltips: <tool-tip for="contribution-day-component-x-y">3 contributions on ...
  for (const m of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)</g)) {
    const cell = cells.get(m[1]);
    const n = m[2].match(/^(\d+) contribution/);
    if (cell && n) cell.count = Number(n[1]);
  }

  const days = [...cells.values()].sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 300)
    throw new Error(`only ${days.length} days found; page format may have changed`);

  const total = days.reduce((sum, d) => sum + d.count, 0);
  // One day per line keeps the weekly diff readable.
  const body = days.map((d) => "    " + JSON.stringify(d)).join(",\n");
  await writeFile(
    OUT,
    `{\n  "user": "${USER}",\n  "total": ${total},\n  "days": [\n${body}\n  ]\n}\n`,
  );
  console.log(`fetch-contributions: saved ${days.length} days, ${total} contributions`);
}

main().catch((err) => {
  console.warn(`fetch-contributions: ${err.message}; using the saved src/data/contributions.json`);
});
