/**
Absolute Value Sort
Given an array of integers arr, write a function absSort(arr),
that sorts the array according to the absolute values of the numbers in arr.
If two numbers have the same absolute value, sort them according to sign,
where the negative numbers come before the positive numbers.

Examples:

input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]
Constraints:

[time limit] 5000ms
[input] array.integer arr
0 ≤ arr.length ≤ 10
[output] array.integer
*/

/**
  @param arr: integer[]
  @return: integer[]
*/
const absSort = (arr) => {
  const compareNumbers = (a, b) => {
    if (Math.abs(a) === Math.abs(b)) {
      if (a < b) {
        return a - b;
      }
    }
    return Math.abs(a) - Math.abs(b);
  };
  arr.sort(compareNumbers);
};

const arr = [2, -7, -2, -2, 0];
absSort(arr);
