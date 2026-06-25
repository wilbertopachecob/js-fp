const {
  lensWithFunctions,
  lensProp,
  view,
  set,
  over,
  Constant,
  Variable,
} = require("./lensWithFunctions");

describe("lensWithFunctions", () => {
  const author = { user: "Ada", n: 1 };

  test("view reads through Constant functor", () => {
    expect(view(lensProp("user"), author)).toBe("Ada");
  });

  test("set writes through Variable functor", () => {
    expect(set(lensProp("user"), "Bob", author)).toEqual({
      ...author,
      user: "Bob",
    });
  });

  test("over maps through Variable functor", () => {
    expect(over(lensProp("n"), (x) => x + 1, author)).toEqual({
      ...author,
      n: 2,
    });
  });

  test("Constant and Variable functors behave as expected", () => {
    expect(new Constant(1).map(() => 99).value).toBe(1);
    expect(new Variable(1).map((x) => x + 1).value).toBe(2);
  });

  test("lensWithFunctions composes getter and setter", () => {
    const lens = lensWithFunctions(
      (o) => o.n,
      (v) => (o) => ({ ...o, n: v })
    );
    const result = lens((x) => new Variable(x + 1))(author).value;
    expect(result.n).toBe(2);
  });
});
