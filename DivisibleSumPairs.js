/**
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 *
 * @param {*} n - the length of array
 * @param {*} k - the divisor
 * @param {*} ar - the array of integers
 */
const divisibleSumPairs = (n, k, ar) => {
  let sumPairs = 0;
  for (let i = 0; i < ar.length; i += 1) {
    for (let j = i + 1; j < ar.length; j += 1) {
      if ((ar[i] + ar[j]) % k === 0) {
        sumPairs += 1;
      }
    }
  }

  return sumPairs;
};

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);