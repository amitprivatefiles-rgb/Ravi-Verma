// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO(client): set SITE_URL to the final domain (see README) before building for Hostinger.
const site = process.env.SITE_URL || "https://rpverma.in";

export default defineConfig({
  site,
  // Folder-style URLs (/about/index.html) work on any static host, including Hostinger.
  build: { format: "directory" },
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
