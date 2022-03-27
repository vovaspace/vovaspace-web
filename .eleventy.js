const cssmin = require('csso');
const htmlmin = require('html-minifier-terser');

const i18n = require('./filters/i18n');

module.exports = (config) => {
  config.addWatchTarget('styles');

  config.addPassthroughCopy({ public: '.' });

  config.addTransform('htmlmin', (content, output) =>
    output?.endsWith('.html')
      ? htmlmin.minify(content, {
          removeComments: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        })
      : content,
  );

  config.addFilter('i18n', i18n);
  config.addFilter('cssmin', (code) => cssmin.minify(code).css);

  return {
    dir: {
      input: 'pages',
      includes: '../includes',
      layouts: '../layouts',
      data: '../data',
      output: 'site',
    },
  };
};
