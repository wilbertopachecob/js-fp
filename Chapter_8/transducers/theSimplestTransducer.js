const concat = (acc, val) => (acc.push(val), acc);
const theSimplestTransducer = (reducer) => (acc, val) => reducer(acc, val);

const reducingFn = theSimplestTransducer(concat);
const result = [1, 2, 3, 4].reduce(reducingFn, []);
console.log(result);
