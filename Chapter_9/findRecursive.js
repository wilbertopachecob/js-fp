/**
 * @module Chapter_9/findRecursive
 */

/**
 * Finds the first element matching `fn` using recursion.
 *
 * @param {Array} arr - Array to search.
 * @param {(value: *) => boolean} fn - Predicate.
 * @returns {*|undefined} First matching element, or `undefined` if none.
 * @example
 * findRecursive([1, 12, 5, 22], (x) => x >= 20 && x <= 29); // 22
 */
const findRecursive = (arr, fn) => {
  if (arr.length === 0) {
    return undefined;
  }
  return fn(arr[0]) ? arr[0] : findRecursive(arr.slice(1), fn);
};

module.exports = findRecursive;
