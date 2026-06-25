/**
 * @module Chapter_9/exercises/insertionSort
 */

/**
 * Sorts an array in place using insertion sort.
 *
 * @param {Array} arr - Array to sort.
 * @returns {Array} The same array, sorted ascending.
 * @example
 * insertionSort([8, 9, 5, 4, 7]); // [4, 5, 7, 8, 9]
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};

module.exports = insertionSort;

if (require.main === module) {
  console.log(insertionSort([8, 9, 5, 4, 7, 52, 2, 1]));
}
