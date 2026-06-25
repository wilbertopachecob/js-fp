/**
 * @module Chapter_2/onceAndAfter
 */

/**
 * Runs `first` only once. Every later call runs `next`.
 *
 * @param {(...args: *) => *} first - Function to run on the first call.
 * @param {(...args: *) => *} next - Function to run on every later call.
 * @returns {(...args: *) => *} Wrapped function.
 * @example
 * const fn = onceAndAfter(() => console.log("once"), () => console.log("again"));
 * fn(); // "once"
 * fn(); // "again"
 */
const onceAndAfter = (fn, g) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    } else {
      g(...args);
    }
  };
};

module.exports = onceAndAfter;
