
if (process.env.NODE_ENV === 'test') {
  require = require('esm')(module);
  require('@babel/register')
}

module.exports = require('./worker');
