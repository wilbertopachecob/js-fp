/**
 * @module Chapter_9/divide_and_conquer/quicksort
 * @see {@link module:src/recursion} — equivalent `quicksort` in `src/recursion.ts`
 */

/**
 * Sorts an array using the quicksort divide-and-conquer strategy.
 *
 * @param {Array} arr - Array to sort.
 * @returns {Array} New sorted array.
 * @example
 * quicksort([3, 1, 4, 1, 5]); // [1, 1, 3, 4, 5]
 */
const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const smaller = arr.slice(1).filter((x) => x < pivot);
  const greater = arr.slice(1).filter((x) => x >= pivot);
  return [...quicksort(smaller), pivot, ...quicksort(greater)];
};

module.exports = quicksort;
