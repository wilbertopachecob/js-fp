const fakeAPI = (delay, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));

module.exports = fakeAPI;
