/**
 * @module Chapter_7/partialByClosure
 * Partially applies arguments using closures; missing slots can be filled later.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to partially apply.
 * @param {...*} args - Initial arguments; use `undefined` for holes.
 * @returns {Function} Function accepting remaining arguments.
 * @example
 * const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;
 * partialByClosure(nonsense)(1)(2)(3)(4)(5); // "1/2/3/4/5"
 */
const partialByClosure = (fn, ...args) => {
  const partialize =
    (...args1) =>
    (...args2) => {
      for (let i = 0; i < args1.length && args2.length; i++) {
        if (args1[i] === undefined) {
          args1[i] = args2.shift();
        }
      }
      const allParams = [...args1, ...args2];
      return (
        allParams.includes(undefined) || allParams.length < fn.length
          ? partialize
          : fn
      )(...allParams);
    };
  return partialize(...args);
};

module.exports = partialByClosure;
