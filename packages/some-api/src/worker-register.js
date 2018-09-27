
if (process.env.NODE_ENV === 'test') {
  require = require('esm')(module, {
    mainFields: ['module']
  });
}

module.exports = require('./worker');
