/**
 * @module loggingWrapper
 */

/**
 * Logs when a function starts, finishes, or throws an error.
 *
 * @param {Function} fn - Function to wrap.
 * @param {Function} [logger=console.log] - Logger function.
 * @returns {Function} Wrapped function with logging.
 * @example
 * const logged = addLogging((x) => x * 2, console.log);
 * logged(5); // logs start and return value
 */
const addLogging =
  (fn, logger = console.log) =>
  (...args) => {
    logger(`starting logging for function ${fn.name} with arguments ${args}`);
    try {
      const result = fn(...args);
      logger(
        `ending logging for function ${fn.name} with return value ${result}`
      );
      return result;
    } catch (error) {
      logger(`ending logging for function ${fn.name}: threw error ${error}`);
      throw error;
    }
  };

module.exports = addLogging;
