const { getFieldP, setFieldP, setIn, deleteIn } = require("./prism");

describe("prism", () => {
  const sample = {
    a: 111,
    d: { e: 444, f: 555, g: { h: 666, i: 777 } },
  };

  test("getFieldP reads existing fields", () => {
    expect(getFieldP("a", sample)).toBe(111);
    expect(getFieldP("z", sample)).toBeUndefined();
  });

  test("setFieldP updates shallow property", () => {
    expect(setFieldP("a", 222, sample)).toEqual({ ...sample, a: 222 });
  });

  test("setIn updates nested path with structural sharing", () => {
    const next = setIn(["d", "f"], "Frijoles", sample);
    expect(next.d.f).toBe("Frijoles");
    expect(next.d.g).toBe(sample.d.g);
    expect(sample.d.f).toBe(555);
  });

  test("deleteIn removes nested key", () => {
    const next = deleteIn(["d", "f"], sample);
    expect(next.d).toEqual({ e: 444, g: { h: 666, i: 777 } });
    expect(sample.d.f).toBe(555);
  });
});
