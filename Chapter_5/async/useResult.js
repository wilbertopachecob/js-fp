/**
 * @module useResult
 */

/**
 * Logs a value with the current timestamp.
 *
 * @param {*} x - Value to log.
 * @returns {void}
 * @example
 * useResult(42);
 */
const useResult = (x) => console.log(new Date(), x);

module.exports = useResult;
