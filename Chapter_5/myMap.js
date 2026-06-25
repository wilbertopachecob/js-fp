/**
 * @module myMap
 */

/**
 * Same idea as `Array.map`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Mapping function applied to each element.
 * @returns {Array} New array with mapped values.
 * @example
 * myMap([1, 2, 3], (n) => n * 2); // [2, 4, 6]
 */
const myMap = (arr, fn) =>
  arr.reduce((acc, next) => {
    acc.push(fn(next));
    return acc;
  }, []);

module.exports = myMap;
