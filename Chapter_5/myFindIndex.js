const myFindIndex = (arr, fn) =>
  arr.reduce((acc, next, i) => (acc === -1 && fn(next) ? i : acc), -1);
