/* eslint-env node */
module.exports = {
  extends: ["plugin:@typescript-eslint/recommended-type-checked"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ["dist", "template.ts"],
}
