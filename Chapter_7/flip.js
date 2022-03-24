const demethodize = require("../Chapter_6/demethodize");
const curryBind = require("./curryBind");
const partialByClosure = require("./partialByClosure");
const partialCurrying = require("./partialCurrying");

const flip2 = (fn) => (p1, p2) => fn(p2, p1);
const flip3 = (fn) => (p1, p2, p3) => fn(p3, p1, p2);

//ex 1
const myMap = curryBind(flip2(demethodize(Array.prototype.map)));
const makeString = (v) => String(v);

const arr = [1, 2, 3];
const stringify = myMap(makeString);
console.log(stringify(arr));

//ex 2
const sum = (x, y) => x + y;
const reduce = demethodize(Array.prototype.reduce);
const sumAll = partialByClosure(reduce, undefined, sum, 0);
console.log(sumAll(arr));

//ex3
const sumAllPC = partialCurrying(flip3(reduce))(sum, 0);
console.log(sumAllPC(arr));

module.exports = { flip2, flip3 };
