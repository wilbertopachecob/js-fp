/**
 * @module flatN
 */

const flatAll = require("./flatAll");
const flatOne = require("./flatOne");
const range = require("./range");

/**
 * Flattens nested arrays up to `n` levels deep.
 *
 * @param {Array} arr - Input array, possibly nested.
 * @param {number} n - Number of levels to flatten.
 * @returns {Array} Flattened array.
 * @example
 * flatN([1, [2, [3]]], 1); // [1, 2, [3]]
 */
const flatN = (arr, n) => {
  let result = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem) && n) {
      result = result.concat(flatN(elem, n - 1));
    } else {
      result.push(elem);
    }
  });
  return result;
};

/**
 * Flattens nested arrays up to `n` levels by repeatedly calling {@link flatOne}.
 *
 * @param {Array} arr - Input array, possibly nested.
 * @param {number} n - Number of levels to flatten, or `Infinity` for full flatten.
 * @returns {Array} Flattened array.
 * @example
 * flatN1([1, [2, [3]]], 2); // [1, 2, 3]
 */
const flatN1 = (arr, n) => {
  if (n === Infinity) {
    return flatAll(arr);
  }
  let result = arr;
  range(0, n).forEach((_) => {
    result = flatOne(result);
  });
  return result;
};

/**
 * Flattens nested arrays up to `n` levels using recursion.
 *
 * @param {Array} arr - Input array, possibly nested.
 * @param {number} n - Number of levels to flatten, or `Infinity` for full flatten.
 * @returns {Array} Flattened array.
 * @example
 * flatN2([1, [2, [3]]], 2); // [1, 2, 3]
 */
const flatN2 = (arr, n) => {
  if (n === Infinity) {
    return flatAll(arr);
  } else if (n === 1) {
    return flatOne(arr);
  }
  return flatN2(flatOne(arr), n - 1);
};

module.exports = flatN;
module.exports.flatN1 = flatN1;
module.exports.flatN2 = flatN2;

if (require.main === module) {
  const arr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9];
  console.log(flatN(arr, 2));
  console.log(flatN(arr, 3));
  console.log(flatN(arr, 4));
}
