const fakeAPI = require("./fakeApi");
const useResult = require("./useResult");

const mapAsync = (arr, fn) => Promise.all(arr.map(fn));

// (async () => {
//   console.log("START FOREACH VIA REDUCE");
//   const arr = [1, 2, 3, 4];
//   const fn = async (v) => {
//     const result = await fakeAPI(v * 1000, v);
//     useResult(result);
//   };
//   await mapAsync(arr, fn);
//   console.log("END FOREACH VIA REDUCE");
// })();

module.exports = mapAsync;
