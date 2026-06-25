/**
 * @module Chapter_4/exercises/betterFibonnacci
 */

/**
 * Tail-recursive fibonacci. Returns the nth value (0-indexed: 0, 1, 1, 2, 3, ...).
 *
 * @param {number} n - Index in the fibonacci sequence.
 * @param {number} [a=0] - Accumulator for the previous value.
 * @param {number} [b=1] - Accumulator for the current value.
 * @returns {number} The nth fibonacci number.
 * @example
 * fib4(6); // 8
 */
const fib4 = (n, a = 0, b = 1) => {
  return n === 0 ? a : fib4(n - 1, b, a + b);
};

module.exports = fib4;

if (require.main === module) {
  console.log(fib4(6));
}
