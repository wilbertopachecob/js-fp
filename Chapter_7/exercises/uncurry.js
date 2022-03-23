const curry = require("../curryBind");
const make3 = (a, b, c) => String(100 * a + 10 * b + c);
const make3c = curry(make3);

console.log(make3c(1)(2)(3)); // 123

const remake3 = uncurry(make3c, 3);

console.log(remake3(1, 2, 3)); // 123

function uncurry(fn) {
  return (...args) => args.reduce((acc, next) => acc(next), fn);
}
