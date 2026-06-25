/**
 * @module Chapter_9/filterRecursive
 * @see {@link module:src/recursion} — equivalent `filterRecursive` in `src/recursion.ts`
 */

/**
 * `filter` implemented with recursion instead of a loop. Skips holes in sparse arrays.
 *
 * @param {Array} orig - Source array.
 * @param {(value: *, index: number, array: Array) => boolean} cb - Predicate.
 * @returns {Array} Filtered array.
 * @example
 * filterRecursive([1, 2, 3, 4], (x) => x % 2); // [1, 3]
 */
const filterRecursive = (orig, cb) => {
  const filterLoop = (arr, i) => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      return [].concat(filterLoop(arr.slice(1), i + 1));
    } else if (cb(arr[0], i, orig)) {
      return [arr[0]].concat(filterLoop(arr.slice(1), i + 1));
    }
    return [].concat(filterLoop(arr.slice(1), i + 1));
  };
  return filterLoop(orig, 0);
};

module.exports = filterRecursive;
