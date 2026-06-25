/**
 * @module Chapter_8/tee
 * Logs a value for debugging, then returns it unchanged.
 * @see src/composition.ts
 *
 * @param {*} arg - Value to inspect.
 * @param {Function} [logger=console.log.bind(console)] - Logging function.
 * @returns {*} The original value.
 * @example
 * tee(5); // logs 5, returns 5
 */
const tap = require("./tap");

const tee = (arg, logger = console.log.bind(console)) => (logger(arg), arg);
const tee2 = tap(console.log);

module.exports = tee;
module.exports.tee2 = tee2;
