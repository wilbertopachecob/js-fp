/**
 * @module Chapter_9/fibonacci
 * @see {@link module:src/recursion} — equivalent `fibonacci` in `src/recursion.ts`
 */

/**
 * Classic recursive Fibonacci. Returns 1 for n ≤ 1.
 *
 * @param {number} num - Index in the Fibonacci sequence.
 * @returns {number} Fibonacci value at `num`.
 * @example
 * fibonacci(5); // 8
 * fibonacci(0); // 1
 */
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;

if (require.main === module) {
  console.log(fibonacci(10));
}
