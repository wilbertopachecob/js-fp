const reverseR = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const reverseLoop = (arr, i = 0) => {
    if (i < Math.ceil(arr.length / 2)) {
      const j = arr.length - 1 - i;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return reverseLoop(arr, i + 1);
    }
    return arr;
  };
  return reverseLoop(arr);
};

let arr = [1, 2, 3, 4, 5];
console.log(reverseR(arr));
