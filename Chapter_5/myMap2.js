/**
 * @module myMap2
 */

/**
 * Same idea as `Array.map`, implemented with `reduce` and `concat`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Mapping function applied to each element.
 * @returns {Array} New array with mapped values.
 * @example
 * myMap2([1, 2, 3], (n) => n * 2); // [2, 4, 6]
 */
const myMap2 = (arr, fn) => arr.reduce((acc, next) => acc.concat(fn(next)), []);

module.exports = myMap2;
