export default function runSomeLongTask(runTime) {
  let start = Date.now();
  let now = Date.now();
  while (now - start < runTime) {
    now = Date.now();
  }
}
