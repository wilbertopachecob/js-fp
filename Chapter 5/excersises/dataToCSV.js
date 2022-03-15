let myData = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const dataToCsv = (arr) =>
  arr.reduce((acc, next) => acc.concat(next.join(",").concat("\\n")), "");

console.log(dataToCsv(myData));
