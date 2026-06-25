const { Foo, addBar } = require("./decoratorsAndMixins");

describe("decoratorsAndMixins", () => {
  test("addBar extends Foo with bar behavior", () => {
    const FooBar = addBar(Foo);
    const fooBar = new FooBar(22, 9);
    expect(fooBar.fooValue).toBe(22);
    expect(fooBar.barValue).toBe(9);
    expect(Object.keys(fooBar).sort()).toEqual(["barValue", "fooValue"]);
  });

  test("FooBar instances retain base methods", () => {
    const FooBar = addBar(Foo);
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const fooBar = new FooBar(22, 9);
    fooBar.doSomething();
    fooBar.somethingElse();
    logSpy.mockRestore();
    expect(typeof fooBar.doSomething).toBe("function");
    expect(typeof fooBar.somethingElse).toBe("function");
  });
});
