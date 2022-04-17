class Foo {
  constructor(fooValue) {
    this.fooValue = fooValue;
  }
  doSomething() {
    console.log("something: foo... ", this.fooValue);
  }
}
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

const fooBar = new (addBar(Foo))(22, 9);
fooBar.doSomething(); // something: foo... 22
fooBar.somethingElse(); // something else: bar... 9
console.log(Object.keys(fooBar)); // ["fooValue", "barValue"]
