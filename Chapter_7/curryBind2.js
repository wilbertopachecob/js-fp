/**
 * @module Chapter_7/curryBind2
 * Curries a function using `bind`, with an explicit remaining arity.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to curry.
 * @param {number} [len=fn.length] - Remaining number of arguments to collect.
 * @returns {Function} Curried function.
 * @example
 * const sum = (...args) => args.reduce((x, y) => x + y, 0);
 * curryBind2(sum, 3)(1)(2)(3); // 6
 */
const curryBind2 = (fn, len = fn.length) =>
  len === 0 ? fn() : (p) => curryBind2(fn.bind(null, p), len - 1);

module.exports = curryBind2;
