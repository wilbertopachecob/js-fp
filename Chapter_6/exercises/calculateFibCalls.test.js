const calculateFibCalls = require("./calculateFibCalls");

describe("calculateFibCalls - ", () => {
  it("should count recursive fibonacci calls", () => {
    expect(calculateFibCalls(6)).toBe(25);
  });
});
