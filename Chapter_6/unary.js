/**
 * @module unary
 */

const arity = require("./arity");

/**
 * Wraps a function so only the first argument is passed through.
 *
 * @param {Function} fn - Function to wrap.
 * @returns {Function} Unary wrapper around `fn`.
 * @example
 * ["1", "2", "3"].map(unary(parseInt)); // [1, 2, 3]
 */
const unary =
  (fn) =>
  (...args) =>
    fn(args[0]);

/**
 * Same as {@link unary}, implemented with {@link arity}.
 *
 * @param {Function} fn - Function to wrap.
 * @returns {Function} Unary wrapper around `fn`.
 * @example
 * unary2(parseInt).length; // 1
 */
const unary2 = (fn) => arity(fn, 1);

module.exports = unary;
module.exports.unary2 = unary2;
