const compose = require("../compose");

const map = (fn) => (step) => (acc, next) => step(acc, fn(next));
const filter = (predicate) => (step) => (acc, next) =>
  predicate(next) ? step(acc, next) : acc;

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((y, f) => f(y), x);

const isEven = (n) => n % 2 === 0;
const double = (n) => n * 2;

const doubleEvens = compose(filter(isEven), map(double));
const arrayConcat = (a, c) => a.concat([c]);
const xform = doubleEvens(arrayConcat);
const result = [1, 2, 3, 4, 5, 6].reduce(xform, []);

console.log(result);
