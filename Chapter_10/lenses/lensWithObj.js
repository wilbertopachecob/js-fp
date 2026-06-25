/**
 * @module Chapter_10/lenses/lensWithObj
 */

let setField = require("../../Chapter_6/setField");
const getField = require("../../Chapter_6/getField");
const curry = require("../../Chapter_7/curryBind2");
setField = curry(setField);

/**
 * Builds a lens from getter and setter functions.
 *
 * @param {Function} getter - `(obj) => value`
 * @param {Function} setter - Curried `(value) => (obj) => newObj`
 * @returns {{ getter: Function, setter: Function }} Lens object.
 * @example
 * const lens = lensWithObj(getField("x"), setField("x"));
 */
const lensWithObj = (getter, setter) => ({
  getter,
  setter,
});

/**
 * Lens focused on a single object property.
 *
 * @param {string} attr - Property name.
 * @returns {{ getter: Function, setter: Function }} Property lens.
 * @example
 * view(lensProp("user"))({ user: "Ada" }); // "Ada"
 */
const lensProp = (attr) => lensWithObj(getField(attr), setField(attr));

/**
 * Reads the focus of a lens.
 *
 * @param {{ getter: Function }} lens - Lens object.
 * @param {object} obj - Target object.
 * @returns {*} Focused value.
 * @example
 * view(lensProp("name"))({ name: "Ada" }); // "Ada"
 */
const view = curry((lens, obj) => lens.getter(obj));

/**
 * Sets the focus of a lens to a new value.
 *
 * @param {{ setter: Function }} lens - Lens object.
 * @param {*} newValue - Value to set.
 * @param {object} obj - Target object.
 * @returns {object} Updated object.
 * @example
 * set(lensProp("user"))("Bob")({ user: "Ada" }); // { user: "Bob" }
 */
const set = curry((lens, newValue, obj) => lens.setter(newValue)(obj));

/**
 * Maps a function over the lens focus.
 *
 * @param {{ getter: Function, setter: Function }} lens - Lens object.
 * @param {Function} mapFn - Function applied to the focused value.
 * @param {object} obj - Target object.
 * @returns {object} Updated object.
 * @example
 * over(lensProp("n"))((x) => x + 1)({ n: 1 }); // { n: 2 }
 */
const over = curry((lens, mapFn, obj) =>
  lens.setter(mapFn(lens.getter(obj)))(obj)
);

/**
 * Composes two object lenses into one nested lens.
 *
 * @param {{ getter: Function, setter: Function }} lens1 - Outer lens.
 * @param {{ getter: Function, setter: Function }} lens2 - Inner lens.
 * @returns {{ getter: Function, setter: Function }} Composed lens.
 * @example
 * const l = composeTwoLenses(lensProp("c"), lensProp("d"));
 * view(l)({ c: { d: 3 } }); // 3
 */
const composeTwoLenses = (lens1, lens2) => ({
  getter: (obj) => lens2.getter(lens1.getter(obj)),
  setter: curry((newValue, obj) =>
    lens1.setter(lens2.setter(newValue, lens1.getter(obj)), obj)
  ),
});

module.exports = {
  lensWithObj,
  lensProp,
  view,
  set,
  over,
  composeTwoLenses,
};
