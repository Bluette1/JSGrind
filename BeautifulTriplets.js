/**
 * https://www.hackerrank.com/challenges/beautiful-triplets/problem
 *
 * @param {number} d
 * @param {array} arr
 */
const beautifulTriplets = (d, arr) => {
  const { length } = arr;
  const MAX_LEN = 20001;
  const counts = Array(MAX_LEN).fill(0);
  for (let i = 0; i < length; i += 1) {
    counts[arr[i]] += 1;
  }

  // Walk through the array summing up the values
  let sum = 0;
  for (let i = arr[0]; i < MAX_LEN; i += 1) {
    if (counts[i + d] > 0 && counts[i + 2 * d] > 0) {
      sum += counts[i];
    }
  }
  return sum;
};
// const d = 1;
// const arr = [2, 2, 3, 4, 5];
// const arr = [1, 2, 4, 5, 7, 8, 10];
// const d = 3;
// const d = 2;
// const arr = [2, 2, 3, 4, 5, 6];
const d = 3;
const arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];
console.log(beautifulTriplets(d, arr));