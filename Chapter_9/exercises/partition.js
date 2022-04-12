const partition = (arr, fn) => {
  const trueValues = [];
  const falseValues = [];
  arr.forEach((element) =>
    (fn(element) ? trueValues : falseValues).push(element)
  );
  return [trueValues, falseValues];
};
