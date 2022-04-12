const someR = (arr, fn) => {
  const someLoop = (arr) => {
    if (arr.length === 0) {
      return false;
    }
    if (fn(arr[0])) {
      return true;
    }
    return someLoop(arr.slice(1));
  };
  return someLoop(arr);
};

module.exports = someR;

// const odd = (x) => x % 2;
// console.log(someR([1, 2, 3, 5], odd));
// console.log(someR([0, 2], odd));
