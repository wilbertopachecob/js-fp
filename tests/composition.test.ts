import {
  compose,
  pipeline,
  pipeTwo,
  tee,
  tap,
} from "../src/composition";

describe("composition", () => {
  it("pipeTwo runs f then g", () => {
    const addOne = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    expect(pipeTwo(addOne, double)(3)).toBe(8);
  });

  it("pipeline runs functions left to right", () => {
    expect(pipeline((x: number) => x * 2, (x: number) => x + 1)(3)).toBe(7);
  });

  it("compose runs functions right to left", () => {
    expect(compose((x: number) => x + 1, (x: number) => x * 2)(3)).toBe(7);
  });

  it("tee runs a side effect and returns the value", () => {
    const fn = jest.fn();
    expect(tee(fn)(10)).toBe(10);
    expect(fn).toHaveBeenCalledWith(10);
  });

  it("tap is an alias for tee", () => {
    expect(tap).toBe(tee);
  });
});
