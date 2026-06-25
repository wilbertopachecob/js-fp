/**
 * @module Chapter_12/either
 * @see {@link module:src/algebraic/either} — equivalent `Either` in `src/algebraic/either.ts`
 */

const { VALUE } = require("./functor");
const Monad = require("./monad");

/**
 * Stores an error or failure value.
 *
 * @extends Monad
 */
class Left extends Monad {
  isLeft() {
    return true;
  }

  map(_fn) {
    return this;
  }
}

/**
 * Stores a successful value.
 *
 * @extends Monad
 */
class Right extends Monad {
  isLeft() {
    return false;
  }

  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}

/**
 * Either is a box for a result that succeeded or failed.
 * `Right` = success value; `Left` = error. Used instead of throwing — callers
 * check `.isLeft()` and handle both paths explicitly.
 *
 * @example
 * Either.of(null, 42).isLeft(); // false
 * Either.of("error", null).isLeft(); // true
 */
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
