const myMap = (arr, fn) =>
  arr.reduce((acc, next) => {
    acc.push(fn(next));
    return acc;
  }, []);

module.exports = myMap;
