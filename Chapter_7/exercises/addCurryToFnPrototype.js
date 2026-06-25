/**
 * @module Chapter_7/exercises/addCurryToFnPrototype
 * Adds a `curry` method to `Function.prototype` for manual currying.
 * @see src/currying.ts
 *
 * @returns {void}
 * @example
 * addCurryToFnPrototype();
 * const sum3 = (a, b, c) => 100 * a + 10 * b + c;
 * sum3.curry()(1)(2)(4); // 124
 */
function addCurryToFnPrototype() {
  Function.prototype.curry = function () {
    const allParams = [...arguments];
    return this.length === allParams.length
      ? this(...allParams)
      : function (p) {
          return this.curry(...allParams, p);
        }.bind(this);
  };
}

if (require.main === module) {
  addCurryToFnPrototype();
  const sum3 = (a, b, c) => 100 * a + 10 * b + c;
  console.log(sum3.curry()(1)(2)(4));
}

module.exports = addCurryToFnPrototype;
