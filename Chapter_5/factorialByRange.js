/**
 * @module factorialByRange
 */

const range = require("./range");

/**
 * Computes `n!` using {@link range} and `reduce`.
 *
 * @param {number} n - Non-negative integer.
 * @returns {number} Factorial of `n`.
 * @example
 * factorialByRange(5); // 120
 */
const factorialByRange = (n) => range(1, n + 1).reduce((x, y) => x * y, 1);

module.exports = factorialByRange;
