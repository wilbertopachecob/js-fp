//converts an async function to a promise in a NodeJS way
const fs = require("fs");
const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

module.exports = promisify();

//ex
const fsPromisified = promisify(fs.readFile.bind(fs));

const good = (data) => console.log(data.toString("utf8"));
const bad = (error) => console.log(error);

(async () => await fsPromisified("./test.txt").then(good).catch(bad))();
