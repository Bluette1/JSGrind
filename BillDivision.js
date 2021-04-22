/**
 * https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/bon-appetit
 *
 * @param {Array} bill
 * @param {Number} k
 * @param {Number} b
 */
const bonAppetit = (bill, k, b) => {
  let bActual = 0;
  for (let i = 0; i < bill.length; i += 1) {
    if (i !== k) {
      bActual += bill[i];
    }
  }

  if (bActual / 2 === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - bActual / 2);
  }
};

bonAppetit([3, 10, 2, 9], 1, 7);