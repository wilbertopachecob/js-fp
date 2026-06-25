/**
 * @module Chapter_11/exercises/decoratorsAndMixins
 */

/**
 * Base class used in the mixin exercise.
 */
class Foo {
  constructor(fooValue) {
    this.fooValue = fooValue;
  }
  doSomething() {
    console.log("something: foo... ", this.fooValue);
  }
}

/**
 * Mixin factory that adds a `barValue` and `somethingElse` to a base class.
 *
 * @param {typeof Foo} BaseClass - Class to extend.
 * @returns {typeof Foo} Extended class with bar behavior.
 * @example
 * const FooBar = addBar(Foo);
 * new FooBar(22, 9).somethingElse(); // logs bar value
 */
const addBar = (BaseClass) =>
  class BarX extends BaseClass {
    constructor(fooValue, barValue) {
      super(fooValue);
      this.barValue = barValue;
    }
    somethingElse() {
      console.log("something: bar... ", this.barValue);
    }
  };

module.exports = { Foo, addBar };

if (require.main === module) {
  const fooBar = new (addBar(Foo))(22, 9);
  fooBar.doSomething();
  fooBar.somethingElse();
  console.log(Object.keys(fooBar));
}
