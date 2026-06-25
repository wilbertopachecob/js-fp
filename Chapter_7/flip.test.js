const flip2 = require("./flip");
const { flip3 } = require("./flip");

describe("flip2 - ", () => {
  it("should swap the first two arguments", () => {
    const subtract = (a, b) => a - b;
    expect(flip2(subtract)(10, 3)).toBe(-7);
  });
});

describe("flip3 - ", () => {
  it("should rotate the first three arguments", () => {
    const pick = (a, b, c) => `${a}-${b}-${c}`;
    expect(flip3(pick)(1, 2, 3)).toBe("3-1-2");
  });
});
