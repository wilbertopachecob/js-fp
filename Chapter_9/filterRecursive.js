const filterRecursive = (orig, cb) => {
  const filterLoop = (arr, i) => {
    if (arr.length === 0) {
      return [];
    }
    if (!(0 in arr)) {
      return [].concat(filterLoop(arr.slice(1), i + 1));
    } else if (cb(arr[0], i, orig)) {
      return [arr[0]].concat(filterLoop(arr.slice(1), i + 1));
    }
    return [].concat(filterLoop(arr.slice(1), i + 1));
  };
  return filterLoop(orig, 0);
};

// const odd = (x) => x % 2;
// const arr = [1, 2, 3, 4];
// console.log(filterRecursive(arr, odd));

module.exports = filterRecursive;
