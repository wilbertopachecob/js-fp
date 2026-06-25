/**
 * @module Chapter_9/exercises/partition
 */

/**
 * Splits `arr` into `[pass, fail]` according to `fn`.
 *
 * @param {Array} arr - Array to partition.
 * @param {(value: *) => boolean} fn - Predicate.
 * @returns {[Array, Array]} Tuple of passing and failing elements.
 * @example
 * partition([1, 2, 3, 4], (x) => x % 2 === 0); // [[2, 4], [1, 3]]
 */
const partition = (arr, fn) => {
  const trueValues = [];
  const falseValues = [];
  arr.forEach((element) =>
    (fn(element) ? trueValues : falseValues).push(element)
  );
  return [trueValues, falseValues];
};

module.exports = partition;
