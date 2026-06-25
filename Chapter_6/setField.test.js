const setField = require("./setField");

describe("setField - ", () => {
  it("should return a copy with the updated field", () => {
    expect(setField("age", 30)({ name: "Ada" })).toEqual({
      name: "Ada",
      age: 30,
    });
  });

  it("should return null or undefined unchanged", () => {
    expect(setField("age", 30)(null)).toBeNull();
    expect(setField("age", 30)(undefined)).toBeUndefined();
  });
});
