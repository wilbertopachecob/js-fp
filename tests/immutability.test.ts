import {
  deepClone,
  deepFreeze,
  getPath,
  getByPath,
  setByPath,
  updateObject,
} from "../src/immutability";

describe("immutability utilities", () => {
  it("deepClone creates independent copies", () => {
    const original = { user: { name: "Ada" } };
    const copy = deepClone(original);

    copy.user.name = "Grace";
    expect(original.user.name).toBe("Ada");
  });

  it("deepFreeze makes nested objects read only", () => {
    const obj = deepFreeze({ inner: { value: 1 } });
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.inner)).toBe(true);
  });

  it("getPath splits dotted strings", () => {
    expect(getPath("user.name")).toEqual(["user", "name"]);
  });

  it("getByPath reads nested values", () => {
    const obj = { user: { name: "Ada" } };
    expect(getByPath(["user", "name"], obj)).toBe("Ada");
  });

  it("setByPath writes nested values", () => {
    const obj: Record<string, unknown> = {};
    setByPath(["user", "name"], "Ada", obj);
    expect(obj).toEqual({ user: { name: "Ada" } });
  });

  it("updateObject returns a new frozen object", () => {
    const original = { user: { name: "Ada" } };
    const updated = updateObject(["user", "name"], "Grace", original);

    expect(updated.user.name).toBe("Grace");
    expect(original.user.name).toBe("Ada");
    expect(Object.isFrozen(updated)).toBe(true);
  });
});
