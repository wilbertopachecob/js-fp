const demethodize = require("../Chapter_6/demethodize.js");
const pipeline = require("./pipeline");
const tee = require("./tee");
const pipeTwo = require("./pipeTwo");
const composeTwo = require("./composeTwo");

const myCompose =
  (...fns) =>
  (...args) =>
    fns.reverse().reduce((acc, fn) => fn(acc), fns.shift()(...args));

const compose = (...fns) => pipeline(...fns.reverse());

const compose2 = (...fns) => fns.reduceRight(pipeTwo);
const compose3 = (...fns) => fns.reduce(composeTwo);

module.exports = compose;

// ex
const removeNonAlphanumeric = (s) => s.replace(/[^a-z]/gi, " ");
const turnStringIntoArray = (s) => s.trim().split(/\s+/);
const toUppercase = demethodize(String.prototype.toUpperCase);
const arrayToSet = (arr) => new Set(arr);
const setToList = (set) => Array.from(set).sort();

const getUniqueWords = compose3(
  setToList,
  arrayToSet,
  turnStringIntoArray,
  tee,
  toUppercase,
  removeNonAlphanumeric
);

const GETTYSBURG_1_2 = `Four score and seven years ago
our fathers brought forth on this continent, a new nation,
conceived in liberty, and dedicated to the proposition
that all men are created equal. Now we are engaged in a
great civil war, testing whether that nation, or any
nation so conceived and so dedicated, can long
endure.`;

console.log(getUniqueWords(GETTYSBURG_1_2));
