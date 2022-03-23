const thisManyTimes = (fn, n) => {
  let count = 0;
  return (...args) => {
    if (count === n) {
      return;
    }
    fn(...args);
    count++;
  };
};

module.exports = thisManyTimes;
