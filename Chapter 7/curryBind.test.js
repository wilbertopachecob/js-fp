const curryBind = require("./curryBind");
const make = (a, b, c) => String(100 * a + 10 * b + c);

describe("currybind - ", () => {
  it("should fix arguments one by one", () => {
    const makeC = curryBind(make);
    const step1 = makeC(6);
    const step2 = step1(5);
    const step3 = step2(8);
    expect(make(6, 5, 8)).toBe(step3);
  });
});
