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
