const reduceRecursive = (arr, fn, initialValue) => {
  const recursiveLoop = (acc, next, i = 0) => {
    acc = fn(acc, next);
    if (i === arr.length - 1) {
      return acc;
    }
    return recursiveLoop(acc, arr[i + 1], i + 1);
  };
  return recursiveLoop(initialValue, arr[0]);
};

// let arr = [1, 2, 3, 4];
// const fn = (acc, next) => acc + next;
// console.log(reduceRecursive(arr, fn, 0));

const reduceR = (orig, cb, accum) => {
  const reduceLoop = (arr, i) => {
    return arr.length == 0
      ? accum
      : reduceR(
          arr.slice(1),
          cb,
          !(0 in arr) ? accum : cb(accum, arr[0], i, orig),
          i + 1,
          orig
        );
  };
  return reduceLoop(orig, 0);
};

module.exports = reduceR;

// let bbb = [1, 2, , 5, 7, 8, 10, 21, 40];
// console.log(bbb.reduce((x, y) => x + y, 0)); // 94
// console.log(reduceR(bbb, (x, y) => x + y, 0));
