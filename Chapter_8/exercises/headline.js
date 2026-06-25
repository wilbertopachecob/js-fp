/**
 * @module Chapter_8/exercises/headline
 * Pipeline that title-cases each word in a headline string.
 * @see src/composition.ts
 *
 * @param {string} text - Input headline.
 * @returns {string} Title-cased headline.
 * @example
 * headline("Alice's ADVENTURES in WoNdErLaNd");
 * // "Alice's Adventures In Wonderland"
 */
const demethodize = require("../../Chapter_6/demethodize");
const curry = require("../../Chapter_7/curryBind");
const { flip2 } = require("../../Chapter_7/flip");
const pipeline = require("../pipeline");

const toLowerCase = demethodize(String.prototype.toLowerCase);
const map = pipeline(demethodize, flip2, curry)(Array.prototype.map);
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const splitWords = (s) => s.split(" ");
const arrayToString = (arr) => arr.join(" ");
const headline = pipeline(
  toLowerCase,
  splitWords,
  map(capitalize),
  arrayToString
);

if (require.main === module) {
  console.log(headline("Alice's ADVENTURES in WoNdErLaNd"));
}

module.exports = headline;
