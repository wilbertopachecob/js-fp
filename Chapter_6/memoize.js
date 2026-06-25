/**
 * @module memoize
 * Higher-order function — takes a function and returns a new one that caches results.
 */

/**
 * Stores the result of a function so repeated calls with the same
 * arguments return the cached value.
 *
 * @param {Function} fn - Function to memoize.
 * @returns {Function} Memoized wrapper around `fn`.
 * @example
 * const slowDouble = (n) => n * 2;
 * const fastDouble = memoize(slowDouble);
 * fastDouble(5); // computes
 * fastDouble(5); // reads from cache
 */
const memoize = (fn) => {
  let cache = {};
  const PRIMITIVES = ["number", "string", "boolean"];
  return (...args) => {
    const key =
      args.length === 1 && PRIMITIVES.includes(typeof args[0])
        ? args[0]
        : JSON.stringify(args);
    return key in cache ? cache[key] : (cache[key] = fn(...args));
  };
};

module.exports = memoize;
