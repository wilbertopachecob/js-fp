import { Functor } from "@/algebraic/functor";

/** Represents a missing value. */
class Nothing extends Functor<null> {
  constructor() {
    super(null);
  }

  isNothing(): boolean {
    return true;
  }

  override toString(): string {
    return "Nothing()";
  }

  override map<R>(_fn: (value: null) => R): Functor<R> {
    return this as unknown as Functor<R>;
  }
}

/** Represents a present value. */
class Just<T> extends Functor<T> {
  isNothing(): boolean {
    return false;
  }

  override map<R>(fn: (value: T) => R): Functor<R> {
    return Maybe.of(fn(this.value)) as Functor<R>;
  }
}

export type MaybeValue<T> = Nothing | Just<T>;

/**
 * Maybe is a box for a value that might be missing (`null`/`undefined`).
 * `Just` = value is there; `Nothing` = no value. `.map()` skips work when empty,
 * so you avoid "cannot read property of null" bugs.
 *
 * @example
 * Maybe.of(5).map((n) => n + 1).toString(); // "Just(6)"
 * Maybe.of(null).map((n) => n + 1).toString(); // "Nothing()"
 */
export class Maybe {
  static of(value: null | undefined): Nothing;
  static of<T>(value: T): Just<T>;
  static of<T>(value: T | null | undefined): MaybeValue<T> {
    if (value === null || value === undefined) {
      return new Nothing();
    }
    return new Just(value);
  }
}

export { Functor };
