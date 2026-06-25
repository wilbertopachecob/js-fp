const setByPath = require("./setByPath");

describe("setByPath", () => {
  test("sets nested values creating missing objects", () => {
    const obj = {};
    setByPath(["a", "b"], 42, obj);
    expect(obj).toEqual({ a: { b: 42 } });
  });

  test("updates existing paths", () => {
    const obj = { x: { y: 1 } };
    setByPath(["x", "y"], 2, obj);
    expect(obj.x.y).toBe(2);
  });
});
