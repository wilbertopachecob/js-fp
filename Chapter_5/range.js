/**
 * @module range
 */

/**
 * Creates a list of numbers from `start` up to (but not including) `end`.
 *
 * @param {number} [start=0] - Starting value.
 * @param {number} [end] - End value (exclusive).
 * @param {number} [step=1] - Increment between values.
 * @returns {number[]} Generated range.
 * @example
 * range(1, 10, 2); // [1, 3, 5, 7, 9]
 */
const range = (start = 0, end, step = 1) => {
  if (start <= 0 && end === undefined) {
    return [0];
  }
  return new Array(Math.floor(end / step))
    .fill(0)
    .reduce(
      (acc, _, i) =>
        i === 0
          ? [start]
          : acc[acc.length - 1] + step === end
          ? acc
          : acc.concat(acc[acc.length - 1] + step),
      []
    );
};

module.exports = range;

if (require.main === module) {
  console.log(range(1, 10, 2));
  console.log(range(1, 5));
  console.log(range(0, 20, 5));
  console.log(range(0));
}
