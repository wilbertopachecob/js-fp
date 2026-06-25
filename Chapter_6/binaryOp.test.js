const binaryOp = require("./binaryOp");

describe("binaryOp - ", () => {
  it("should return a greater-than comparison", () => {
    expect(binaryOp(">")(3, 2)).toBe(true);
    expect(binaryOp(">")(2, 3)).toBe(false);
  });

  it("should return a less-than comparison", () => {
    expect(binaryOp("<")(2, 3)).toBe(true);
    expect(binaryOp("<")(3, 2)).toBe(false);
  });
});
