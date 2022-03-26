const pipeTwo =
  (f, g) =>
  (...args) =>
    g(f(...args));

module.exports = pipeTwo;
