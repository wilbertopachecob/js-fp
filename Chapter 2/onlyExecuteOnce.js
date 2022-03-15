// first approach
var billTheUser = ((clicked) => {
  return (some, sales, data) => {
    if (!clicked) {
      clicked = true;
      console.log("Billing the user...");
      // actually bill the user
    }
  };
})(false);

// billTheUser();
// billTheUser();

//offical response
const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

module.exports = once;
