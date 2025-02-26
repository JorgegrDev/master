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
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 100 }],
    "import/no-duplicates": "warn"
  },
};
