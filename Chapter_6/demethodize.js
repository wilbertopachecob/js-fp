/**
 * @module demethodize
 */

/**
 * Turns a method into a standalone function with the receiver as the first argument.
 *
 * @param {Function} fn - Method to demethodize.
 * @returns {Function} Standalone function.
 * @example
 * const map = demethodize(Array.prototype.map);
 * map([1, 2, 3], (n) => n * 2); // [2, 4, 6]
 */
const demethodize1 =
  (fn) =>
  (arg0, ...args) =>
    fn.apply(arg0, args);

/**
 * Same as {@link demethodize1}, implemented with `call`.
 *
 * @param {Function} fn - Method to demethodize.
 * @returns {Function} Standalone function.
 * @example
 * demethodize2(String.prototype.toUpperCase)("hi"); // "HI"
 */
const demethodize2 =
  (fn) =>
  (arg0, ...args) =>
    fn.call(arg0, ...args);

/**
 * Same as {@link demethodize1}, implemented with `bind`.
 *
 * @param {Function} fn - Method to demethodize.
 * @returns {Function} Standalone function.
 */
const demethodize3 =
  (fn) =>
  (...args) =>
    fn.bind(...args)();

module.exports = demethodize1;
module.exports.demethodize2 = demethodize2;
module.exports.demethodize3 = demethodize3;

if (require.main === module) {
  const name = "FUNCTIONAL";
  const map = demethodize1(Array.prototype.map);
  const toUpperCase = demethodize1(String.prototype.toUpperCase);
  const result = map(name, toUpperCase);
  console.log(result);
}
