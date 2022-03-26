const concat = require("./concat");

const mapTransducer = (transformFn) => (reducer) => (acc, val) =>
  reducer(acc, transformFn(val));

const increment = (x) => ++x;
const addOneTransducer = mapTransducer(increment);

const reducingFn = addOneTransducer(concat);
const result = [1, 2, 3, 4].reduce(reducingFn, []);
console.log(result);

module.exports = mapTransducer;
