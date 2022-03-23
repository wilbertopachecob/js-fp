const not =
  (fn) =>
  (...args) =>
    !fn(...args);

module.exports = not;

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const odd = (elem) => elem % 2;

console.log(arr.filter(odd));
console.log(arr.filter(not(odd)));
