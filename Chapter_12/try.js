/**
 * @module Chapter_12/try
 * @see {@link module:src/algebraic/try} — equivalent `Try` in `src/algebraic/try.ts`
 */

const Either = require("./either");
const Monad = require("./monad");

/**
 * Try runs a function and wraps the outcome in an Either instead of throwing.
 * Success becomes `Right`; a caught exception becomes `Left`. Useful when you
 * want error handling as data rather than control flow via try/catch.
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
