const path = require('path');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@styled'] = path.join(__dirname, 'src/styled');
    return config;
  },
});
