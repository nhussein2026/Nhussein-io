import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per story. The body holds the five parts (plan section 5).
const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Card title: what the product does, not what it is built with.
      summary: z.string(),
      role: z.string(),
      team: z.string(),
      start: z.string(),
      end: z.string().optional(),
      status: z.string(),
      stack: z.array(z.string()),
      // Repository name under github.com/nhussein2026. The link only shows while the
      // repository is public (checked against src/data/repos.json at build time).
      repo: z.string().optional(),
      // Any other code link, such as a GitHub organisation.
      code: z.url().optional(),
      live: z.url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number(),
      aiNote: z.string().optional(),
    }),
});

// Milestones for /journey, newest first on the page. One YAML file, one entry per line of history.
const journey = defineCollection({
  loader: file("./src/content/journey.yaml"),
  schema: z.object({
    date: z.string().regex(/^\d{4}(-\d{2})?$/, "use YYYY or YYYY-MM"),
    title: z.string(),
    kind: z.enum(["study", "work", "project", "community"]),
    line: z.string(),
    link: z.url().optional(),
  }),
});

export const collections = { projects, journey };
