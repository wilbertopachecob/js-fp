const flatOne = (arr) => [].concat(...arr);
const flatOne2 = (arr) => arr.reduce((acc, next) => acc.concat(next));

const arr = [[-1, 0], 1, 2, 3, [4, 5, [6, 7]]];

console.log(flatOne(arr));
console.log(flatOne2(arr));
