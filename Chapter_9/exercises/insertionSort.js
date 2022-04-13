const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > key; j--) {
      console.log(arr[j + 1], arr[j]);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([8, 9, 5, 4, 7, 52, 2, 1]));
