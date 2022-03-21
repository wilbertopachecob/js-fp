const curryBind2 = require("./curryBind2");

const sum = (...args) => args.reduce((x, y) => x + y, 0);

describe("curryBind2 - ", () => {
  test("with arity n", () => {
    const sum2 = sum(1, 2, 3);
    const sum3 = curryBind2(sum, 3);
    const sum4 = sum3(1)(2)(3);
    expect(sum2).toBe(sum4);
  });

  test("with arity 1", () => {
    const sum2 = sum(111);
    const sum3 = curryBind2(sum, 1);
    const sum4 = sum3(111);
    expect(sum2).toBe(sum4);
  });
});
