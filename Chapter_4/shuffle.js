/**
 * @module Chapter_4/shuffle
 */

/**
 * Returns a shuffled array using the Fisher-Yates algorithm.
 *
 * Shuffles the array in place and returns the same reference.
 *
 * @param {*[]} arr - Array to shuffle.
 * @returns {*[]} The shuffled array (same reference as the input).
 */
const shuffle = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let r = Math.floor(Math.random() * (len - i));
    [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
  }
  return arr;
};

module.exports = shuffle;

if (require.main === module) {
  const arr = [11, 22, 33, 44, 55, 66, 77, 88];
  console.log(shuffle(arr));
}
