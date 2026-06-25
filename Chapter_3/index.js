/**
 * @module Chapter_3/index
 */

/**
 * Demonstrates that extracting a method from an object changes `this` binding
 * when used as a Promise callback.
 */

const fn = (msg) => console.log(msg);

if (require.main === module) {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  // this are the same unless (this) is used inside object method
  // myPromise.then(obj.fn);
  myPromise.then(fn);
}
