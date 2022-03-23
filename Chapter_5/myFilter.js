const myFilter = (arr, fn) =>
  arr.reduce((acc, next) => {
    if (fn(next)) {
      acc.push(next);
    }
    return acc;
  }, []);
