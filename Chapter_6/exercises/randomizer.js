/**
 * @module randomizer
 */

/**
 * Returns a function that picks a random item from `arr`, avoiding repeats.
 *
 * @param {Array<Function>} arr - Functions to call at random.
 * @returns {Function} Function that invokes a random item from `arr`.
 * @example
 * const pick = randomizer([() => 1, () => 2]);
 * pick(); // calls either function at random
 */
const randomizer = (arr) => {
  let lastCalledIndex;
  const getRandomIndex = () => Math.floor(Math.random() * arr.length);
  return () => {
    let currentIndex = getRandomIndex();
    while (currentIndex === lastCalledIndex) {
      currentIndex = getRandomIndex();
    }
    lastCalledIndex = currentIndex;
    arr[currentIndex]();
  };
};

module.exports = randomizer;
