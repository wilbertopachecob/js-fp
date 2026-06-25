/**
 * @module Chapter_2/exercises/thisManyTimes
 */

/**
 * Wraps a function so it runs at most `n` times.
 *
 * @param {(...args: *) => *} fn - Function to limit.
 * @param {number} n - Maximum number of executions.
 * @returns {(...args: *) => *} Wrapped function.
 * @example
 * const twice = thisManyTimes((x) => console.log(x), 2);
 * twice("a"); // "a"
 * twice("b"); // "b"
 * twice("c"); // (no output)
 */
const thisManyTimes = (fn, n) => {
  let count = 0;
  return (...args) => {
    if (count === n) {
      return;
    }
    fn(...args);
    count++;
  };
};

module.exports = thisManyTimes;
