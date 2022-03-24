const curry = require("../Chapter_7/curryBind2.js");
const tap = curry((fn, x) => (fn(x), x));
module.exports = tap;

// console.log(tap(console.log)(2));
