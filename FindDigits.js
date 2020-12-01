/**
 * https://www.hackerrank.com/challenges/find-digits/problem
 * @param {Number} num 
 */

const findDigits = (num) => {
  const origNum = num;
  let divisors = 0;
  while (num !== 0) {
    const digit = num % 10;
    if (origNum % digit === 0) {
      divisors += 1;
    }
    num = Math.floor(num / 10);
  }
  return divisors;
};

findDigits(12);
