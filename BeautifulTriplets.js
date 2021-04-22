/**
 * https://www.hackerrank.com/challenges/beautiful-triplets/problem
 *
 * @param {number} dist - the triplet distance between
 * @param {array} arr - the array
 * @returns {number} triplets - the sum of beautiful triplets
 */
const beautifulTriplets = (dist, arr) => {
  const { length } = arr;
  const MAX_LEN = 20001;
  const counts = Array(MAX_LEN).fill(0);
  for (let i = 0; i < length; i += 1) {
    counts[arr[i]] += 1;
  }

  // Walk through the array summing up the values
  let sum = 0;
  for (let i = arr[0]; i < MAX_LEN; i += 1) {
    if (counts[i + dist] > 0 && counts[i + 2 * dist] > 0) {
      sum += counts[i];
    }
  }
  return sum;
};
// const dist= 1;
// const arr = [2, 2, 3, 4, 5];
// const arr = [1, 2, 4, 5, 7, 8, 10];
// const dist= 3;
// const dist= 2;
// const arr = [2, 2, 3, 4, 5, 6];
const dist = 3;
const arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];
beautifulTriplets(dist, arr);