const headline = require("./headline");

describe("headline - ", () => {
  it("should title-case each word", () => {
    expect(headline("Alice's ADVENTURES in WoNdErLaNd")).toBe(
      "Alice's Adventures In Wonderland"
    );
  });
});
