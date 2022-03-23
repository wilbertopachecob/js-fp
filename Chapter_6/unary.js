const arity = require("./arity");
const unary =
  (fn) =>
  (...args) =>
    fn(args[0]);
const unary2 = (fn) => arity(fn, 1);
