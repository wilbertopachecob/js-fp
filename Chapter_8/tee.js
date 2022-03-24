const tap = require("./tap");

//debugging pipeline
tap;
const tee = (arg, logger = console.log.bind(console)) => (logger(arg), arg);
const tee2 = tap(console.log);

module.exports = tee;

//ex
// console.log(
//   pipeline2(getDir, tee, filterOdt, tee, count)("/home/fkereki/Documents")
// );
