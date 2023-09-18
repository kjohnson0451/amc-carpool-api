module.exports = {
  env: {
    node: true,
    es2024: true,
  },
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
  parserOptions: {
    ecmaVersion: 15,
    sourceType: "module",
  },
}
