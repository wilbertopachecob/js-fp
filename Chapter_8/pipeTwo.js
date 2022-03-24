const pipeTwo =
  (f, g) =>
  (...args) =>
    f(g(...args));
module.exports = pipeTwo;
