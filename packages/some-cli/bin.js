#!/usr/bin/env node

function runCli() {
  try {
    if (parseInt(process.versions.node, 10) < 8) {
      require('./lib/legacy');
    } else {
      require('./lib/modern');
    }
  } catch (e) {
    require('./src');
  }
}

runCli();
