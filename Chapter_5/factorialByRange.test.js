const factorialByRange = require("./factorialByRange");

describe("factorialByRange - ", () => {
  it("should compute factorial using range", () => {
    expect(factorialByRange(5)).toBe(120);
  });
});
