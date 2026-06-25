/**
 * @module Chapter_12/maybe
 * @see {@link module:src/algebraic/maybe} — equivalent `Maybe` in `src/algebraic/maybe.ts`
 */

const { Functor, VALUE } = require("./functor");

/**
 * Represents a missing value.
 *
 * @extends Functor
 */
class Nothing extends Functor {
  isNothing() {
    return true;
  }

  toString() {
    return "Nothing()";
  }

  map(_fn) {
    return this;
  }

  orElse(v) {
    return v;
  }
}

/**
 * Represents a present value.
 *
 * @extends Functor
 */
class Just extends Functor {
  isNothing() {
    return false;
  }

  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }

  orElse(_v) {
    return this.valueOf();
  }
}

/**
 * Wraps a value that may be `null` or `undefined`.
 *
 * @example
 * Maybe.of(5).map((n) => n + 1).toString(); // "Just(6)"
 * Maybe.of(null).map((n) => n + 1).toString(); // "Nothing()"
 */
class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }

  static of(x) {
    return new Maybe(x);
  }

  /**
   * Returns a default when the value is missing.
   *
   * @param {*} v - Fallback value.
   * @returns {*} Inner value or fallback.
   * @example
   * Maybe.of(null).orElse(0); // 0
   */
  orElse(v) {
    return this.isNothing() ? v : this.valueOf();
  }
}

module.exports = Maybe;
