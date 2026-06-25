/**
 * @module flatOne
 */

/**
 * Flattens nested arrays by one level.
 *
 * @param {Array} arr - Input array.
 * @returns {Array} New array flattened one level deep.
 * @example
 * flatOne([[1, 2], 3]); // [1, 2, 3]
 */
const flatOne = (arr) => [].concat(...arr);

/**
 * Same as {@link flatOne}, implemented with `reduce`.
 *
 * @param {Array} arr - Input array.
 * @returns {Array} New array flattened one level deep.
 * @example
 * flatOne2([[1, 2], 3]); // [1, 2, 3]
 */
const flatOne2 = (arr) => arr.reduce((acc, next) => acc.concat(next), []);

module.exports = flatOne;
module.exports.flatOne2 = flatOne2;

if (require.main === module) {
  const arr = [[-1, 0], 1, 2, 3, [4, 5, [6, 7]]];
  console.log(flatOne(arr));
  console.log(flatOne2(arr));
}
