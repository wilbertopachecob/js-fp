const onceAndAfter = (fn, g) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    } else {
      g(...args);
    }
  };
};

module.exports = onceAndAfter;
