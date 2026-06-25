/**
 * @module findOptimum
 */

/**
 * Returns a function that finds the optimum value in an array using `reduce`.
 *
 * @param {Function} fn - Binary comparison reducer.
 * @returns {Function} Function that accepts an array and returns the optimum.
 * @example
 * const findMaximum = findOptimum((x, y) => (x > y ? x : y));
 * findMaximum([22, 9, 60, 12]); // 60
 */
const findOptimum = (fn) => (arr) => arr.reduce(fn);

const findMaximum = findOptimum((x, y) => (x > y ? x : y));
const findMinimum = findOptimum((x, y) => (x < y ? x : y));

module.exports = findOptimum;

if (require.main === module) {
  const myArray = [22, 9, 60, 12, 4, 56];
  console.log(findMaximum(myArray));
  console.log(findMinimum(myArray));
}
