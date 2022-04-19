const range = require('./range');
const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1);