/**
 * https://www.hackerrank.com/challenges/manasa-and-stones/problem
 *
 * @param {number} n
 * @param {number} a
 * @param {number} b
 */
const stones = (n, a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const arrRes = [];
  const diff = max - min;
  let value = min * (n - 1);
  arrRes.push(value);

  while (value < max * (n - 1)) {
    value += diff;
    arrRes.push(value);
  }
  return arrRes;
};

stones(4, 10, 100);