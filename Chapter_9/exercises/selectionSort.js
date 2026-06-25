/**
 * @module Chapter_9/exercises/selectionSort
 */

/**
 * Sorts an array in place using selection sort.
 *
 * @param {Array} arr - Array to sort.
 * @returns {Array} The same array, sorted ascending.
 * @example
 * selectionSort([8, 6, 3, 4, 7]); // [3, 4, 6, 7, 8]
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

module.exports = selectionSort;

if (require.main === module) {
  console.log(selectionSort([8, 6, 3, 4, 7, 9, 35, 48, 21]));
}
