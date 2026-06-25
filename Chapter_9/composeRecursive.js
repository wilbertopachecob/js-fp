/**
 * @module Chapter_9/composeRecursive
 */

/**
 * Composes functions right-to-left using recursion.
 *
 * @param {...Function} fns - Functions to compose (rightmost applied first).
 * @returns {Function} Composed function.
 * @example
 * const fn = composeRecursive((x) => x + 1, (x) => x * 10);
 * fn(2); // 21
 */
const composeRecursive = (...fns) => {
  return fns.length === 1
    ? fns[0]
    : (...args) => composeRecursive(...fns.slice(0, -1))(fns.pop()(...args));
};

module.exports = composeRecursive;
