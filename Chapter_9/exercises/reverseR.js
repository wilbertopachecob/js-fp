/**
 * @module Chapter_9/exercises/reverseR
 */

/**
 * Reverses an array in place using recursion.
 *
 * @param {Array} arr - Array to reverse.
 * @returns {Array} The same array, reversed.
 * @example
 * reverseR([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
 */
const reverseR = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const reverseLoop = (items, i = 0) => {
    if (i < Math.ceil(items.length / 2)) {
      const j = items.length - 1 - i;
      [items[i], items[j]] = [items[j], items[i]];
      return reverseLoop(items, i + 1);
    }
    return items;
  };
  return reverseLoop(arr);
};

module.exports = reverseR;

if (require.main === module) {
  console.log(reverseR([1, 2, 3, 4, 5]));
}
