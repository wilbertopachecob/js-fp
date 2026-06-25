/**
 * @module generateAlphabet
 */

const range = require("./range");

/**
 * Uppercase letters A through Z.
 *
 * @type {string[]}
 * @example
 * generateAlphabet[0]; // "A"
 * generateAlphabet.length; // 26
 */
const generateAlphabet = range("A".charCodeAt(0), "Z".charCodeAt(0) + 1).map(
  (num) => String.fromCharCode(num)
);

module.exports = generateAlphabet;
