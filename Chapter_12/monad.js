/**
 * @module Chapter_12/monad
 * @see {@link module:src/algebraic/functor} — equivalent `Monad` in `src/algebraic/functor.ts`
 */

const { Functor, VALUE, Container } = require("./functor");

/**
 * A Monad is a Functor that also supports `.chain()` (flatMap).
 * Simple terms: a box that carries a value plus extra context (e.g. "might be missing").
 * Used to chain pipeline steps without null checks or nested wrappers piling up.
 *
 * @template T
 * @example
 * Monad.of(2).map((n) => n + 1).valueOf(); // 3
 */
class Monad extends Functor {
  static of(x) {
    return new Monad(x);
  }
  map(fn) {
    return Monad.of(fn(this[VALUE]));
  }
  unwrap() {
    const myValue = this[VALUE];
    return myValue instanceof Container ? myValue.unwrap() : this;
  }
  /**
   * Runs a function that returns another wrapper and flattens it.
   *
   * @param {Function} fn - `(value) => Container`
   * @returns {Container} Flattened result.
   * @example
   * Monad.of(2).chain((n) => Monad.of(n * 10)).valueOf(); // 20
   */
  chain(fn) {
    return this.map(fn).unwrap();
  }
  /**
   * Applicative apply — runs a wrapped function on a wrapped value.
   * Part of the "Applicative" pattern: apply a function inside one box to a value inside another.
   *
   * @param {Monad} m - Wrapped function.
   * @returns {Monad} Result of applying the inner function.
   */
  ap(m) {
    return m.map(this.valueOf());
  }
}

module.exports = Monad;
