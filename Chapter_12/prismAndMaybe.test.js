const { preview, ConstantP } = require("./prismAndMaybe");

describe("prismAndMaybe", () => {
  test("preview returns Maybe of focused value", () => {
    const prism = (fn) => (obj) => fn(obj.x);
    expect(preview(prism, { x: 1 }).toString()).toBe("Just(1)");
  });

  test("ConstantP wraps Maybe and ignores map", () => {
    const c = new ConstantP(5);
    expect(c.value.toString()).toBe("Just(5)");
    expect(c.map(() => 99).value.toString()).toBe("Just(5)");
  });
});
