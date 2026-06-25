/**
 * @module Chapter_12/extendingDataTypes
 */

/**
 * Adds `map` to `Boolean`, `String`, `Number`, and `Function` prototypes.
 *
 * @returns {void}
 * @example
 * extendNativeTypes();
 * (5).map((n) => n + 1); // 6
 */
const extendNativeTypes = () => {
  Boolean.prototype.map = function (fn) {
    return !!fn(this);
  };
  String.prototype.map = function (fn) {
    return String(fn(this));
  };
  Number.prototype.map = function (fn) {
    return Number(fn(this));
  };
  Function.prototype.map = function (fn) {
    return (...args) => fn(this(...args));
  };
};

extendNativeTypes();

module.exports = { extendNativeTypes };

if (require.main === module) {
  console.log((5).map((n) => n + 1));
}
