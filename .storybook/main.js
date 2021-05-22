const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset"
  ],
  "webpackFinal": async (config) => {
    config.resolve.alias["assets"] = path.resolve(__dirname, '../assets');
    config.resolve.extensions = [...config.resolve.extensions, '.css'];
    console.log('Config: ', config);
    return config;
  }
}