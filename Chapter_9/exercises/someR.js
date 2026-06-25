/**
 * @module Chapter_9/exercises/someR
 */

/**
 * Returns whether any element satisfies `fn`, implemented recursively.
 *
 * @param {Array} arr - Array to test.
 * @param {(value: *) => boolean} fn - Predicate.
 * @returns {boolean} True when at least one element passes.
 * @example
 * someR([1, 2, 3, 5], (x) => x % 2); // true
 */
const someR = (arr, fn) => {
  const someLoop = (items) => {
    if (items.length === 0) {
      return false;
    }
    if (fn(items[0])) {
      return true;
    }
    return someLoop(items.slice(1));
  };
  return someLoop(arr);
};

module.exports = someR;
