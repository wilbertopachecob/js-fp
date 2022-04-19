const Maybe = require("./maybe");
const curry = require("../../Chapter_7/partialCurrying2");

class ConstantP {
  constructor(v) {
    this.value = Maybe.of(v);
    this.map = () => this;
  }
}

const preview = curry(
  (prismAttr, obj) => prismAttr((x) => new ConstantP(x))(obj).value
);
