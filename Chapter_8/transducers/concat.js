/**
 * @module Chapter_8/transducers/concat
 * Adds one value to an array accumulator.
 * @see src/transducers.ts
 *
 * @param {Array} acc - Accumulator array.
 * @param {*} val - Value to append.
 * @returns {Array} The same accumulator with `val` pushed.
 * @example
 * [1, 2, 3].reduce(concat, []); // [1, 2, 3] when used as reducer step
 */
const concat = (acc, val) => (acc.push(val), acc);

module.exports = concat;
