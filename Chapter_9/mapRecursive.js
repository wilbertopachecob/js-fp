/**
 * @module Chapter_9/mapRecursive
 * @see {@link module:src/recursion} — equivalent `mapRecursive` in `src/recursion.ts`
 */

/**
 * `map` implemented with recursion instead of a loop. Skips holes in sparse arrays.
 *
 * @param {Array} orig - Source array.
 * @param {(value: *, index: number, array: Array) => *} cb - Mapper callback.
 * @returns {Array} New mapped array.
 * @example
 * mapRecursive([1, 2, 3], (x) => x * 2); // [2, 4, 6]
 */
const mapRecursive = (orig, cb) => {
  const mapLoop = (arr, i) => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      // Preserve sparse holes when mapping recursively.
      // eslint-disable-next-line no-sparse-arrays -- intentional hole for sparse arrays
      return [,].concat(mapLoop(arr.slice(1), i + 1));
    }
    return [cb(arr[0], i, orig)].concat(mapLoop(arr.slice(1), i + 1));
  };
  return mapLoop(orig, 0);
};

module.exports = mapRecursive;
