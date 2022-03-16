const addLogging =
  (fn, logger = console.log) =>
  (...args) => {
    logger(`starting logging for function ${fn.name} with arguments ${args}`);
    const result = fn(...args);
    logger(
      `ending logging for function ${fn.name} with return value ${result}`
    );
    return result;
  };

module.exports = addLogging;
