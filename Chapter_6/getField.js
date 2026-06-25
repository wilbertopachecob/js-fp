/**
 * @module getField
 */

/**
 * Returns a function that reads a property from an object.
 *
 * @param {string} attr - Property name to read.
 * @returns {Function} Getter function.
 * @example
 * getField("name")({ name: "Ada" }); // "Ada"
 */
const getField = (attr) => (obj) =>
  obj === null || obj === undefined ? obj : obj[attr];

module.exports = getField;
