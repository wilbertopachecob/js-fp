const range = require("../Chapter_5/range.js");

const partialByEval = (fn, ...args) =>
  eval(
    `(${range(0, fn.length)
      .map((x) => (args[x] === undefined ? `x${x}` : null))
      .filter((x) => !!x)
      .join(",")}) => ${fn.name}(${range(0, fn.length)
      .map((x) => (args[x] === undefined ? `x${x}` : args[x]))
      .join(",")})`
  );

module.exports = partialByEval;
