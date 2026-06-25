/**
 * @module not
 */

/**
 * Returns a function that negates the result of a predicate.
 *
 * @param {Function} fn - Predicate function.
 * @returns {Function} Negated predicate.
 * @example
 * [1, 2, 3, 4].filter(not((n) => n % 2 === 0)); // [1, 3]
 */
const not =
  (fn) =>
  (...args) =>
    !fn(...args);

module.exports = not;

if (require.main === module) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const odd = (elem) => elem % 2;
  console.log(arr.filter(odd));
  console.log(arr.filter(not(odd)));
}
