module.exports = {
  env: {
    node: true,
    es2024: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  rules: {
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    // disable vars-on-top, and then disallow vars completely
    "vars-on-top": "off",
    "no-var": "error",
    // Require { a , b }, instead of { a: a, b: b}
    "object-shorthand": "error",
  },
  parserOptions: {
    ecmaVersion: 15,
    sourceType: "module",
  },
}
