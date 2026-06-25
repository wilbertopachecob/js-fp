/**
 * @module binaryOp
 */

/**
 * Returns a binary comparison function for the given operator.
 *
 * @param {">" | "<"} op - Comparison operator.
 * @returns {Function} Binary comparison function.
 * @example
 * binaryOp(">")(3, 2); // true
 */
const binaryOp = (op) => {
  switch (op) {
    case ">":
      return (x, y) => x > y;
    case "<":
      return (x, y) => x < y;
  }
};

module.exports = binaryOp;
