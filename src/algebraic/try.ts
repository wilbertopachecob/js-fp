import { Either, EitherValue } from "./either";

/**
 * Runs a function safely and returns an Either instead of throwing.
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
