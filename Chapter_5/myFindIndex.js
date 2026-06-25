/**
 * @module myFindIndex
 */

/**
 * Same idea as `Array.findIndex`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {number} Index of the first matching element, or `-1`.
 * @example
 * myFindIndex([1, 2, 3], (n) => n > 1); // 1
 */
const myFindIndex = (arr, fn) =>
  arr.reduce((acc, next, i) => (acc === -1 && fn(next) ? i : acc), -1);

module.exports = myFindIndex;
