const max = (max, num) => Math.max(max, num);
/**
 * The Sliding Window Maximum Challenge - Brute force version
 * @param {Number} k
 * @param {Array} array
 */
const slidingMaximum = (k, array) => {
  const resMax = [];
  for (let idx = 0; idx < array.length - (k - 1); idx += 1) {
    resMax.push(array.slice(idx, idx + k).reduce(max));
  }
  return resMax;
};

slidingMaximum(3, [1, 3, 5, 7, 9, 2]);
//  => [5, 7, 9, 9]