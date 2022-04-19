const range = require('./range');
const generateAlphabet = range('A'.charCodeAt(), 'Z'.charCodeAt() + 1).map(num => String.fromCharCode(num));