const composeTwo = require("./composeTwo");

describe("composeTwo - ", () => {
  it("should run the inner function first", () => {
    const addOne = (x) => x + 1;
    const double = (x) => x * 2;
    expect(composeTwo(addOne, double)(3)).toBe(7);
  });
});
