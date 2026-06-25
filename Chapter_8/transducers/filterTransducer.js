const filterTransducer = (predicate) => (reducer) => (acc, val) =>
  predicate(val) ? reducer(acc, val) : acc;

module.exports = filterTransducer;
