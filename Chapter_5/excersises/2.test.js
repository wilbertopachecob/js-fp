const generateList = require("./2");

describe("generateList - ", () => {
  it("should build a list of chess and checkers players", () => {
    const characters = [
      { name: "Fred", plays: "bowling" },
      { name: "Barney", plays: "chess" },
      { name: "Wilma", plays: "bridge" },
      { name: "Betty", plays: "checkers" },
      { name: "Pebbles", plays: "chess" },
    ];
    const list = generateList(characters);
    expect(list.childNodes.length).toBe(3);
  });
});
