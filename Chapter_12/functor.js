/**
 * @module Chapter_12/functor
 * @see {@link module:src/algebraic/functor} — equivalent types in `src/algebraic/functor.ts`
 */

const VALUE = Symbol;

/**
 * Base wrapper storing a value in a private symbol slot.
 *
 * @template T
 */
class Container {
  constructor(value) {
    this[VALUE] = value;
  }
  map(fn) {
    return fn(this[VALUE]);
  }

  of(x) {
    return new Container(x);
  }

  toString() {
    return `${this.constructor.name}(${this[VALUE]})`;
  }

  valueOf() {
    return this[VALUE];
  }
}

/**
 * Functor wrapper with `map` that returns a new `Functor`.
 *
 * @template T
 * @example
 * Functor.of(5).map((n) => n + 1).toString(); // "Functor(6)"
 */
class Functor extends Container {
  static of(x) {
    return new Functor(x);
  }
  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}

module.exports = { Functor, VALUE, Container };
