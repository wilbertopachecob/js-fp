/**
 * @module Chapter_12/try
 * @see {@link module:src/algebraic/try} — equivalent `Try` in `src/algebraic/try.ts`
 */

const Either = require("./either");
const Monad = require("./monad");

/**
 * Runs a function safely and returns an `Either` instead of throwing.
 *
 * @example
 * Try.of(() => 42).isLeft(); // false
 * Try.of(() => { throw new Error("fail"); }).isLeft(); // true
 */
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
