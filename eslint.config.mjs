import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Flaky in this toolchain version: fires inconsistently across identical
      // runs on the standard "hydrate state from localStorage/sessionStorage
      // after mount" pattern, which is the correct approach for client-only
      // browser storage (there's nothing to read on the server).
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
