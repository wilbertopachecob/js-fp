/**
 * @module Chapter_9/exercises/everyR
 */

/**
 * Returns whether every element satisfies `fn`, implemented recursively.
 *
 * @param {Array} arr - Array to test.
 * @param {(value: *) => boolean} fn - Predicate.
 * @returns {boolean} True when all elements pass.
 * @example
 * everyR([2, 4, 6], (x) => x % 2 === 0); // true
 */
const everyR = (arr, fn) => {
  const everyLoop = (items) => {
    if (items.length === 0) {
      return true;
    }
    if (fn(items[0])) {
      return everyLoop(items.slice(1));
    }
    return false;
  };
  return everyLoop(arr);
};

module.exports = everyR;
