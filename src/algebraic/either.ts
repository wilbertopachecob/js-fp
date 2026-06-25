import { Functor } from "./functor";

export interface EitherLike<L, R> {
  isLeft(): boolean;
  toString(): string;
  valueOf(): L | R;
}

class Left<L> extends Functor<L> implements EitherLike<L, never> {
  constructor(left: L) {
    super(left);
  }

  isLeft(): boolean {
    return true;
  }

  override map<R>(_fn: (value: never) => R): Functor<R> {
    return this as unknown as Functor<R>;
  }
}

class Right<R> extends Functor<R> implements EitherLike<never, R> {
  constructor(right: R) {
    super(right);
  }

  isLeft(): boolean {
    return false;
  }

  override map<U>(fn: (value: R) => U): Right<U> {
    return new Right(fn(this.valueOf()));
  }
}

export type EitherInstance<L, R> = Left<L> | Right<R>;

export class Either {
  static of<L, R>(left: L, right?: R | null): EitherLike<L, R> {
    return (
      right === undefined || right === null
        ? new Left(left)
        : new Right(right)
    ) as EitherLike<L, R>;
  }
}

export { Functor };
