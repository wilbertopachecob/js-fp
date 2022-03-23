Function.prototype.curry = function () {
  const allParams = [...arguments];
  return this.length === allParams.length
    ? this(...allParams)
    : function (p) {
        return this.curry(...allParams, p);
      }.bind(this);
};

const sum3 = (a, b, c) => 100 * a + 10 * b + c;
console.log(sum3.curry()(1)(2)(4));
