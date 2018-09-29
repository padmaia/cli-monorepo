export default function runSomeLongTask(runTime) {
  return new Promise((resolve, reject) => {
    let start = Date.now();
    let now = Date.now();
    while (now - start < runTime) {
      now = Date.now();
    }
    resolve();
  });
}
