const findOptimum = (fn) => (arr) => arr.reduce(fn);

const findMaximum = findOptimum((x, y) => (x > y ? x : y));
const findMinimum = findOptimum((x, y) => (x < y ? x : y));

const findMaximum2 = findOptimum((x, y) => Math.max(x, y));
const findMinimum2 = findOptimum((x, y) => Math.min(x, y));

const myArray = [22, 9, 60, 12, 4, 56];

console.log(findMaximum(myArray));
console.log(findMinimum(myArray));
