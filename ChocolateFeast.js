/**
 * https://www.hackerrank.com/challenges/chocolate-feast/problem
 *
 * @param {number} amount - the initial amount of money
 * @param {number} cost - the cost of one chocolate
 * @param {number} costWrappers- the number of wrappers to turn in for a free bar of chocolate
 * @returns {number} - the maximum number of chocolates that can be eaten
 */
function chocolateFeast(amount, cost, costWrappers) {
  let chocolates = Math.floor(amount / cost);
  let wrappers = chocolates;

  while (wrappers >= costWrappers) {
    // turn wrappers in to get extra chocolates
    const extraChocolates = Math.floor(wrappers / costWrappers);
    chocolates += extraChocolates;
    wrappers = (wrappers % costWrappers) + extraChocolates;
  }
  return chocolates;
}
chocolateFeast(6, 2, 2);