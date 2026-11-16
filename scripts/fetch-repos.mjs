// Saves my public GitHub repositories to src/data/repos.json before each build.
// No token needed. If GitHub does not answer, the committed file is kept as is.
import { writeFile } from "node:fs/promises";

const USER = "nhussein2026";
const OUT = new URL("../src/data/repos.json", import.meta.url);

async function main() {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?per_page=100&type=owner&sort=created`,
    { headers: { Accept: "application/vnd.github+json", "User-Agent": "nhussein-io-build" } },
  );
  if (!res.ok) throw new Error(`GitHub answered ${res.status}`);
  const data = await res.json();

  const repos = data
    // Forks are other people's code; my own contributions to them are shown as milestones.
    .filter((r) => !r.fork && !r.private)
    // The profile README repository is not a project.
    .filter((r) => r.name.toLowerCase() !== USER.toLowerCase())
    .map((r) => ({
      name: r.name,
      description: r.description ?? "",
      topics: r.topics ?? [],
      language: r.language ?? null,
      year: Number(r.created_at.slice(0, 4)),
      url: r.html_url,
      homepage: r.homepage || null,
      archived: r.archived,
    }))
    .sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));

  await writeFile(OUT, JSON.stringify(repos, null, 2) + "\n");
  console.log(`fetch-repos: saved ${repos.length} repositories`);
}

main().catch((err) => {
  console.warn(`fetch-repos: ${err.message}; using the saved src/data/repos.json`);
});
