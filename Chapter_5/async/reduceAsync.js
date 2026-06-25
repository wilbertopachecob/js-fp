/**
 * @module reduceAsync
 */

const foreachAsync = require("./forEachAsync");

/**
 * Reduces an array one async step at a time.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Async reducer `(acc, value, index) => acc`.
 * @param {*} init - Initial accumulator value.
 * @returns {Promise<*>} Promise resolving to the final accumulator.
 * @example
 * await reduceAsync([1, 2, 3], async (acc, n) => acc + n, 0); // 6
 */
const reduceAsync = (arr, fn, init) =>
  Promise.resolve(init).then((acc) =>
    foreachAsync(arr, async (v, i) => {
      acc = await fn(acc, v, i);
    }).then(() => acc)
  );

module.exports = reduceAsync;
