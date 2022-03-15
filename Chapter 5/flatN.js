const flatAll = require("./flatAll");
const range = require("./range");

const flatN = (arr, n) => {
  let result = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem) && n) {
      result = result.concat(flatN(elem, n - 1));
    } else {
      result.push(elem);
    }
  });
  return result;
};

const flatN1 = (arr, n) => {
  if (n === Infinity) {
    return flatAll(arr);
  }
  let result = arr;
  range(0, n).forEach((_) => {
    result = flatOne(result);
  });
  return result;
};

const flatN2 = (arr, n) => {
  if (n === Infinity) {
    return flatAll(arr);
  } else if (n === 1) {
    return flatOne(arr);
  }
  return flatN2(flatOne(arr), n - 1);
};

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9];

console.log(flatN(arr, 2));
console.log(flatN(arr, 3));
console.log(flatN(arr, 4));
