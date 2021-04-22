/**
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 *
 * @param {number} numOfChapters - number of chapters
 * @param {number} problemsPerPage - number of problems on each page
 * @param {array} arr - an array of the number of problems in each chapter
 * @returns specialPages - the number of special pages
 */
const workbook = (numOfChapters, problemsPerPage, arr) => {
  // special if its index (within a chapter) is the same as the page number
  let specialPages = 0;
  let page = 1;
  for (let idx = 0; idx < numOfChapters; idx += 1) {
    let numProblems = arr[idx];
    let startIdx = 1;
    const pagesInChapter = Math.ceil(arr[idx] / problemsPerPage);
    let problemsOnPage;
    if (numProblems >= problemsPerPage) {
      problemsOnPage = problemsPerPage;
      numProblems -= problemsPerPage;
    } else {
      problemsOnPage = numProblems;
    }
    let chapterPage = 1;
    let endIdx = startIdx + problemsOnPage - 1;
    while (chapterPage <= pagesInChapter) {
      if (page >= startIdx && page <= endIdx) {
        specialPages += 1;
      }
      startIdx = endIdx + 1;
      if (numProblems >= problemsPerPage) {
        problemsOnPage = problemsPerPage;
        numProblems -= problemsPerPage;
      } else {
        problemsOnPage = numProblems;
      }
      endIdx = startIdx + problemsOnPage - 1;
      page += 1;
      chapterPage += 1;
    }
  }

  return specialPages;
};

workbook(5, 3, [4, 2, 6, 1, 10]);