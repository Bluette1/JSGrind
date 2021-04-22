/**
  * https://www.hackerrank.com/challenges/equalize-the-array/problem
  * Use bin/bucket sort to sort and count how many there are of each integer
  * in the array. A little intuition  applied here will
  * show that number of elements that need to be deleted are the result
  * of the array length minus the maximum frequency.
  * @param {Array} arr
  */
const equalizeArray = arr => {
  const { length } = arr;
  const counts = Array(101).fill(0);
  for (let i = 0; i < length; i += 1) {
    counts[arr[i]] += 1;
  }
  const maxCounts = Math.max(...counts);
  return length - maxCounts;
};
equalizeArray([3, 3, 2, 1, 3]);
