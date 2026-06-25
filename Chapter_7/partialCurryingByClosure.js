/**
 * @module Chapter_7/partialCurryingByClosure
 * Partial currying implemented with closures instead of `bind`.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to partially curry.
 * @returns {Function} Function accepting remaining arguments in one or more calls.
 * @example
 * const sum3 = (a, b, c) => a + b + c;
 * partialCurryingByClosure(sum3)(1)(2)(3); // 6
 */
const partialCurryingByClosure = (fn) => {
  const curryize =
    (...args1) =>
    (...args2) => {
      const allParams = [...args1, ...args2];
      return (allParams.length < fn.length ? curryize : fn)(...allParams);
    };
  return curryize();
};

module.exports = partialCurryingByClosure;
