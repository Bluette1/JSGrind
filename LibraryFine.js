/**
 * https://www.hackerrank.com/challenges/library-fine/problem
 * 
 * This question is about branching(if-else) statements,
 * and applying a bit of logic, and checking all the possible cases.
 * 
 * @param {Number} d1
 * @param {Number} m1
 * @param {Number} y1
 * @param {Number} d2
 * @param {Number} m2
 * @param {Number} y2
 */
const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  if (y1 > y2) {
    return 10000;
  }

  if (m1 > m2 && y1 === y2) {
    return (m1 - m2) * 500;
  }
  if (d1 > d2 && m1 === m2 && y1 === y2) {
    return (d1 - d2) * 15;
  }

  return 0;
};

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));