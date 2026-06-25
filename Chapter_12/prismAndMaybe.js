/**
 * @module Chapter_12/prismAndMaybe
 * Combines prisms (optional focused views) with Maybe (safe missing-value handling).
 */

const Maybe = require("./maybe");
const curry = require("../Chapter_7/partialCurrying2");

/**
 * Constant prism functor wrapping a `Maybe`.
 */
class ConstantP {
  constructor(v) {
    this.value = Maybe.of(v);
    this.map = () => this;
  }
}

/**
 * Previews a value through a prism, returning a Maybe (Just if present, Nothing if not).
 *
 * @param {Function} prismAttr - Prism lens function.
 * @param {object} obj - Target object.
 * @returns {Maybe} Focused value wrapped in `Maybe`.
 * @example
 * preview((fn) => (obj) => fn(obj.x), { x: 1 }).toString(); // "Just(1)"
 */
const preview = curry(
  (prismAttr, obj) => prismAttr((x) => new ConstantP(x))(obj).value
);

module.exports = { ConstantP, preview, Maybe };
