/**
 * @module Chapter_7/curryByEval
 * Currying by generating nested arrow functions with `eval`.
 * @see src/currying.ts
 *
 * @param {Function} fn - Function to curry; must have a name for `curryByEval`.
 * @param {number} [len=fn.length] - Number of arguments to curry.
 * @returns {Function} Curried function.
 * @example
 * const sum3 = (a, b, c) => a + b + c;
 * curryByEval(sum3)(1)(2)(3); // 6
 */
const range = require("../Chapter_5/range.js");

const curryByEval = (fn, len = fn.length) =>
  eval(
    `(${range(0, len)
      .map((n) => `x${n}`)
      .join("=>")} => ${fn.name}(${range(0, len)
      .map((n) => `x${n}`)
      .join(",")}))`
  );

/**
 * Currying by `eval` using the function source when the function has no name.
 *
 * @param {Function} fn - Function to curry.
 * @param {number} [len=fn.length] - Number of arguments to curry.
 * @returns {Function} Curried function.
 * @example
 * const sum3 = (a, b, c) => a + b + c;
 * curryByEval2(sum3)(1)(2)(3); // 6
 */
const curryByEval2 = (fn, len = fn.length) =>
  eval(
    `(${range(0, len)
      .map((n) => `x${n}`)
      .join("=>")} => (${fn.toString()})(${range(0, len)
      .map((n) => `x${n}`)
      .join(",")}))`
  );

module.exports = { curryByEval, curryByEval2 };
