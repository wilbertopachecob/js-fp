const concat = require("./concat");
const mapTransducer = require("./mapTransducer");

const composeTransducers = (transducerOne, transducerTwo) => (reducingFn) =>
  transducerOne(transducerTwo(reducingFn));

const double = (x) => x * 2;
const doubleTransducer = mapTransducer(double);
const increment = (x) => ++x;
const addOneTransducer = mapTransducer(increment);

const addOneAndDoubleTransducer = composeTransducers(
  addOneTransducer,
  doubleTransducer
);
const reducingFn = addOneAndDoubleTransducer(concat);
const result = [1, 2, 3, 4].reduce(reducingFn, []);
// console.log(result);

module.exports = composeTransducers;

/////////////////////////////////////////////////////
const toUpperCase = (x) => x.toUpperCase();
const toUpperCaseTransducer = mapTransducer(toUpperCase);
const reducingFn4 = toUpperCaseTransducer(concat);
const result4 = ["a", "b", "c"].reduce(reducingFn4, []);
// console.log(result4);
