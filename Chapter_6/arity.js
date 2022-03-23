const arity = (fn, n) =>
  Object.defineProperty((...args) => fn(...args.slice(0, n)), "length", {
    value: n,
  });

module.exports = arity;

const fn = (x, y) => x + y;
console.log(arity(fn, 2).length);
