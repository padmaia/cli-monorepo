require = require('esm')(module, {
  mainFields: ['module']
});

require('@babel/register')({
  include: ['**/*.js'],
  ignore: []
});
