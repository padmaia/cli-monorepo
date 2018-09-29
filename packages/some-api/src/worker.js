import runSomeLongTask from 'some-plugin';

async function run() {
  await runSomeLongTask(1000);
  process.send(42);
}

run();
