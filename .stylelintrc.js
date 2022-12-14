module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  'order/properties-order': [],
  'plugin/rational-order': [
    true,
    {
      'border-in-box-model': false,
      'empty-line-between-groups': false,
    },
  ],
};
