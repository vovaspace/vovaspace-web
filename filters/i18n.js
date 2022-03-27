module.exports = function i18n(key) {
  const { locale } = this.ctx;

  if (typeof locale !== 'string')
    throw new Error(
      'You should to declare `locale` variable to use `i18n` filter.',
    );

  if (typeof key !== 'object')
    throw new Error('A key should be an object to use `i18n` filter.');

  if (!(locale in key))
    throw new Error(
      `\`${locale}\` locale not found in \`${JSON.stringify(key)}\`.`,
    );

  return key[locale];
};
