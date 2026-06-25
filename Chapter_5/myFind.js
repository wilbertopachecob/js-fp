/**
 * @module myFind
 */

/**
 * Same idea as `Array.find`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {*} The first element that passes the test, or `undefined`.
 * @example
 * myFind([1, 2, 3], (n) => n > 1); // 2
 */
const myFind = (arr, fn) =>
  arr.reduce(
    (acc, next) => (acc === undefined && fn(next) ? next : acc),
    undefined
  );

module.exports = myFind;
