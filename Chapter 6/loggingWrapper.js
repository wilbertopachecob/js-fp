const addLogging =
  (fn) =>
  (...args) => {
    console.log(
      `starting logging for function ${fn.name} with arguments ${args}`
    );
    const result = fn(...args);
    console.log(
      `ending logging for function ${fn.name} with return value ${result}`
    );
    return result;
  };

module.exports = addLogging;
