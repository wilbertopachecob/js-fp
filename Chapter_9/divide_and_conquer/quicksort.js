const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const smaller = arr.slice(1).filter((x) => x < pivot);
  const greater = arr.slice(1).filter((x) => x >= pivot);
  console.log(pivot);
  console.log(smaller);
  console.log(greater);
  return [...quicksort(smaller), pivot, ...quicksort(greater)];
};

console.log(quicksort([22, 9, 60, 12, 4, 56]));
