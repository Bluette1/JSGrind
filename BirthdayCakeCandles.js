/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 *
 * @param {Array} candles
 */
const birthdayCakeCandles = (candles) => {
  let maxHeight = 0;
  let maxCount = 0;
  for (let i = 0; i < candles.length; i += 1) {
    if (candles[i] > maxHeight) {
      maxHeight = candles[i];
      maxCount = 1;
    } else if (maxHeight === candles[i]) {
      maxCount += 1;
    }
  }
  return maxCount;
};

birthdayCakeCandles([3, 2, 1]);