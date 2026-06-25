/**
 * @module Chapter_10/getPath
 * @see {@link module:src/immutability} — equivalent `getPath` in `src/immutability.ts`
 */

/**
 * Turns a path string or array into path segments.
 *
 * @param {string|Array<string|number>} path - Dot-separated path or segment array.
 * @returns {string[]} Path segments.
 * @example
 * getPath("user.name"); // ["user", "name"]
 * getPath(["o", "f", "a"]); // ["o", "f", "a"]
 */
const getPath = (path) => {
  if (!(Array.isArray(path) || typeof path === "string")) {
    throw new Error("invalid type for path. Accepted types: Array | String");
  }
  path = Array.isArray(path) ? path : path.split(".");
  return path;
};

module.exports = getPath;
