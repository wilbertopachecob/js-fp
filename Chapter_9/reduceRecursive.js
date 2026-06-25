/**
 * @module Chapter_9/reduceRecursive
 */

/**
 * `reduce` implemented with an inner recursive loop over indices.
 *
 * @param {Array} arr - Source array.
 * @param {(acc: *, value: *) => *} fn - Reducer.
 * @param {*} initialValue - Initial accumulator.
 * @returns {*} Reduced value.
 * @example
 * reduceRecursive([1, 2, 3, 4], (acc, n) => acc + n, 0); // 10
 */
const reduceRecursive = (arr, fn, initialValue) => {
  const recursiveLoop = (acc, next, i = 0) => {
    acc = fn(acc, next);
    if (i === arr.length - 1) {
      return acc;
    }
    return recursiveLoop(acc, arr[i + 1], i + 1);
  };
  return recursiveLoop(initialValue, arr[0]);
};

/**
 * `reduce` implemented with tail recursion over slices. Skips holes in sparse arrays.
 *
 * @param {Array} orig - Source array.
 * @param {(acc: *, value: *, index: number, array: Array) => *} cb - Reducer.
 * @param {*} accum - Initial accumulator.
 * @returns {*} Reduced value.
 * @example
 * reduceR([1, 2, 3], (acc, n) => acc + n, 0); // 6
 */
const reduceR = (orig, cb, accum) => {
  const reduceLoop = (arr, i, currentAccum) => {
    return arr.length === 0
      ? currentAccum
      : reduceLoop(
          arr.slice(1),
          i + 1,
          !(0 in arr) ? currentAccum : cb(currentAccum, arr[0], i, orig)
        );
  };
  return reduceLoop(orig, 0, accum);
};

module.exports = { reduceRecursive, reduceR };
