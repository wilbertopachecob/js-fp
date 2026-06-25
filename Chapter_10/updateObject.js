/**
 * @module Chapter_10/updateObject
 * @see {@link module:src/immutability} — equivalent `updateObject` in `src/immutability.ts`
 */

const deepClone = require("./deepClone");
const deepFreeze = require("./deepFreeze");
const setByPath = require("./setByPath");

/**
 * Returns a new frozen object with one nested value updated.
 *
 * @param {string|Array<string|number>} arr - Path to update.
 * @param {*} value - New value.
 * @param {object} obj - Original object.
 * @returns {object} Deep-cloned, updated, and frozen object.
 * @example
 * updateObject(["d"], 99, { d: 22, m: 9 }); // { d: 99, m: 9 } (frozen)
 */
const updateObject = (arr, value, obj) => {
  const newObject = deepClone(obj);
  setByPath(arr, value, newObject);
  return deepFreeze(newObject);
};

module.exports = updateObject;
