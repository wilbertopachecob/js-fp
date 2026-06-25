/**
 * @module myEvery
 */

/**
 * Same idea as `Array.every`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate tested against each element.
 * @returns {boolean} `true` if every element passes the test.
 * @example
 * myEvery([2, 4, 6], (n) => n % 2 === 0); // true
 */
const myEvery = (arr, fn) => arr.reduce((acc, next) => acc && fn(next), true);

module.exports = myEvery;
