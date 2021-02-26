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

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));