const { Functor, Container } = require("./functor");

describe("Functor", () => {
  test("map applies function to inner value", () => {
    expect(Functor.of(5).map((n) => n + 1).valueOf()).toBe(6);
  });

  test("toString includes constructor name", () => {
    expect(Functor.of(5).toString()).toBe("Functor(5)");
  });

  test("Container stores value via symbol", () => {
    const c = new Container(3);
    expect(c.valueOf()).toBe(3);
  });
});
