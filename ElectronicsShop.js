/* https: //www.hackerrank.com/challenges/electronics-shop/problem

 * A double for loop can be used to walk through all the different
 * combinations of prices for the keyboards and drives,
 *  and then retrieve the maximum cost.
 */
function getMoneySpent(keyboards, drives, budget) {
  keyboards = keyboards.sort;
  drives = drives.sort;

  let maxCost = -1;

  for (let i = keyboards.length - 1; i >= 0; i -= 1) {
    for (let j = drives.length - 1; j >= 0; j -= 1) {
      const cost = keyboards[i] + drives[j];
      if (cost <= budget && maxCost < cost) {
        maxCost = cost;
      }
    }
  }

  return maxCost;
}
getMoneySpent([], [], 60);