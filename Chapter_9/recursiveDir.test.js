const fs = require("fs");
const os = require("os");
const path = require("path");
const recursiveDir = require("./recursiveDir");

describe("recursiveDir", () => {
  test("logs directory entries", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "js-fp-dir-"));
    fs.writeFileSync(path.join(tmp, "a.txt"), "a");
    fs.mkdirSync(path.join(tmp, "sub"));
    fs.writeFileSync(path.join(tmp, "sub", "b.txt"), "b");

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    recursiveDir(tmp);
    const output = logSpy.mock.calls.map((args) => args.join("")).join("\n");
    logSpy.mockRestore();

    expect(output).toContain(tmp);
    expect(output).toContain("a.txt");
    expect(output).toContain("sub");
    expect(output).toContain("b.txt");

    fs.rmSync(tmp, { recursive: true, force: true });
  });
});
