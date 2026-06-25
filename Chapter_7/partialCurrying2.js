/**
 * @module Chapter_7/partialCurrying2
 * Partial currying with an explicit target arity.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to partially curry.
 * @param {number} [len=fn.length] - Total number of arguments to collect.
 * @returns {Function} Function accepting remaining arguments in one or more calls.
 * @example
 * const sum = (...args) => args.reduce((x, y) => x + y, 0);
 * partialCurrying2(sum, 5)(1, 2)(3)(4, 5); // 15
 */
const partialCurrying2 = (fn, len = fn.length) =>
  len === 0
    ? fn()
    : (...pp) => partialCurrying2(fn.bind(null, ...pp), len - pp.length);

module.exports = partialCurrying2;
