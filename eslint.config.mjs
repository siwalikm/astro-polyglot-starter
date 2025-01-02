// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro", "**/*.ts", "**/*.tsx"],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "no-console": "error",
    },
  },
);
