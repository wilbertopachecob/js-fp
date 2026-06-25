/**
 * @module Chapter_2/onlyExecuteOnce
 */

// first approach
var billTheUser = ((clicked) => {
  return (some, sales, data) => {
    if (!clicked) {
      clicked = true;
      console.log("Billing the user...");
      // actually bill the user
    }
  };
})(false);

// billTheUser();
// billTheUser();

// offical response

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
