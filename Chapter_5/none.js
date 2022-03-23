const none = (arr, fn) => arr.every((v) => !fn(v));
const none1 = (arr, fn) => arr.reduce((acc, next) => acc && !fn(next), true);

const fn = (v) => v === 1;
const arr = [2, 1, 1, 1];
const arr2 = [2, 3, 5, 6];
console.log(none1(arr2, fn));
console.log(none(arr2, fn));
