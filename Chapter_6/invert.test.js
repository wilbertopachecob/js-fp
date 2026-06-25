const invert = require("./invert");

describe("invert - ", () => {
  it("should negate the result of a comparison function", () => {
    const compare = (a, b) => a - b;
    expect(invert(compare)(1, 3)).toBe(2);
    expect(compare(1, 3)).toBe(-2);
  });
});
