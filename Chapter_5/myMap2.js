const myMap = (arr, fn) => arr.reduce((acc, next) => acc.concat(fn(next)), []);
