const deepClone = require("./deepClone");
const deepFreeze = require("./deepFreeze");
const getPath = require("./getPath");

const getByPath = (path, obj) => {
  path = getPath(path);
  const loop = (arr, obj) => {
    if (arr[0] in obj) {
      return arr.length > 1
        ? getByPath(arr.slice(1), obj[arr[0]])
        : deepClone(obj[arr[0]]);
    }
    return undefined;
  };
  return loop(path, obj);
};

module.exports = getByPath;

// let myObj3 = {
//   d: 22,
//   m: 9,
//   o: { c: "MVD", i: "UY", f: { a: 56 } },
// };

// deepFreeze(myObj3);

// console.log(getByPath(["d"], myObj3)); // 22
// console.log(getByPath(["o"], myObj3)); // {c: "MVD", i: "UY", f: {a: 56}}
// console.log(getByPath(["o", "c"], myObj3)); // "MVD"
// console.log(getByPath("o.f.a", myObj3)); // 56
