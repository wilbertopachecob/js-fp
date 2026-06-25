import { Functor, Monad } from "@/algebraic/functor";
import { Maybe } from "@/algebraic/maybe";
import { Either } from "@/algebraic/either";
import { Try } from "@/algebraic/try";

describe("algebraic types", () => {
  it("Functor maps a value", () => {
    expect(Functor.of(5).map((n) => n + 1).value).toBe(6);
  });

  it("Monad chain flattens nested wrappers", () => {
    const result = Monad.of(2).chain((n) => Monad.of(n * 3));
    expect(result.valueOf()).toBe(6);
  });

  it("Maybe maps present values", () => {
    expect(Maybe.of(5).map((n: number) => n + 1).toString()).toBe("Just(6)");
  });

  it("Maybe ignores missing values", () => {
    expect(Maybe.of(null).map(() => 1).toString()).toBe("Nothing()");
  });

  it("Either stores success on the right", () => {
    expect(Either.of(null, 42).isLeft()).toBe(false);
  });

  it("Either stores failure on the left", () => {
    expect(Either.of("error", null).isLeft()).toBe(true);
  });

  it("Try returns success as Right", () => {
    expect(Try.of(() => 42).isLeft()).toBe(false);
  });

  it("Try returns errors as Left", () => {
    expect(
      Try.of(() => {
        throw new Error("fail");
      }).isLeft()
    ).toBe(true);
  });
});
