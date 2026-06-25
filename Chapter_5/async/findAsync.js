/**
 * @module findAsync
 */

/**
 * Maps items asynchronously, then returns the first item whose mapped
 * value passes `fnFind`.
 *
 * @param {Array} arr - Input array.
 * @param {Function} fnAsync - Async mapping function.
 * @param {Function} fnFind - Predicate tested against mapped values.
 * @returns {Promise<*|undefined>} Promise resolving to the first match or `undefined`.
 * @example
 * await findAsync(
 *   [1, 2, 3],
 *   async (n) => n * 2,
 *   (mapped) => mapped > 3
 * ); // 2
 */
const findAsync = (arr, fnAsync, fnFind) =>
  Promise.all(arr.map(fnAsync)).then((arr2) => {
    const index = arr2.findIndex(fnFind);
    return index < 0 ? undefined : arr[index];
  });

module.exports = findAsync;
