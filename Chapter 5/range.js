const range = (start = 0, end, step = 1) => {
  if (start <= 0 && end === undefined) {
    return [0];
  }
  return new Array(Math.floor(end / step))
    .fill(0)
    .reduce(
      (acc, _, i) =>
        i === 0
          ? [start]
          : acc[acc.length - 1] + step === end
          ? acc
          : acc.concat(acc[acc.length - 1] + step),
      []
    );
};

console.log(range(1, 10, 2));
console.log(range(1, 5));
console.log(range(0, 20, 5));
console.log(range(0));

module.exports = range;
