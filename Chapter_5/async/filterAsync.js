const mapAsync = require("./mapAsync");

const filterAsync = (arr, fn) =>
  mapAsync(arr, fn).then((arr2) => arr.filter((_, i) => Boolean(arr2[i])));

module.exports = filterAsync;
