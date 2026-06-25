/**
 * @module calculateFibCalls
 */

/**
 * Counts how many times the recursive Fibonacci function is invoked.
 *
 * @param {number} num - Fibonacci index to compute.
 * @returns {number} Total number of recursive calls made.
 * @example
 * calculateFibCalls(6); // 25
 */
const calculateFibCalls = (num) => {
  let calc = 0;
  const fibonacci = (num) => {
    calc++;
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  fibonacci(num);
  return calc;
};

module.exports = calculateFibCalls;

if (require.main === module) {
  console.log(calculateFibCalls(6));
}
