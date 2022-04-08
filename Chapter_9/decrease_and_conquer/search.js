const search = (arr, val) => {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else return search(arr.slice(1), val);
};

const search2 = (arr, val) =>
  arr.length === 0 ? false : arr[0] === val || search2(arr.slice(1), val);

const search3 = (arr, val) =>
  arr.length && (arr[0] === val || search3(arr.slice(1), val));
