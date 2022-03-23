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
