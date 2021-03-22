/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat',
    'components': './src/components',
    'data': './src/data',
    'images': './src/images',
    'store': './src/store',
  },
  mount: {
    'src': '/'
  },
  'plugins': [
    '@snowpack/plugin-webpack',
    "@prefresh/snowpack",
  ],
};
