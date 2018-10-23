# Monorepo for Node CLI tool

## Setup

`yarn install`

Description: Uses yarn workspaces to install and hoist external dependencies and link local packages

## Test

`yarn test`

Tests fail because `babel-register-some-cli` required through ava does not apply to files in forked process

## Demo

`yarn demo`

Demo does work because we are spawning with `node -r babel-register-some-cli` which does apply to files in forked process
