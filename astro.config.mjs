// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import paraglide from "@inlang/paraglide-astro";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      LOG_LEVEL: envField.enum({
        context: "client",
        access: "public",
        default: "trace",
        optional: true,
        values: ["debug", "error", "fatal", "info", "trace", "warn"],
      }),
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      fallbackType: "redirect",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [paraglide({
    project: "./project.inlang",
    outdir: "./src/paraglide",
  }), tailwind(), sitemap(), react()],
  site: "https://website.com",
});