const getPath = require("./getPath");

describe("getPath", () => {
  test("splits dot paths", () => {
    expect(getPath("user.name")).toEqual(["user", "name"]);
  });

  test("returns array paths unchanged", () => {
    expect(getPath(["a", "b"])).toEqual(["a", "b"]);
  });

  test("throws for invalid types", () => {
    expect(() => getPath(123)).toThrow(/invalid type/);
  });
});
