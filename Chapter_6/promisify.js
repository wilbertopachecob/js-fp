/**
 * @module promisify
 */

/**
 * Turns a callback-style function into one that returns a Promise.
 *
 * @param {Function} fn - Callback-style function `(err, data) => void`.
 * @returns {Function} Promisified function.
 * @example
 * const readFilePromise = promisify(fs.readFile);
 * await readFilePromise("file.txt", "utf8");
 */
const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

module.exports = promisify;
