const { search, search2, search3 } = require("./search");

describe("search variants", () => {
  const arr = [1, 2, 3];

  test.each([
    ["search", search],
    ["search2", search2],
    ["search3", search3],
  ])("%s finds existing values", (_name, fn) => {
    expect(fn(arr, 2)).toBeTruthy();
  });

  test.each([
    ["search", search],
    ["search2", search2],
    ["search3", search3],
  ])("%s returns falsy for missing values", (_name, fn) => {
    expect(fn(arr, 9)).toBeFalsy();
  });
});
