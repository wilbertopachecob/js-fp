const factorial = (n) => {
  if (n < 0) {
    return -1;
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));
