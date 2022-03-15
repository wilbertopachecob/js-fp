const myEvery = (arr, fn) => arr.reduce((acc, next) => acc && fn(next), true);
