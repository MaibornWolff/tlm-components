const utilities = [
  { CSSprop: ['padding'], name: 'p' },
  { CSSprop: ['padding-left'], name: 'pl' },
  { CSSprop: ['padding-right'], name: 'pr' },
  { CSSprop: ['padding-top'], name: 'pt' },
  { CSSprop: ['padding-bottom'], name: 'pb' },
  { CSSprop: ['padding-left', 'padding-right'], name: 'px' },
  { CSSprop: ['padding-top', 'padding-bottom'], name: 'py' },
  { CSSprop: ['margin'], name: 'm' },
  { CSSprop: ['margin-left'], name: 'ml' },
  { CSSprop: ['margin-right'], name: 'mr' },
  { CSSprop: ['margin-top'], name: 'mt' },
  { CSSprop: ['margin-bottom'], name: 'mb' },
  { CSSprop: ['margin-left', 'margin-right'], name: 'mx' },
  { CSSprop: ['margin-top', 'margin-bottom'], name: 'my' },
].map(({ CSSprop, name }) => ({
  tokenType: 'spacing',
  name,
  CSSprop,
}));

module.exports = { utilities };
