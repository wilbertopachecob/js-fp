/**
 * @module Chapter_8/pipeTwo
 * Runs two functions in order: first `f`, then `g`.
 * @see src/composition.ts
 *
 * @param {Function} f - First function to run.
 * @param {Function} g - Second function; receives the result of `f`.
 * @returns {Function} Composed function.
 * @example
 * const addOne = (x) => x + 1;
 * const double = (x) => x * 2;
 * pipeTwo(addOne, double)(3); // 8
 */
const pipeTwo =
  (f, g) =>
  (...args) =>
    g(f(...args));

module.exports = pipeTwo;
