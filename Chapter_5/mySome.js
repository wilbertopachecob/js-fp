/**
 * @module mySome
 */

/**
 * Same idea as `Array.some`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {boolean} `true` if at least one element passes the test.
 * @example
 * mySome([1, 2, 3], (n) => n > 2); // true
 */
const mySome = (arr, fn) => arr.reduce((acc, next) => acc || fn(next), false);

module.exports = mySome;
