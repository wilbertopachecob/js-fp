const fn = (msg) => console.log(msg);
const obj = {
  fn: (msg) => {
    console.log(msg);
  },
};
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

//this are the same unless (this) is used inside object method
// myPromise.then(obj.fn);
myPromise.then(fn);
