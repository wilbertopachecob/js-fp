/**
 * @module myFilter
 */

/**
 * Same idea as `Array.filter`, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fn - Predicate; kept elements return a truthy value.
 * @returns {Array} New array with elements that pass the test.
 * @example
 * myFilter([1, 2, 3, 4], (n) => n % 2 === 0); // [2, 4]
 */
const myFilter = (arr, fn) =>
  arr.reduce((acc, next) => {
    if (fn(next)) {
      acc.push(next);
    }
    return acc;
  }, []);

module.exports = myFilter;
