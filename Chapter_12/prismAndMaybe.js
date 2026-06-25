/**
 * @module Chapter_12/prismAndMaybe
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
 * Previews a value through a prism lens, returning a `Maybe`.
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
