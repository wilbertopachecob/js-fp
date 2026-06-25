/**
 * @module Chapter_10/deepFreeze
 * @see {@link module:src/immutability} — equivalent `deepFreeze` in `src/immutability.ts`
 */

/**
 * Freezes an object and every nested object inside it.
 *
 * @param {object} obj - Object to freeze.
 * @returns {object} The same frozen object.
 * @example
 * const frozen = deepFreeze({ a: { b: 1 } });
 * Object.isFrozen(frozen.a); // true
 */
const deepFreeze = (obj) => {
  if (obj && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(
      (prop) => typeof obj[prop] === "object" && deepFreeze(obj[prop])
    );
  }
  return obj;
};

module.exports = deepFreeze;
