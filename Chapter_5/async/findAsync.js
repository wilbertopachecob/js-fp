const findAsync = (arr, fnAsync, fnFind) =>
  Promise.all(arr.map(fnAsync)).then((arr2) => {
    const index = arr2.findIndex(fnFind);
    return index < 0 ? undefined : arr[index];
  });

module.exports = findAsync;
