if (!process.env.BABEL_ENV) process.env.BABEL_ENV = 'modern';

require('@babel/register')({
  ignore: [
    filepath => filepath.includes('/node_modules/')
  ],
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current'
      }
    }]
  ]
});
