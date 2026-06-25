import { Functor } from "./functor";

class Nothing extends Functor<never> {
  constructor() {
    super(undefined as never);
  }

  isNothing(): boolean {
    return true;
  }

  override toString(): string {
    return "Nothing()";
  }

  override map(): Nothing {
    return this;
  }
}

class Just<T> extends Functor<T> {
  isNothing(): boolean {
    return false;
  }

  override map<R>(fn: (value: T) => R): MaybeInstance<R> {
    return Maybe.of(fn(this.valueOf()));
  }
}

export type MaybeInstance<T> = Nothing | Just<T>;

export class Maybe {
  static of<T>(x: T | null | undefined): MaybeInstance<T> {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }
}

export { Functor };
