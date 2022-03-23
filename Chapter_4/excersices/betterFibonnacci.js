const fib4 = (n, a = 0, b = 1) => {
  console.log({ n, a, b });
  return n === 0 ? a : fib4(n - 1, b, a + b);
};

const result = fib4(6);

result;

//console.log(fib4(6));

// f(6)
// fib4(5, 0, 1)
// fib4(4, 1, 2)
// fib4(3, 2, 4)
// fib4(2, 4, 8)
