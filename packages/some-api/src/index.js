import { fork } from 'child_process';
import path from 'path';
import chalk from 'chalk';

export default class SomeApi {
  async run() {
    console.log(chalk.green('Starting task'))
    let forked = fork(require.resolve('./worker-register.js'));

    let result = await new Promise((resolve, reject) => {
      forked.on('message', (msg) => {
        resolve(msg);
        forked.kill();
      });
    });
    console.log(chalk.green('All done'));

    return result;
  }
}
