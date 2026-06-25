const {
  memoize,
  compose,
  pipeline,
  Maybe,
  Either,
  Try,
  quicksort,
  myMap,
  flatAll,
  shuffle,
  range,
} = require("../dist");

module.exports = {
  memoize: () => {
    const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
    console.log("fib(10) =", fib(10));
    console.log("fib(10) again (cached) =", fib(10));
  },

  compose: () => {
    const toUpper = (s) => s.toUpperCase();
    const exclaim = (s) => `${s}!`;
    const shout = compose(exclaim, toUpper);
    console.log(shout("hello"));
  },

  pipeline: () => {
    const double = (x) => x * 2;
    const addOne = (x) => x + 1;
    console.log("pipeline(3, double, addOne) =", pipeline(double, addOne)(3));
  },

  maybe: () => {
    const plus1 = (x) => x + 1;
    console.log(Maybe.of(2112).map(plus1).map(plus1).toString());
    console.log(Maybe.of(null).map(plus1).map(plus1).toString());
  },

  either: () => {
    const right = Either.of(null, 42);
    const left = Either.of("error", null);
    console.log("Right:", right.toString(), "isLeft:", right.isLeft());
    console.log("Left:", left.toString(), "isLeft:", left.isLeft());
  },

  try: () => {
    const getField = (attr) => (obj) =>
      Try.of(() => obj[attr], "NULL OBJECT");
    console.log(getField(12)(null).toString());
    console.log(getField("a")({ a: 23 }).toString());
  },

  quicksort: () => {
    console.log(quicksort([22, 9, 60, 12, 4, 56]));
  },

  myMap: () => {
    console.log(myMap([1, 2, 3], (x) => x * 2));
  },

  flatAll: () => {
    console.log(flatAll([1, [2, [3, 4]], 5]));
  },

  shuffle: () => {
    console.log(shuffle([1, 2, 3, 4, 5]));
  },

  range: () => {
    console.log(range(1, 6));
  },
};
