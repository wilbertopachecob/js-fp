const composeRecursive = (...fns) => {
  return fns.length === 1
    ? fns[0]
    : (...args) => composeRecursive(...fns.slice(0, -1))(fns.pop()(...args));
};

module.exports = composeRecursive;

// const plus1 = (x) => x + 1;
// const by10 = (x) => x * 10;

// const fn = composeRecursive(plus1, by10);
// // console.log(typeof fn);
// console.log(fn(2));
