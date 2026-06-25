import {
  curryBind,
  partialCurrying,
  partialByClosure,
  flip,
  flip3,
} from "../src/currying";

describe("currying", () => {
  const sum3 = (a: number, b: number, c: number) => a + b + c;

  it("curryBind collects arguments one by one", () => {
    expect(curryBind(sum3)(1)(2)(3)).toBe(6);
  });

  it("partialCurrying collects arguments in groups", () => {
    expect(partialCurrying(sum3)(1)(2)(3)).toBe(6);
  });

  it("partialByClosure fills missing arguments later", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    expect(partialByClosure(add, 1, 2)(3)).toBe(6);
  });

  it("flip swaps the first two arguments", () => {
    const subtract = (a: number, b: number) => a - b;
    expect(flip(subtract)(10, 3)).toBe(-7);
  });

  it("flip3 rotates three arguments", () => {
    const join = (a: string, b: string, c: string) => `${a}-${b}-${c}`;
    expect(flip3(join)("x", "y", "z")).toBe("z-x-y");
  });
});
