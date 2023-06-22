// eslint-disable-next-line no-undef
module.exports = {
  plugins: ["react", "react-hooks", "prettier", "unused-imports", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-console": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/exhaustive-deps": "off",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
