/**
 * @module Chapter_1/excersises/newCounter
 */

/**
 * Creates a counter function that returns incrementing values starting at 1.
 *
 * @returns {() => number} A function that returns the next count on each call.
 * @example
 * const counter = newCounter();
 * counter(); // 1
 * counter(); // 2
 */
const newCounter = () => {
  let count = 0;
  return () => ++count;
};

module.exports = newCounter;

if (require.main === module) {
  const nc = newCounter();
  console.log(nc()); // 1
  console.log(nc()); // 2
  console.log(nc());
}
