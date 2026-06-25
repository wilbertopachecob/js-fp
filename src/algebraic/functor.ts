export const VALUE = Symbol("value");

type Valued<T> = Record<symbol, T>;

export class Container<T> {
  constructor(value: T) {
    (this as Valued<T>)[VALUE] = value;
  }

  toString(): string {
    return `${this.constructor.name}(${(this as Valued<T>)[VALUE]})`;
  }

  valueOf(): T {
    return (this as Valued<T>)[VALUE];
  }
}

export class Functor<T> extends Container<T> {
  static of<U>(x: U): Functor<U> {
    return new Functor(x);
  }

  map<R>(fn: (value: T) => R): Functor<R> {
    return Functor.of(fn(this.valueOf()));
  }
}

export class Monad<T> extends Functor<T> {
  static override of<U>(x: U): Monad<U> {
    return new Monad(x);
  }

  override map<R>(fn: (value: T) => R): Monad<R> {
    return Monad.of(fn(this.valueOf()));
  }

  unwrap(): Monad<T> {
    return this;
  }

  chain<R>(fn: (value: T) => Functor<R>): Functor<R> {
    return fn(this.valueOf());
  }

  ap<R>(m: Functor<(arg: T) => R>): Functor<R> {
    const fn = m.valueOf();
    return Functor.of(fn(this.valueOf()));
  }
}

export { VALUE as defaultValueSymbol };
