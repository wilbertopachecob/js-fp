const getField = require("./getField");

describe("getField - ", () => {
  it("should read a property from an object", () => {
    expect(getField("name")({ name: "Ada" })).toBe("Ada");
  });

  it("should return null or undefined unchanged", () => {
    expect(getField("name")(null)).toBeNull();
    expect(getField("name")(undefined)).toBeUndefined();
  });
});
