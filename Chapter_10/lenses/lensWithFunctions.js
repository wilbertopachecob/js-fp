/**
 * @module Chapter_10/lenses/lensWithFunctions
 * Lenses are focused "windows" into part of a nested object.
 * They let you get, set, or update one field without manually spreading/copying the rest.
 */

const getField = require("../../Chapter_6/getField");
let setField = require("../../Chapter_6/setField");
const partialCurrying = require("../../Chapter_7/partialCurrying2");
setField = partialCurrying(setField);

/**
 * Functor `Constant` — ignores `map`, keeps the original value.
 *
 * @template T
 */
class Constant {
  constructor(v) {
    this.value = v;
    this.map = () => this;
  }
}

/**
 * Functor `Variable` — maps over the wrapped value.
 *
 * @template T
 */
class Variable {
  constructor(v) {
    this.value = v;
    this.map = (fn) => new Variable(fn(v));
  }
}

/**
 * Builds a functional lens from getter and setter.
 * A lens pairs "how to read" and "how to write" one piece of data inside a larger structure.
 *
 * @param {Function} getter - `(obj) => value`
 * @param {Function} setter - Curried `(value) => (obj) => newObj`
 * @returns {Function} `(fn) => (obj) => result`
 * @example
 * lensWithFunctions(getField("x"), setField("x"))((v) => v.map((n) => n + 1));
 */
const lensWithFunctions = (getter, setter) => (fn) => (obj) =>
  fn(getter(obj)).map((value) => setter(value)(obj));

/**
 * Functional lens focused on a single property.
 *
 * @param {string} attr - Property name.
 * @returns {Function} Lens function.
 * @example
 * view(lensProp("user"), { user: "Ada" }); // "Ada"
 */
const lensProp = (attr) => lensWithFunctions(getField(attr), setField(attr));

/**
 * Reads the focus using a `Constant` functor.
 *
 * @param {Function} lensAttr - Lens from {@link lensProp}.
 * @param {object} obj - Target object.
 * @returns {*} Focused value.
 * @example
 * view(lensProp("user"), { user: "Ada" }); // "Ada"
 */
const view = partialCurrying(
  (lensAttr, obj) => lensAttr((x) => new Constant(x))(obj).value
);

/**
 * Sets the focus using a `Variable` functor.
 *
 * @param {Function} lensAttr - Lens from {@link lensProp}.
 * @param {*} newValue - Value to set.
 * @param {object} obj - Target object.
 * @returns {object} Updated object.
 * @example
 * set(lensProp("user"), "Bob", { user: "Ada" }); // { user: "Bob" }
 */
const set = partialCurrying(
  (lensAttr, newValue, obj) => lensAttr(() => new Variable(newValue))(obj).value
);

/**
 * Maps over the focus using a `Variable` functor.
 *
 * @param {Function} lensAttr - Lens from {@link lensProp}.
 * @param {Function} mapFn - Transform for the focused value.
 * @param {object} obj - Target object.
 * @returns {object} Updated object.
 * @example
 * over(lensProp("n"), (x) => x + 1, { n: 1 }); // { n: 2 }
 */
const over = partialCurrying(
  (lensAttr, mapFn, obj) => lensAttr((x) => new Variable(mapFn(x)))(obj).value
);

module.exports = {
  lensWithFunctions,
  lensProp,
  view,
  set,
  over,
  Constant,
  Variable,
};
