import pkg from "../../package.json";
import reposJson from "./repos.json";

export const version = pkg.version;
export const releaseUrl = `https://github.com/nhussein2026/Nhussein-io/releases/tag/v${pkg.version}`;

/** Shape written by scripts/fetch-repos.mjs. */
export type Repo = {
  name: string;
  description: string;
  topics: string[];
  language: string | null;
  year: number;
  url: string;
  homepage: string | null;
  archived: boolean;
};
export const repos: Repo[] = reposJson;

/** A repository link, only while that repository is public. */
export function publicRepoUrl(name?: string): string | undefined {
  if (!name) return undefined;
  return repos.find((r) => r.name.toLowerCase() === name.toLowerCase())?.url;
}

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/journey", label: "Journey" },
  { href: "/about", label: "About" },
];
