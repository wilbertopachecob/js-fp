const everyR = (arr, fn) => {
  const everyLoop = (arr) => {
    if (arr.length === 0) {
      return true;
    }
    if (fn(arr[0])) {
      return everyLoop(arr.slice(1));
    }
    return false;
  };
  return everyLoop(arr);
};

module.exports = everyR;

// const odd = (x) => x % 2;
// console.log(everyR([1, 2, 5, 7], odd));
