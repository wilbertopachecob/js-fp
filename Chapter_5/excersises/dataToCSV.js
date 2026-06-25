/**
 * @module dataToCSV
 */

/**
 * Converts a 2D array into CSV text with newline-separated rows.
 *
 * @param {Array<Array>} arr - Rows of values to convert.
 * @returns {string} CSV string.
 * @example
 * dataToCSV([[1, 2], [3, 4]]); // "1,2\n3,4\n"
 */
const dataToCSV = (arr) =>
  arr.reduce((acc, next) => acc.concat(next.join(",").concat("\n")), "");

module.exports = dataToCSV;

if (require.main === module) {
  const myData = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  console.log(dataToCSV(myData));
}
