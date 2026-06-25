/**
 * @module range2
 */

/**
 * Creates a list of numbers from `start` up to (but not including) `stop`.
 *
 * @param {number} start - Starting value.
 * @param {number} stop - End value (exclusive).
 * @returns {number[]} Generated range.
 * @example
 * range2(1, 5); // [1, 2, 3, 4]
 */
const range2 = (start, stop) =>
  new Array(stop - start).fill(0).map((_, i) => start + i);

module.exports = range2;
