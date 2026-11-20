// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nhussein.io",
  // Every page is built as a folder (/work/index.html) and every link ends in "/", so GitHub
  // Pages serves /work/ directly. "ignore" lets the local dev and preview servers accept
  // /work too, and send unknown addresses to our own 404 page instead of Astro's.
  // The canonical URL always ends in "/" (src/layouts/Base.astro).
  trailingSlash: "ignore",
  build: { format: "directory" },
  // The style guide is for me, not for search engines.
  integrations: [sitemap({ filter: (page) => !page.includes("/styleguide/") })],
  // Code blocks take their colours from the tokens (src/styles/tokens.css), in both themes.
  markdown: { shikiConfig: { theme: "css-variables" } },
  vite: { plugins: [tailwindcss()] },
  // Old addresses from version 1 lead to Journey.
  redirects: {
    "/resources": "/journey/",
    "/github-profile": "/journey/",
  },
});
