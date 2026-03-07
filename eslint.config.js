// ESLint 9 flat config
// Uses @ygqygq2/eslint-config/electron.mjs (ESLint 9 format, typescript-eslint + react + react-hooks + react-refresh)
//
// Once @ygqygq2/eslint-config@>=1.1.0 is published, the explicit plugin
// devDependencies in package.json (@eslint/js, @typescript-eslint/*, eslint-plugin-*,
// typescript-eslint) can be removed — they will be provided transitively.
import electronConfig from "@ygqygq2/eslint-config/electron.mjs";

export default [
  ...electronConfig,
  {
    ignores: ["dist/**", "dist-electron/**", "node_modules/**"],
  },
];
