const mySome = (arr, fn) => arr.reduce((acc, next) => acc || fn(next), false);
