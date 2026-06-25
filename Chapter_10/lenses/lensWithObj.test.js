const {
  lensWithObj,
  lensProp,
  view,
  set,
  over,
  composeTwoLenses,
} = require("./lensWithObj");

describe("lensWithObj", () => {
  const author = { user: "Ada", name: { first: "Ada", last: "Lovelace" } };

  test("lensProp views and sets a property", () => {
    const lens = lensProp("user");
    expect(view(lens)(author)).toBe("Ada");
    expect(set(lens)("Bob")(author)).toEqual({ ...author, user: "Bob" });
  });

  test("over maps the focused value", () => {
    const lens = lensProp("user");
    expect(over(lens)((s) => s.toUpperCase())(author)).toEqual({
      ...author,
      user: "ADA",
    });
  });

  test("composeTwoLenses focuses nested properties", () => {
    const lens = composeTwoLenses(lensProp("name"), lensProp("first"));
    expect(view(lens)(author)).toBe("Ada");
  });

  test("lensWithObj builds custom lenses", () => {
    const lens = lensWithObj(
      (o) => o.user,
      (v) => (o) => ({ ...o, user: v })
    );
    expect(view(lens)(author)).toBe("Ada");
  });
});
