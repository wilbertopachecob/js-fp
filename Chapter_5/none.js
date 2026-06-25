/**
 * @module none
 */

/**
 * Returns `true` when no element passes the predicate.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {boolean} `true` if no element passes the test.
 * @example
 * none([2, 3, 5], (n) => n === 1); // true
 */
const none = (arr, fn) => arr.every((v) => !fn(v));

/**
 * Same as {@link none}, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {boolean} `true` if no element passes the test.
 * @example
 * none1([2, 3, 5], (n) => n === 1); // true
 */
const none1 = (arr, fn) => arr.reduce((acc, next) => acc && !fn(next), true);

module.exports = none;
module.exports.none1 = none1;

if (require.main === module) {
  const fn = (v) => v === 1;
  const arr2 = [2, 3, 5, 6];
  console.log(none1(arr2, fn));
  console.log(none(arr2, fn));
}
