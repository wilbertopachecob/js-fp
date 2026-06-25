/**
 * @module flatAll
 */

/**
 * Flattens nested arrays into one level.
 *
 * @param {Array} arr - Input array, possibly nested.
 * @returns {Array} Fully flattened array.
 * @example
 * flatAll([1, [2, [3]], 4]); // [1, 2, 3, 4]
 */
const flatAll = (arr) =>
  arr.reduce(
    (acc, next) => acc.concat(Array.isArray(next) ? flatAll(next) : next),
    []
  );

module.exports = flatAll;
