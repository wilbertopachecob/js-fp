/**
 * @module Chapter_9/recursiveDir
 */

const fs = require("fs");

/**
 * Recursively walks a directory and logs entries (skips dotfiles).
 *
 * @param {string} path - Directory path to traverse.
 * @returns {void}
 * @example
 * recursiveDir("./Chapter_9");
 */
const recursiveDir = (path) => {
  console.log(path);
  fs.readdirSync(path).forEach((entry) => {
    if (entry.startsWith(".")) {
    } else {
      const full = `${path}/${entry}`;
      const stats = fs.lstatSync(full);
      if (stats.isSymbolicLink()) {
        console.log("L ", full);
      } else if (stats.isDirectory()) {
        console.log("D ", full);
        recursiveDir(full);
      } else {
        console.log(" ", full);
      }
    }
  });
};

module.exports = recursiveDir;

if (require.main === module) {
  recursiveDir(__dirname);
}
