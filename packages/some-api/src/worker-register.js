// @babel/register when required by ava or mocha does not apply to code in forked processes
if (process.env.NODE_ENV === 'test') require('some-cli-babel-register');
require('./worker');
