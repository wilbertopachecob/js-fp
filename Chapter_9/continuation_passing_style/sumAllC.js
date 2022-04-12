const trampoline = (fn) => {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
};

const sumAllC = (n, cont) =>
  n === 0 ? cont(0) : sumAllC(n - 1, (v) => cont(v + n));

const sumAllT = (n, cont) =>
  n === 0 ? () => cont(0) : () => sumAllT(n - 1, (v) => () => cont(v + n));

const sumAll2 = (n) => trampoline(sumAllT(n, (x) => x));

// sumAllC(10000, console.log); // RangeError: Maximum call stack size exceeded
console.log(sumAll2(10000));
