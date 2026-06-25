const myLogger = (text, fnName, start, end) => {
  console.log(`${fnName} - ${text} - ${end - start}`);
};
const myTimer = () => performance.now();

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
