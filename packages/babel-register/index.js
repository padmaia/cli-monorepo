if (!process.env.BABEL_ENV) process.env.BABEL_ENV = 'modern';

require('@babel/register')({
  ignore: [],
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current'
      }
    }]
  ]
});
