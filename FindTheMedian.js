const chalk = require('chalk');

const { log } = console;
/**
 * https://www.hackerrank.com/challenges/find-the-median/problem
 *
 * @param {Array} arr
 */
const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  const medIdx = Math.floor(arr.length / 2);
  return arr[medIdx];
};

log(chalk.hidden(findMedian([0, 1, 2, 4, 6, 5, 3])));