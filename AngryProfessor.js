/**
 * Qn: https://www.hackerrank.com/challenges/angry-professor/problem
 *
 * Soln: If the student's:
 *        arrivalTime > 0: they're late
 *        arrivalTime <= 0: they're early
 *   There must be at least a threshold number of early students,
 *   otherwise the lesson is cancelled.
 */
const angryProfessor = (threshold, arr) => {
  let countEarly = 0;
  let result = 'YES';
  for (let i = 0; i < arr.length; i += 1) {
    const arrivalTime = arr[i];
    if (arrivalTime >= 0) {
      countEarly += 1;
      if (countEarly >= threshold) {
        result = 'NO';
        break;
      }
    }
  }
  return result;
};

angryProfessor([-1, -3, 4, 2]);