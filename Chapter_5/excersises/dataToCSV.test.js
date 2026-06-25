const dataToCSV = require("./dataToCSV");

describe("dataToCSV - ", () => {
  it("should convert a 2D array to CSV text", () => {
    const myData = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(dataToCSV(myData)).toBe("1,2,3,4\n5,6,7,8\n");
  });
});
