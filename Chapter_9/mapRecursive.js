const mapRecursive = (arr, fn) =>
  arr.length === 0 ? [] : [fn(arr[0])].concat(arr.slice(1), fn);

module.exports = mapRecursive;
