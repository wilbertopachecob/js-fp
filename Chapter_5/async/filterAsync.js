/**
 * @module filterAsync
 */

const mapAsync = require("./mapAsync");

/**
 * Keeps items where the async test returns `true`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Async predicate tested against each element.
 * @returns {Promise<Array>} Promise resolving to filtered items.
 * @example
 * await filterAsync([1, 2, 3], async (n) => n % 2 === 0); // [2]
 */
const filterAsync = (arr, fn) =>
  mapAsync(arr, fn).then((arr2) => arr.filter((_, i) => Boolean(arr2[i])));

module.exports = filterAsync;
