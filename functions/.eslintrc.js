module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    ".eslintrc.js",
    "node_modules/**/*",
    "../medicactioncodebase/**/*"
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
    }],
  },
};
