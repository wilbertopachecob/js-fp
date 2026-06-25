const mapTransducer = (transformFn) => (reducer) => (acc, val) =>
  reducer(acc, transformFn(val));

module.exports = mapTransducer;
