#!/usr/bin/env node
const spawn = require('cross-spawn');
const path = require('path');

const nodeArgs = ['-r', 'esm', path.resolve(__dirname, './cli.js')];
const cliArgs = process.argv.slice(2);

let env = {
  ...process.env,
  ESM_OPTIONS: path.resolve(__dirname, '../../.esmrc.json')
}

let result = spawn.sync(
  'node',
  nodeArgs.concat(cliArgs),
  { env, stdio: 'inherit' }
);

process.exit(result.status);
