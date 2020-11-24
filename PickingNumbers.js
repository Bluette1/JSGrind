/* https://www.hackerrank.com/challenges/picking - numbers/problem
 *
 * Use bin/bucket sort to sort and count how many there are of each element
 * in the array. Then loop through the frequencies array to find
 * the largest sum of any two adjacent frequencies.
 */
function pickingNumbers(arr) {
  const LEN = arr.length;
  const counts = [].fill.call({ length: LEN }, 0);
  let result = -1;

  for (let i = 0; i < LEN; i += 1) {
    const idx = arr[i];
    counts[idx] += 1;
  }

  for (let i = 1; i < LEN; i += 1) {
    result = Math.max(result, counts[i] + counts[i - 1]);
  }
  return result;
}

pickingNumbers([4, 6, 5, 3, 3, 1]);