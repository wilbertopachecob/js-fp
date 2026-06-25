const pipelineRecursive = require("./pipelineRecursive");

describe("pipelineRecursive", () => {
  test("pipes left-to-right", () => {
    const plus1 = (x) => x + 1;
    const by10 = (x) => x * 10;
    expect(pipelineRecursive(plus1, by10)(2)).toBe(30);
  });
});
