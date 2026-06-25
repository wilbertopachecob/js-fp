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

module.exports = mapRecursive3;
