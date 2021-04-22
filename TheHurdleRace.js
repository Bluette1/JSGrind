/* https://www.hackerrank.com/challenges/the-hurdle-race/problem

 * Find the maximum hurdle height, and compare it to the maximum height
 * the athlete is able to jump. If it is less we determine how much is missing
 * and needs to be added by subtracting the current maximum height
 * from the maximum hurdle height.
 */

const hurdleRace = (k, height) => {
  const maxHeight = Math.max(...height);
  if (maxHeight > k) {
    return maxHeight - k;
  }
  return 0;
};

hurdleRace(7, [2, 5, 4, 5, 2]);