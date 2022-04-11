const findRecursive = (arr, fn) => {
  if (arr.length === 0) {
    return -1;
  }
  return fn(arr[0]) ? arr[0] : findRecursive(arr.slice(1), fn);
};

module.exports = findRecursive;

// let aaa = [1, 12, , , 5, 22, 9, 60];
// const isTwentySomething = (x) => 20 <= x && x <= 29;
// console.log(findRecursive(aaa, isTwentySomething)); // 22
