const foreachAsync = require("./forEachAsync");

const reduceAsync = (arr, fn, init) =>
  Promise.resolve(init).then((acc) =>
    foreachAsync(arr, async (v, i) => {
      acc = await fn(acc, v, i);
    }).then((_) => acc)
  );

module.exports = reduceAsync;
