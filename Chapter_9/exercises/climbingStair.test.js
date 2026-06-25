const climbingStair = require("./climbingStair");

describe("climbingStair", () => {
  test("counts ways for the book example", () => {
    expect(climbingStair(4, [2, 1])).toBe(3);
  });
});
