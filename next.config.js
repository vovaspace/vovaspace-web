const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const withPreact = require('next-plugin-preact');

const staticPath = 'static/chunks';

module.exports = withPreact({
  webpack(config, options) {
    const { isServer } = options;

    config.module.rules.push({
      test: /\.(ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/${staticPath}/fonts/`,
            outputPath: `${isServer ? '../' : ''}${staticPath}/fonts/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|webp)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/${staticPath}/images/`,
            outputPath: `${isServer ? '../' : ''}${staticPath}/images/`,
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
    config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');

    return config;
  },
  target: 'serverless',
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
});
