/**
 * @module Chapter_9/pipelineRecursive
 */

/**
 * Pipes functions left-to-right using recursion.
 *
 * @param {Function} first - First function in the pipeline.
 * @param {...Function} rest - Remaining functions.
 * @returns {Function} Piped function.
 * @example
 * const fn = pipelineRecursive((x) => x + 1, (x) => x * 10);
 * fn(2); // 30
 */
const pipelineRecursive = (first, ...rest) =>
  rest.length === 0
    ? first
    : (...args) => pipelineRecursive(...rest)(first(...args));

module.exports = pipelineRecursive;
