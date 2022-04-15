let setField = require("../../Chapter_6/setField");
const getField = require("../../Chapter_6/getField");
const curry = require("../../Chapter_7/curryBind2");
setField = curry(setField);

const lensWithObj = (getter, setter) => ({
  getter,
  setter,
});

const lensProp = (attr) => lensWithObj(getField(attr), setField(attr));

const view = curry((lens, obj) => lens.getter(obj));

const author = {
  user: "fkereki",
  name: {
    first: "Federico",
    middle: "",
    last: "Kereki",
  },
  books: [
    { name: "Google Web Toolkit", year: 2010 },
    { name: "Functional Programming", year: 2017 },
    { name: "Javascript Cookbook", year: 2018 },
  ],
};

// const lens = lensProp("user");

// console.log(view(lens)(author));

const set = curry((lens, newValue, obj) => lens.setter(newValue)(obj));

// console.log(set(lens)("Wilberto")(author));

const over = curry((lens, mapFn, obj) =>
  lens.setter(mapFn(lens.getter(obj)))(obj)
);

// console.log(over(lens)((s) => s.repeat(3))(author));

const composeTwoLenses = (lens1, lens2) => ({
  getter: (obj) => lens2.getter(lens1.getter(obj)),
  setter: curry((newValue, obj) =>
    lens1.setter(lens2.setter(newValue, lens1.getter(obj)), obj)
  ),
});

module.exports = {
  lensWithObj,
  lensProp,
  view,
  set,
  over,
  composeTwoLenses,
};

// const deepObject = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: {
//       f: 6,
//       g: { i: 9, j: { k: 11 } },
//       h: 8,
//     },
//   },
// };

// const lC = lensProp("c");
// const lE = lensProp("e");
// const lClE = composeTwoLenses(lC, lE);

// console.log(view(lClE)(deepObject));
