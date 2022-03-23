const partialCurrying2 = require("./partialCurrying2");
const sum = (...args) => args.reduce((x, y) => x + y, 0);

describe("partialCurrying2 - ", () => {
  it("should fix multiple parameters in several steps", () => {
    const sum2 = partialCurrying2(sum, 5)(1, 2)(3)(4, 5);
    expect(sum2).toBe(sum(1, 2, 3, 4, 5));
  });
  it("should fix multiple parameters one at a time", () => {
    const sum2 = partialCurrying2(sum, 5)(1)(2)(3)(4)(5);
    expect(sum2).toBe(sum(1, 2, 3, 4, 5));
  });
  it("should fix multiple parameters in one step", () => {
    const sum2 = partialCurrying2(sum, 5)(1, 2, 3, 4, 5);
    expect(sum2).toBe(sum(1, 2, 3, 4, 5));
  });
});
