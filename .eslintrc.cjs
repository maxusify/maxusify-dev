/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended"],
      excludedFiles: ["**/env.d.ts"],
      files: ["*.astro", "*.ts", "*.tsx"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      plugins: [
        "@typescript-eslint",
        "react",
        "unused-imports",
        "simple-import-sort",
      ],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(@|components)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
            ],
          },
        ],
        "simple-import-sort/exports": "error",
      },
    },
  ],
};
