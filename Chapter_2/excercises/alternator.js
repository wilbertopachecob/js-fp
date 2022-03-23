const alternator = (f1, f2) => {
  let bit = 0;
  return (...args) => {
    !bit ? f1(...args) : f2(...args);
    bit = bit ^ 1;
  };
};

module.exports = alternator;
