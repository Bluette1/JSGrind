/**
 * https://www.hackerrank.com/challenges/halloween-sale/problem?h_r
 *
 * @param {*} p - the starting price
 * @param {*} d - the amount the price drops by every month
 * @param {*} m - the minimum threshhold price
 * @param {*} s - the amount of money available to buy games
 */
function howManyGames(p, d, m, s) {
  if (s < p) {
    return 0;
  }
  if (Math.floor(s / p) === 1) {
    return 1;
  }
  // Let the number of games before the threshhold is reached be n.

  const n = 1 + Math.floor((p - m) / d);

  // Let `l` be the last term of the arithmetic series of games before
  // the threshhold is reached.
  const l = p + (n - 1) * -d;

  // Let `sum` be the sum of the arithmetic series of
  // games before the threshhold is reached.
  const sum = (p + l) * (n / 2);

  // Let the number of games after the threshhold is reached be n.
  const q = Math.floor((s - sum) / m);

  // Total number of games bought:
  return q + n;
}
howManyGames(20, 3, 6, 80);