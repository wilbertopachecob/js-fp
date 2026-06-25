/**
 * @module Chapter_8/composeTwo
 * Composes two functions right to left: first `g`, then `f`.
 * @see src/composition.ts
 *
 * @param {Function} f - Outer function.
 * @param {Function} g - Inner function run first.
 * @returns {Function} Composed function.
 * @example
 * const addOne = (x) => x + 1;
 * const double = (x) => x * 2;
 * composeTwo(addOne, double)(3); // 7
 */
const { flip2 } = require("../Chapter_7/flip");
const pipeTwo = require("./pipeTwo");

const composeTwo =
  (f, g) =>
  (...args) =>
    f(g(...args));

const composeTwoByFlipping = flip2(pipeTwo);

module.exports = composeTwo;
module.exports.composeTwoByFlipping = composeTwoByFlipping;
