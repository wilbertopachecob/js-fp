/**
 * @module Chapter_8/tap
 * Runs a side effect, then returns the same value.
 * @see src/composition.ts
 *
 * @param {Function} fn - Side-effect function.
 * @param {*} x - Value to pass through.
 * @returns {*} The original value.
 * @example
 * tap(console.log, 5); // logs 5, returns 5
 */
const curry = require("../Chapter_7/curryBind2.js");
const tap = curry((fn, x) => (fn(x), x));

module.exports = tap;
