/**
 * @module isNegative
 */

const binaryOp = require("./binaryOp");
const binaryRigthOp = (op, x) => (y) => binaryOp(op)(x, y);

/**
 * Returns `true` when a number is less than zero.
 *
 * @param {number} n - Number to test.
 * @returns {boolean} `true` if `n` is negative.
 * @example
 * isNegative(-3); // true
 */
const isNegative = binaryRigthOp(">", 0);

module.exports = isNegative;

if (require.main === module) {
  console.log(isNegative(-3));
}
