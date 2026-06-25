const generateAlphabet = require("./generateAlphabet");

describe("generateAlphabet - ", () => {
  it("should contain 26 uppercase letters", () => {
    expect(generateAlphabet.length).toBe(26);
    expect(generateAlphabet[0]).toBe("A");
    expect(generateAlphabet[25]).toBe("Z");
  });
});
