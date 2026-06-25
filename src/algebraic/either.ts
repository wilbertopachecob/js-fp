import { Functor } from "@/algebraic/functor";

/** Common shape for Either values. */
export interface EitherValue<L, R> {
  isLeft(): boolean;
  toString(): string;
  valueOf(): L | R;
}

/** Stores an error or failure value. */
class Left<L> extends Functor<L> implements EitherValue<L, never> {
  isLeft(): boolean {
    return true;
  }

  override map<R>(_fn: (value: L) => R): Functor<R> {
    return this as unknown as Functor<R>;
  }
}

/** Stores a successful value. */
class Right<R> extends Functor<R> implements EitherValue<never, R> {
  isLeft(): boolean {
    return false;
  }

  override map<U>(fn: (value: R) => U): Right<U> {
    return new Right(fn(this.value));
  }
}

export type EitherInstance<L, R> = Left<L> | Right<R>;

/**
 * Either is a box for a result that succeeded or failed.
 * `Right` = success value; `Left` = error. Used instead of throwing — callers
 * check `.isLeft()` and handle both paths explicitly.
 *
 * @example
 * Either.of(null, 42).isLeft(); // false
 * Either.of("error", null).isLeft(); // true
 */
export class Either {
  static of<L, R>(left: L, right?: R | null): EitherValue<L, R> {
    if (right === null || right === undefined) {
      return new Left(left);
    }
    return new Right(right);
  }
}

export { Functor };
