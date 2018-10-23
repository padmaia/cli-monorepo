#!/usr/bin/env node
const spawn = require('cross-spawn');
const path = require('path');

// Using `node -r babel-register` works inside of workers too
const nodeArgs = ['-r', 'some-cli-babel-register', path.resolve(__dirname, './node_modules/.bin/some-cli')];
const cliArgs = process.argv.slice(2);

let result = spawn.sync(
  'node',
  nodeArgs.concat(cliArgs),
  { stdio: 'inherit' }
);

process.exit(result.status);
