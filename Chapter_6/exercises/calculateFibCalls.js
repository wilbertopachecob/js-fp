const calculateFibCalls = (num) => {
  let calc = 0;
  const fibonacci = (num) => {
    calc++;
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  fibonacci(num);
  return calc;
};

console.log(calculateFibCalls(6));
