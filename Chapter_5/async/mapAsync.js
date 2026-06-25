/**
 * @module mapAsync
 */

const fakeAPI = require("./fakeApi");
const useResult = require("./useResult");

/**
 * Runs an async function for every item and waits for all results.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Async function applied to each element.
 * @returns {Promise<Array>} Promise resolving to mapped results.
 * @example
 * await mapAsync([1, 2], async (n) => n * 2); // [2, 4]
 */
const mapAsync = (arr, fn) => Promise.all(arr.map(fn));

module.exports = mapAsync;

if (require.main === module) {
  (async () => {
    console.log("START FOREACH VIA REDUCE");
    const arr = [1, 2, 3, 4];
    const fn = async (v) => {
      const result = await fakeAPI(v * 1000, v);
      useResult(result);
    };
    await mapAsync(arr, fn);
    console.log("END FOREACH VIA REDUCE");
  })();
}
