/**
 * @module Chapter_7/partialByEval
 * Partial application by generating a function with `eval`.
 * @see src/currying.ts
 *
 * @param {Function} fn - Named function to partially apply.
 * @param {...*} args - Initial arguments; use `undefined` for holes.
 * @returns {Function} Function accepting remaining arguments.
 * @example
 * const sum3 = (a, b, c) => a + b + c;
 * partialByEval(sum3, 1, 2)(3); // 6
 */
const range = require("../Chapter_5/range.js");

const partialByEval = (fn, ...args) =>
  eval(
    `(${range(0, fn.length)
      .map((x) => (args[x] === undefined ? `x${x}` : null))
      .filter((x) => !!x)
      .join(",")}) => ${fn.name}(${range(0, fn.length)
      .map((x) => (args[x] === undefined ? `x${x}` : args[x]))
      .join(",")})`
  );

module.exports = partialByEval;
