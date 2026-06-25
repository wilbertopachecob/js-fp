/**
 * @module Chapter_10/deepClone
 * @see {@link module:src/immutability} — equivalent `deepClone` in `src/immutability.ts`
 */

/**
 * Creates a deep copy of objects and arrays.
 *
 * @param {*} obj - Value to clone.
 * @returns {*} Deep copy of `obj`.
 * @example
 * const copy = deepClone({ a: { b: 1 } });
 * copy.a.b = 2; // original unchanged
 */
const deepClone = (obj) => {
  let aux = obj;
  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(
      (prop) => (aux[prop] = deepClone(obj[prop]))
    );
  }
  return aux;
};

module.exports = deepClone;
