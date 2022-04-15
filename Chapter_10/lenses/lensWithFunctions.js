const getField = require("../../Chapter_6/getField");
let setField = require("../../Chapter_6/setField");
const partialCurrying = require("../../Chapter_7/partialCurrying2");
setField = partialCurrying(setField);

const lensWithFunctions = (getter, setter) => (fn) => (obj) =>
  fn(getter(obj)).map((value) => setter(value)(obj));

const lensProp = (attr) => lensWithFunctions(getField(attr), setField(attr));

class Constant {
  constructor(v) {
    this.value = v;
    this.map = () => this;
  }
}

const view = partialCurrying(
  (lensAttr, obj) => lensAttr((x) => new Constant(x))(obj).value
);

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

// console.log(view(lensProp("user"), author));

class Variable {
  constructor(v) {
    this.value = v;
    this.map = (fn) => new Variable(fn(v));
  }
}

const set = partialCurrying(
  (lensAttr, newValue, obj) => lensAttr(() => new Variable(newValue))(obj).value
);

// console.log(set(lensProp("user"), "FEFK", author));

const over = partialCurrying(
  (lensAttr, mapFn, obj) => lensAttr((x) => new Variable(mapFn(x)))(obj).value
);

module.exports = {
  lensWithFunctions,
  lensProp,
  view,
  set,
  over,
};
