const pendingTasks = require("./pendingTasks");
const { allTasks } = require("./pendingTasks");

describe("pendingTasks - ", () => {
  it("should return pending task ids for a person", () => {
    expect(pendingTasks(allTasks, "FK")).toEqual([555, 999]);
  });

  it("should return an empty list when the person has no pending tasks", () => {
    expect(pendingTasks(allTasks, "ST")).toEqual([]);
  });
});
