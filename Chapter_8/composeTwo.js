const { flip2 } = require("../Chapter_7/flip");
const pipeTwo = require("./pipeTwo");

const composeTwo =
  (f, g) =>
  (...args) =>
    f(g(...args));

const composeTwoByFlipping = flip2(pipeTwo);

module.exports = composeTwo;
