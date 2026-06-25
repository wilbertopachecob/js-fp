/**
 * @module fakeApi
 */

/**
 * Resolves with `value` after `delay` milliseconds.
 *
 * @param {number} delay - Delay in milliseconds.
 * @param {*} value - Value to resolve with.
 * @returns {Promise<*>} Promise that resolves after the delay.
 * @example
 * await fakeAPI(100, 42); // 42
 */
const fakeAPI = (delay, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));

module.exports = fakeAPI;
