const flatAll = (arr) =>
  arr.reduce(
    (acc, next) => acc.concat(Array.isArray(next) ? flatAll(next) : next),
    []
  );

module.exports = flatAll;
