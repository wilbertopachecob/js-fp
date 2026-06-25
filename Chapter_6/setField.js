/**
 * @module setField
 */

/**
 * Returns a copy of an object with one field updated.
 *
 * @param {string} attr - Property name to set.
 * @param {*} value - Value to assign.
 * @returns {Function} Function that updates the field on an object.
 * @example
 * setField("age", 30)({ name: "Ada" }); // { name: "Ada", age: 30 }
 */
const setField = (attr, value) => (obj) =>
  obj === null || obj === undefined ? obj : { ...obj, [attr]: value };

module.exports = setField;
