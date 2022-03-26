const demethodize = require("../../Chapter_6/demethodize");
const curry = require("../../Chapter_7/curryBind");
const { flip2 } = require("../../Chapter_7/flip");
const pipeline2 = require("../pipeline");

const toLowerCase = demethodize(String.prototype.toLowerCase);
let map = demethodize(Array.prototype.map);
map = flip2(map);
map = curry(map);
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const splitWords = (s) => s.split(" ");
const arrayToString = (arr) => arr.join(" ");
const headline = (s) =>
  pipeline2(toLowerCase, splitWords, map(capitalize), arrayToString)(s);

console.log(headline("Alice's ADVENTURES in WoNdErLaNd"));
