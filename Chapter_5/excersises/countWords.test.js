const countWords = require("./countWords");

describe("countWords - ", () => {
  it("should count words across strings", () => {
    expect(countWords(["hello world", "foo bar"])).toBe(4);
  });
});
