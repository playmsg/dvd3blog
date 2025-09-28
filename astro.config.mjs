// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import playformCompress from "@playform/compress";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://dvd3.net",
  integrations: [mdx(), sitemap(), playformCompress(),pagefind()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    
  }),
});