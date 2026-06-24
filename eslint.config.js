import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow explicit any in a couple of edge cases (dynamic HTML tags, API responses)
      "@typescript-eslint/no-explicit-any": "warn",

      // Allow unused vars prefixed with _
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

      // Relax for inline style patterns used throughout
      "react/display-name": "off",

      // We use next/link correctly
      "@next/next/no-html-link-for-pages": "error",

      // No direct img tags — use next/image (except in playground mockups)
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
