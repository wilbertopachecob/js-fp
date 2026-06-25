/**
 * @module forEachAsync
 */

const fakeAPI = require("./fakeApi");
const useResult = require("./useResult");

/**
 * Runs an async function for every item, one after another.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Async function applied to each element.
 * @returns {Promise<void>} Promise that resolves when all items are processed.
 * @example
 * await forEachAsync([1, 2], async (n) => console.log(n));
 */
const forEachAsync = (arr, fn) =>
  arr.reduce(
    (promise, value) => promise.then(() => fn(value)),
    Promise.resolve()
  );

module.exports = forEachAsync;

if (require.main === module) {
  (async () => {
    console.log("START FOREACH VIA REDUCE");
    const arr = [1, 2, 3, 4];
    const fn = async (v) => {
      const result = await fakeAPI(v * 1000, v);
      useResult(result);
    };
    await forEachAsync(arr, fn);
    console.log("END FOREACH VIA REDUCE");
  })();
}
