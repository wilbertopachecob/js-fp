const climbingStair = (stepAmount, steps) => {
  if (stepAmount < 0) {
    return 0; // no way of paying negative amounts
  } else if (stepAmount == 0) {
    return 1; // one single way of paying $0: with no bills
  } else if (steps.length == 0) {
    // here, n>0
    return 0; // no bills? no way of paying
  } else {
    return (
      climbingStair(stepAmount, steps.slice(1)) +
      climbingStair(stepAmount - steps[0], steps)
    );
  }
};

console.log(climbingStair(4, [2, 1]));

// const makeChange = (n, bills) => {
//   if (n < 0) {
//     return 0; // no way of paying negative amounts
//   } else if (n == 0) {
//     return 1; // one single way of paying $0: with no bills
//   } else if (bills.length == 0) {
//     // here, n>0
//     return 0; // no bills? no way of paying
//   } else {
//     return makeChange(n, bills.slice(1)) + makeChange(n - bills[0], bills);
//   }
// };
