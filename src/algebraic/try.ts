import { Either, EitherLike } from "./either";

export class Try {
  static of<R>(fn: () => R, msg?: string): EitherLike<unknown, R> {
    try {
      return Either.of(null, fn()) as EitherLike<unknown, R>;
    } catch (error) {
      return Either.of(msg ?? error, null) as EitherLike<unknown, R>;
    }
  }
}

export { Either };
