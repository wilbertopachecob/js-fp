const range = require("Chapter 5\range.js");

const curryByEval = (fn, len = fn.length) =>
  eval(
    `${range(0, len)
      .map((n) => `x${n}`)
      .join("=>")} ${fn.name}(${range(0, len)
      .map((n) => `x${n}`)
      .join(",")})`
  );
// first one doen not work if function have no name so
const curryByEval2 = (fn, len = fn.length) =>
  eval(
    `${range(0, len)
      .map((n) => `x${n}`)
      .join("=>")} (${fn.toString()})(${range(0, len)
      .map((n) => `x${n}`)
      .join(",")})`
  );

module.exports = { curryByEval, curryByEval2 };
