/**
 * @module Chapter_2/onlyExecuteOnce
 */

/**
 * Wraps a function so it runs only the first time it is called.
 *
 * @param {(...args: *) => *} fn - Function to run at most once.
 * @returns {(...args: *) => *} Wrapped function.
 */
const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

module.exports = once;
