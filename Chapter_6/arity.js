/**
 * @module arity
 */

/**
 * Returns a wrapper whose `length` property is fixed to `n`.
 *
 * @param {Function} fn - Function to wrap.
 * @param {number} n - Desired arity.
 * @returns {Function} Function wrapper with fixed arity.
 * @example
 * arity((x, y) => x + y, 1).length; // 1
 */
const arity = (fn, n) =>
  Object.defineProperty((...args) => fn(...args.slice(0, n)), "length", {
    value: n,
  });

module.exports = arity;

if (require.main === module) {
  const fn = (x, y) => x + y;
  console.log(arity(fn, 2).length);
}
