/**
 * @module addTiming
 */

const myLogger = (text, fnName, start, end) => {
  console.log(`${fnName} - ${text} - ${end - start}`);
};
const myTimer = () => performance.now();

/**
 * Logs how long a function takes to run.
 *
 * @param {Function} fn - Function to wrap.
 * @param {Function} [timer=myTimer] - Returns a timestamp in milliseconds.
 * @param {Function} [logger=myLogger] - Logs timing information.
 * @returns {Function} Wrapped function with timing logs.
 * @example
 * const timed = addTiming((n) => n * 2);
 * timed(5);
 */
const addTiming =
  (fn, timer = myTimer, logger = myLogger) =>
  (...args) => {
    const start = timer();
    try {
      const result = fn(...args);
      logger("normal exit", fn.name, start, timer());
      return result;
    } catch (error) {
      logger("exception thrown", fn.name, start, timer());
      throw error;
    }
  };

module.exports = addTiming;
