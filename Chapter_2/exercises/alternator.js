/**
 * @module Chapter_2/exercises/alternator
 */

/**
 * Alternates between two functions on each call.
 *
 * @param {(...args: *) => *} f1 - Function called on the 1st, 3rd, ... call.
 * @param {(...args: *) => *} f2 - Function called on the 2nd, 4th, ... call.
 * @returns {(...args: *) => *} Wrapped function that alternates.
 * @example
 * const alternate = alternator(() => console.log("A"), () => console.log("B"));
 * alternate(); // "A"
 * alternate(); // "B"
 * alternate(); // "A"
 */
const alternator = (f1, f2) => {
  let bit = 0;
  return (...args) => {
    !bit ? f1(...args) : f2(...args);
    bit = bit ^ 1;
  };
};

module.exports = alternator;
