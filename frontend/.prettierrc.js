const tailwindPlugin = require('prettier-plugin-tailwindcss');
const sortImportsPlugin = require('@ianvs/prettier-plugin-sort-imports');

const plugins = {
  parsers: {
    typescript: {
      ...tailwindPlugin.parsers.typescript,
      preprocess: sortImportsPlugin.parsers.typescript.preprocess,
    },
  },
  options: {
    ...sortImportsPlugin.options,
  },
};

module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  plugins: [plugins],
  importOrder: [
    '^@?\\w',
    '^\\u0000',
    '',
    '^@/*/(.*)$',
    '',
    '^[./]',
    '^',
    '',
    '^.+\\.s?css$',
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
