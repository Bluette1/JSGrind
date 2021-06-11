const chalk = require('chalk');

const { log } = console;

const cols = (inputMatrix) => {
  const firstCol = [];
  const lastCol = [];
  for (let idx = 0; idx < inputMatrix.length; idx += 1) {
    firstCol.push(inputMatrix[idx].shift());
    lastCol.push(inputMatrix[idx].pop());
  }
  return [firstCol, lastCol];
};

const round = (inputMatrix) => {
  const firstRow = inputMatrix.shift();
  const lastRow = inputMatrix.pop().reverse();
  const columns = cols(inputMatrix);
  const firstCol = columns[0].reverse();
  const lastCol = columns[1];

  return firstRow.concat(lastCol, lastRow, firstCol);
};

const spiralCopy = (inputMatrix) => {
  let res = [];
  while (inputMatrix.length > 1 && inputMatrix[0].length > 1) {
    res = res.concat(round(inputMatrix));
  }
  if (inputMatrix.length === 1) {
    res = res.concat(inputMatrix[0]);
  }

  if (inputMatrix.length > 1 && inputMatrix[0].length === 1) {
    for (let idx = 0; idx < inputMatrix.length; idx += 1) {
      res = res.concat(inputMatrix[idx][0]);
    }
  }

  return res;
};

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
log(chalk.bold.cyan(spiralCopy(input)));
