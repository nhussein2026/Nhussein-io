// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nhussein.io",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  // Old addresses from version 1 lead to Journey.
  redirects: {
    "/resources": "/journey/",
    "/github-profile": "/journey/",
  },
});
