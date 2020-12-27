const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  webpack(config, options) {
    const { isServer } = options;

    config.module.rules.push({
      test: /\.(ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/chunks/fonts/',
            outputPath: `${isServer ? '../' : ''}static/chunks/fonts/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@styled'] = path.join(__dirname, 'src/styled');
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@resources'] = path.join(__dirname, 'src/resources');

    return config;
  },
});
