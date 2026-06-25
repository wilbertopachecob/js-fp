/**
 * @module Chapter_10/setByPath
 * @see {@link module:src/immutability} — equivalent `setByPath` in `src/immutability.ts`
 */

const getPath = require("./getPath");

/**
 * Sets a nested value on an object, creating missing objects or arrays when needed.
 *
 * @param {string|Array<string|number>} path - Path to update.
 * @param {*} value - Value to set.
 * @param {object} obj - Target object (mutated).
 * @returns {object} The same `obj` reference.
 * @example
 * setByPath(["a", "b"], 42, {}); // { a: { b: 42 } }
 */
const setByPath = (path, value, obj) => {
  path = getPath(path);
  if (!(path[0] in obj)) {
    obj[path[0]] =
      path.length === 1 ? null : Number.isInteger(path[1]) ? [] : {};
  }
  if (path.length > 1) {
    return setByPath(path.slice(1), value, obj[path[0]]);
  }
  obj[path[0]] = value;
  return obj;
};

module.exports = setByPath;
