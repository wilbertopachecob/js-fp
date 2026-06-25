/**
 * @module Chapter_10/prism/prism
 * Prisms are like lenses, but for optional or sum-type fields (may not exist on every object).
 * Used to read, set, or delete a branch that might be absent without throwing.
 */

/**
 * Reads a property when present on an object.
 *
 * @param {string} attr - Property name.
 * @param {object} obj - Source object.
 * @returns {*|undefined} Property value or `undefined`.
 * @example
 * getFieldP("a", { a: 1 }); // 1
 */
const getFieldP = (attr, obj) => (obj && attr in obj ? obj[attr] : undefined);

/**
 * Shallow-updates a property when present; otherwise returns a shallow copy.
 *
 * @param {string} attr - Property name.
 * @param {*} newValue - New value.
 * @param {object} obj - Source object.
 * @returns {object} Updated or copied object.
 * @example
 * setFieldP("a", 2, { a: 1, b: 3 }); // { a: 2, b: 3 }
 */
const setFieldP = (attr, newValue, obj) =>
  obj && attr in obj ? { ...obj, [attr]: newValue } : { ...obj };

/**
 * Immutably sets a nested value, sharing unchanged branches (structural sharing).
 *
 * @param {Array<string|number>} path - Path segments.
 * @param {*} newValue - Value to set.
 * @param {object|Array} obj - Source structure.
 * @returns {object|Array} New structure with the update.
 * @example
 * setIn(["d", "f"], "Frijoles", { d: { f: 555, g: 666 } });
 */
const setIn = (path, newValue, obj) => {
  const newObj = Number.isInteger(path[0]) ? [] : {};

  Object.keys(obj).forEach(
    (key) => (newObj[key] = key !== path[0] ? obj[key] : null)
  );

  newObj[path[0]] =
    path.length > 1 ? setIn(path.slice(1), newValue, obj[path[0]]) : newValue;
  return newObj;
};

/**
 * Immutably deletes a nested key, sharing unchanged branches.
 *
 * @param {Array<string|number>} path - Path segments.
 * @param {object|Array} obj - Source structure.
 * @returns {object|Array} New structure without the key at `path`.
 * @example
 * deleteIn(["d", "f"], { d: { f: 555, g: 666 } }); // { d: { g: 666 } }
 */
const deleteIn = (path, obj) => {
  const newObj = Number.isInteger(path[0]) ? [] : {};
  Object.keys(obj).forEach((key) => {
    if (key !== path[0]) {
      newObj[key] = obj[key];
    }
  });
  if (path.length > 1) {
    newObj[path[0]] = deleteIn(path.slice(1), obj[path[0]]);
  }
  return newObj;
};

module.exports = { getFieldP, setFieldP, setIn, deleteIn };

if (require.main === module) {
  const myObj1 = {
    a: 111,
    d: { e: 444, f: 555, g: { h: 666, i: 777 } },
  };
  console.log(setIn(["d", "f"], "Frijoles", myObj1));
}
