const concat = require("./concat");

const filterTransducer = (predicate) => (reducer) => (acc, val) =>
  predicate(val) ? reducer(acc, val) : acc;

const odd = (x) => x % 2;

const isOddTransducer = filterTransducer(odd);
const reducingFn = isOddTransducer(concat);
const result = [1, 2, 3, 4].reduce(reducingFn, []);

console.log(result);
