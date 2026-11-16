// Fails when a release tag does not match package.json's version.
// Usage: node scripts/check-version.mjs [tag]   (defaults to GITHUB_REF_NAME)
import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const tag = process.argv[2] ?? process.env.GITHUB_REF_NAME ?? "";

const semver = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/;
if (!semver.test(pkg.version)) {
  console.error(`package.json version "${pkg.version}" is not SemVer`);
  process.exit(1);
}
if (tag && tag.startsWith("v") && tag !== `v${pkg.version}`) {
  console.error(`tag ${tag} does not match package.json version v${pkg.version}`);
  process.exit(1);
}
console.log(`version ok: v${pkg.version}${tag ? ` (tag ${tag})` : ""}`);
