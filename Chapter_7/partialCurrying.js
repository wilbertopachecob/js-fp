/**
 * @module Chapter_7/partialCurrying
 * Partially applies arguments, then returns a new function for the rest.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to partially curry.
 * @returns {Function} Function accepting remaining arguments in one or more calls.
 * @example
 * const sum3 = (a, b, c) => a + b + c;
 * partialCurrying(sum3)(1)(2)(3); // 6
 */
const partialCurrying = (fn) =>
  fn.length === 0 ? fn() : (...pp) => partialCurrying(fn.bind(null, ...pp));

module.exports = partialCurrying;
