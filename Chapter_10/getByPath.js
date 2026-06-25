/**
 * @module Chapter_10/getByPath
 * @see {@link module:src/immutability} — equivalent `getByPath` in `src/immutability.ts`
 */

const deepClone = require("./deepClone");
const getPath = require("./getPath");

/**
 * Reads a nested value without changing the original object.
 *
 * @param {string|Array<string|number>} path - Path to the value.
 * @param {object} obj - Source object.
 * @returns {*|undefined} Cloned value at path, or `undefined` if missing.
 * @example
 * getByPath(["user", "name"], { user: { name: "Ada" } }); // "Ada"
 */
const getByPath = (path, obj) => {
  path = getPath(path);
  const loop = (arr, current) => {
    if (arr[0] in current) {
      return arr.length > 1
        ? getByPath(arr.slice(1), current[arr[0]])
        : deepClone(current[arr[0]]);
    }
    return undefined;
  };
  return loop(path, obj);
};

module.exports = getByPath;
