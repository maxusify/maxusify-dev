/** @type {import("prettier").Config} */
const config = {
  ...require("prettier-config-standard"),
  pluginSearchDirs: [__dirname],
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

module.exports = config;
