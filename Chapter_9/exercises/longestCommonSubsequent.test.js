const longestCommonSubsequent = require("./longestCommonSubsequent");

describe("longestCommonSubsequent", () => {
  test("finds a longest common subsequence", () => {
    const result = longestCommonSubsequent("INTERNATIONAL", "CONTRACTOR");
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.join("")).toMatch(/N.*T.*R.*A.*T.*O/);
  });
});
