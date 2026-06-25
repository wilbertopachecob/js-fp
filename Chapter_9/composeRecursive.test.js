const composeRecursive = require("./composeRecursive");

describe("composeRecursive", () => {
  test("composes right-to-left", () => {
    const plus1 = (x) => x + 1;
    const by10 = (x) => x * 10;
    expect(composeRecursive(plus1, by10)(2)).toBe(21);
  });
});
