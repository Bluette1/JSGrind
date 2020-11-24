/*
 * Qn: https://www.hackerrank.com/challenges/drawing-book/

 * Soln: I don't know of a formula beforehand which can be
 * used to solve this problem. For these kinds of problems
 * a trace table can be useful to determine and refine an algorithm.
 * We play around with the variable inputs and study the effect on the output,
 * and eventually come up with a working formula.
 */
function pageCount(n, p) {
  // if they start reading from front page
  //  let the number of pages turned be
  const forwardPages = Math.floor(p / 2);
  // if they start reading from last page
  // let the number of pages turned be
  let backwardPages = Math.floor((n - p) / 2);
  if (n % 2 === 0) {
    backwardPages = Math.floor((n - p + 1) / 2);
  }

  if (forwardPages < backwardPages) {
    return forwardPages;
  }

  return backwardPages;
}

pageCount(4, 2);