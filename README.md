# Monorepo for Node CLI tool

## Setup

`yarn install`

Description: Uses yarn workspaces to install and hoist external dependencies and link local packages

## Test

`yarn test`

Description: Integration tests run after a build. Unit tests would probably use `@babel/register`

## Demo

`yarn demo`

Description: Runs the cli and compiles using esm on the fly so you don't need to worry about building first
