const mapRecursive = (arr, fn, i = 0, result = arr) =>
  result.length === 0
    ? []
    : [fn(result[0], i, arr)].concat(
        mapRecursive(arr, fn, ++i, result.slice(1))
      );

let aaa = [1, 2, 4, 5, 7];
const timesTen = (x) => x * 10;
// console.log(aaa.map(timesTen)); // [10, 20, 40, 50, 70]
// console.log(mapRecursive(aaa, timesTen));

//avoiding user to mess up with arguments
const mapRecursive2 = (orig, cb) => {
  const mapLoop = (arr, i) =>
    arr.length === 0
      ? []
      : [cb(arr[0], i, orig)].concat(mapLoop(arr.slice(1), i + 1));

  return mapLoop(orig, 0);
};
// console.log(mapRecursive2(aaa, timesTen));

//respecting empty values
const mapRecursive3 = (orig, cb) => {
  const mapLoop = (arr, i) => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      return [,].concat(mapLoop(arr.slice(1), i + 1));
    }
    return [cb(arr[0], i, orig)].concat(mapLoop(arr.slice(1), i + 1));
  };
  return mapLoop(orig, 0);
};

console.log(mapRecursive3(aaa, timesTen));
console.log(mapRecursive3([1, 2, , , 5], timesTen));
console.log([1, 2, , , 5].map(timesTen));

module.exports = mapRecursive3;
