const { JSDOM } = require("jsdom");
const { traverseDOM, traverseDom2, traverseDom3 } = require("./traverseDom");

describe("traverseDom", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  const body = () =>
    new JSDOM("<html><body><div><p>hi</p></div></body></html>").window.document
      .body;

  test.each([
    ["traverseDOM", traverseDOM],
    ["traverseDom2", traverseDom2],
    ["traverseDom3", traverseDom3],
  ])("%s logs node names", (_name, fn) => {
    fn(body());
    const output = logSpy.mock.calls.map(([line]) => line).join("\n");
    expect(output).toContain("<body>");
    expect(output).toContain("<div>");
    expect(output).toContain("<p>");
  });
});
