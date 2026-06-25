/**
 * @module Chapter_9/decrease_and_conquer/search
 */

/**
 * Recursively checks whether `val` appears in `arr`.
 *
 * @param {Array} arr - Array to search.
 * @param {*} val - Value to find.
 * @returns {boolean} True when found.
 * @example
 * search([1, 2, 3], 2); // true
 * search([1, 2, 3], 9); // false
 */
const search = (arr, val) => {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else return search(arr.slice(1), val);
};

/**
 * Same as {@link search} using a ternary expression.
 *
 * @param {Array} arr - Array to search.
 * @param {*} val - Value to find.
 * @returns {boolean} True when found.
 * @example
 * search2(["a", "b"], "b"); // true
 */
const search2 = (arr, val) =>
  arr.length === 0 ? false : arr[0] === val || search2(arr.slice(1), val);

/**
 * Same as {@link search} using short-circuit evaluation.
 *
 * @param {Array} arr - Array to search.
 * @param {*} val - Value to find.
 * @returns {boolean|undefined} True when found, falsy when empty.
 * @example
 * search3([10, 20], 20); // true
 */
const search3 = (arr, val) =>
  arr.length && (arr[0] === val || search3(arr.slice(1), val));

module.exports = { search, search2, search3 };
