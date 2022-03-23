const mapAsync = require("./mapAsync");
const fakeAPI = require("./fakeApi");

const filterAsync = (arr, fn) =>
  mapAsync(arr, fn).then((arr2) => arr.filter((_, i) => Boolean(arr2[i])));

const isEven = (n) => n % 2 === 0;

(async () => {
  console.log("START filterAsync VIA REDUCE");
  const arr = [1, 2, 3, 4];
  const fn = async (v) => {
    const result = await fakeAPI(v * 1000, v);
    return isEven(result);
  };
  const filtered = await filterAsync(arr, fn);
  console.log(filtered);
  console.log("END filterAsync VIA REDUCE");
})();

module.exports = filterAsync;
