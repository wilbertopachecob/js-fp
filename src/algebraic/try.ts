import { Either, EitherValue } from "@/algebraic/either";

/**
 * Try runs a function and wraps the outcome in an Either instead of throwing.
 * Success becomes `Right`; a caught exception becomes `Left`. Useful when you
 * want error handling as data rather than control flow via try/catch.
 *
 * @example
 * Try.of(() => 42).isLeft(); // false
 * Try.of(() => { throw new Error("fail"); }).isLeft(); // true
 */
export class Try {
  static of<R>(fn: () => R, errorMessage?: string): EitherValue<unknown, R> {
    try {
      return Either.of(null, fn());
    } catch (error) {
      return Either.of(errorMessage ?? error, null) as EitherValue<unknown, R>;
    }
  }
}

export { Either };
