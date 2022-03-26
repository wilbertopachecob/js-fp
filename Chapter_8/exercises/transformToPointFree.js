const compose = require("../compose");

// function getSomeResults(things) {
//   return sort(group(filter(select(things))));
// }

const getSomeResults = compose(sort, group, filter, select);
