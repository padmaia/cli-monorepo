
if (process.env.NODE_ENV === 'test') {
  require = require('esm')(module);
}

module.exports = require('./worker');
