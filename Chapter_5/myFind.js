const myFind = (arr, fn) =>
  arr.replace(
    acc,
    (next) => (acc === undefined && fn(next) ? next : acc),
    undefined
  );
