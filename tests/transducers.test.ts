import {
  concat,
  mapTransducer,
  filterTransducer,
  composeTransducers,
} from "@/transducers";

describe("transducers", () => {
  it("concat adds values to an accumulator array", () => {
    expect(concat([1], 2)).toEqual([1, 2]);
  });

  it("mapTransducer maps before reducing", () => {
    const double = mapTransducer<number, number, number[]>((n) => n * 2)(concat);
    expect([1, 2, 3].reduce(double, [] as number[])).toEqual([2, 4, 6]);
  });

  it("filterTransducer filters before reducing", () => {
    const keepEvens = filterTransducer<number, number[]>((n) => n % 2 === 0)(concat);
    expect([1, 2, 3, 4].reduce(keepEvens, [] as number[])).toEqual([2, 4]);
  });

  it("composeTransducers chains two transducers", () => {
    const addOneThenDouble = composeTransducers<number, number, number[]>(
      mapTransducer((n: number) => n + 1),
      mapTransducer((n: number) => n * 2)
    )(concat);

    expect([1, 2, 3].reduce(addOneThenDouble, [] as number[])).toEqual([4, 6, 8]);
  });
});
