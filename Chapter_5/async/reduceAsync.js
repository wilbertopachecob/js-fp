const foreachAsync = require("./forEachAsync");

const reduceAsync = (arr, fn, init) =>
  Promise.resolve(init).then((acc) =>
    foreachAsync(arr, async (v, i) => {
      acc = await fn(acc, v, i);
    }).then((_) => acc)
  );

const sum = (x, y) =>
  new Promise((resolve) => setTimeout(() => resolve(x + y), 1000));

(async () => {
  console.log("START reduceAsync VIA REDUCE");
  const arr = [1, 2, 3, 4];
  const summed = await reduceAsync(
    arr,
    async (_accum, n) => {
      const accum = await _accum;
      const x = await sum(accum, n);
      console.log(`accumulator=${accum} value=${x} `);
      return x;
    },
    0
  );
  console.log(summed);
  console.log("END REDUCE");
})();

module.exports = reduceAsync;
