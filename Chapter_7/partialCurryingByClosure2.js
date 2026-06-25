/**
 * @module Chapter_7/partialCurryingByClosure2
 * Closure-based partial currying with an explicit target arity.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to partially curry.
 * @param {number} [len=fn.length] - Total number of arguments to collect.
 * @returns {Function} Function accepting remaining arguments in one or more calls.
 * @example
 * const sum = (...args) => args.reduce((x, y) => x + y, 0);
 * partialCurryingByClosure2(sum, 5)(1)(2)(3)(4)(5); // 15
 */
const partialCurryingByClosure2 = (fn, len = fn.length) => {
  const curryize =
    (...args1) =>
    (...args2) => {
      const allParams = [...args1, ...args2];
      return (allParams.length < len ? curryize : fn)(...allParams);
    };
  return curryize();
};

module.exports = partialCurryingByClosure2;
