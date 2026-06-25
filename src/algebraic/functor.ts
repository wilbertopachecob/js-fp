/**
 * A Functor is a wrapper you can transform with `.map()` without unwrapping first.
 * Like `Array.map`, but for one value in a box — apply a function inside, get a new box back.
 */
export class Functor<T> {
  constructor(public readonly value: T) {}

  static of<U>(value: U): Functor<U> {
    return new Functor(value);
  }

  /** Applies a function to the inner value. */
  map<R>(fn: (value: T) => R): Functor<R> {
    return new Functor(fn(this.value));
  }

  toString(): string {
    return `${this.constructor.name}(${this.value})`;
  }

  valueOf(): T {
    return this.value;
  }
}

/**
 * A Monad is a Functor that also supports `.chain()` (flatMap).
 * Simple terms: a box that carries a value plus extra context (e.g. "might be missing").
 * Used to chain pipeline steps without null checks or nested wrappers piling up.
 */
export class Monad<T> extends Functor<T> {
  static override of<U>(value: U): Monad<U> {
    return new Monad(value);
  }

  override map<R>(fn: (value: T) => R): Monad<R> {
    return Monad.of(fn(this.value));
  }

  /** Runs a function that returns another wrapper and flattens it. */
  chain<R>(fn: (value: T) => Functor<R>): Functor<R> {
    return fn(this.value);
  }
}

export class Container<T> extends Functor<T> {}
