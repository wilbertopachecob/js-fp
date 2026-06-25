/**
 * @module Chapter_1/excersises/factorial
 */

/**
 * Computes n! recursively. Returns -1 for negative inputs.
 *
 * @param {number} n - Non-negative integer (negative returns -1).
 * @returns {number} Factorial of n, or -1 if n is negative.
 * @example
 * factorial(5); // 120
 */
const factorial = (n) => {
  if (n < 0) {
    return -1;
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};

module.exports = factorial;

if (require.main === module) {
  console.log(factorial(5));
}
