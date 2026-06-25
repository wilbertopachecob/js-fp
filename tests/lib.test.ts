import {
  memoize,
  compose,
  pipeline,
  myMap,
  flatAll,
  shuffle,
  range,
  once,
  Maybe,
  Either,
  Try,
  quicksort,
  deepClone,
  flip,
  partialCurrying,
} from "../src";

describe("memoize", () => {
  it("caches results for repeated calls", () => {
    const spy = jest.fn((x: number) => x * 2);
    const fn = memoize(spy);
    expect(fn(2)).toBe(4);
    expect(fn(2)).toBe(4);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("compose", () => {
  it("composes functions right-to-left", () => {
    const double = (x: number) => x * 2;
    const addOne = (x: number) => x + 1;
    expect(compose(addOne, double)(3)).toBe(7);
  });
});

describe("pipeline", () => {
  it("pipes functions left-to-right", () => {
    const double = (x: number) => x * 2;
    const addOne = (x: number) => x + 1;
    expect(pipeline(double, addOne)(3)).toBe(7);
  });
});

describe("myMap", () => {
  it("returns empty array for empty input", () => {
    expect(myMap([], () => undefined)).toEqual([]);
  });
  it("applies fn to every element", () => {
    expect(myMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  });
});

describe("flatAll", () => {
  it("flattens nested arrays", () => {
    expect(flatAll([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("shuffle", () => {
  it("returns array of same length", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffle([...arr])).toHaveLength(5);
  });
});

describe("range", () => {
  it("generates a range with step", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
});

describe("once", () => {
  it("executes fn at most once", () => {
    const spy = jest.fn();
    const fn = once(spy);
    fn();
    fn();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("Maybe", () => {
  it("maps over Just values", () => {
    expect(Maybe.of(5).map((x) => x + 1).toString()).toBe("Just(6)");
  });
  it("skips map for Nothing", () => {
    expect(Maybe.of(null).map(() => 1).toString()).toBe("Nothing()");
  });
});

describe("Either", () => {
  it("creates Right for non-null values", () => {
    const e = Either.of(null, 42);
    expect(e.isLeft()).toBe(false);
  });
  it("creates Left for null right value", () => {
    const e = Either.of("err", null);
    expect(e.isLeft()).toBe(true);
  });
});

describe("Try", () => {
  it("wraps successful calls as Right", () => {
    expect(Try.of(() => 42).isLeft()).toBe(false);
  });
  it("wraps thrown errors as Left", () => {
    expect(
      Try.of(() => {
        throw new Error("fail");
      }).isLeft()
    ).toBe(true);
  });
});

describe("quicksort", () => {
  it("sorts an array", () => {
    expect(quicksort([22, 9, 60, 12, 4, 56])).toEqual([4, 9, 12, 22, 56, 60]);
  });
});

describe("deepClone", () => {
  it("clones nested objects", () => {
    const orig = { a: { b: 1 } };
    const clone = deepClone(orig);
    clone.a.b = 99;
    expect(orig.a.b).toBe(1);
  });
});

describe("flip", () => {
  it("flips first two arguments", () => {
    const sub = (a: number, b: number) => a - b;
    expect(flip(sub)(10, 3)).toBe(-7);
  });
});

describe("partialCurrying", () => {
  it("partially applies arguments", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    expect(partialCurrying(add)(1)(2)(3)).toBe(6);
  });
});
