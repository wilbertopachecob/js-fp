const { VALUE } = require("./functor");
const Monad = require("./monad");

class Left extends Monad {
  isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

class Right extends Monad {
  isLeft() {
    return false;
  }

  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}

class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null
      ? new Left(left)
      : new Right(right);
  }

  static of(left, right) {
    return new Either(left, right);
  }
}

module.exports = Either;
