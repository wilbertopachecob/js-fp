/**
 * Base wrapper for values that support `map`.
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
 * A functor that also supports `chain` (flatMap).
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
