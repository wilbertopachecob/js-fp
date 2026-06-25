const fib4 = require("./betterFibonnacci");

describe("fib4", () => {
  it("should return the nth fibonacci number", () => {
    expect(fib4(0)).toBe(0);
    expect(fib4(1)).toBe(1);
    expect(fib4(2)).toBe(1);
    expect(fib4(6)).toBe(8);
  });
});
