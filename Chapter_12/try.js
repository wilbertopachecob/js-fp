const Either = require("./either");
const Monad = require("./monad");

class Try extends Monad {
  constructor(fn, msg) {
    try {
      const result = fn();
      return Either.of(null, result);
    } catch (error) {
      return Either.of(msg || error, null);
    }
  }

  static of(fn, msg) {
    return new Try(fn, msg);
  }
}

module.exports = Try;

const getField2 = (attr) => (obj) => Try.of(() => obj[attr], "NULL OBJECT");

const result = getField2(12)(null);
const result2 = getField2("a")({ a: 23 });
console.log(result.toString());
console.log(result.isLeft());
console.log(result2.toString());
console.log(result2.isLeft());
