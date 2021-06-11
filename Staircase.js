const chalk = require('chalk');

const { log } = console;

const joinChars = (max, char) => {
  let resStr = '';
  while (max > 0) {
    resStr += char;
    max -= 1;
  }
  return resStr;
};

const concatLine = (spaces, hashes) => joinChars(spaces, ' ') + joinChars(hashes, '#');

/**
 * https://www.hackerrank.com/challenges/staircase/problem
 *
 * @param {Number} num
 */
const staircase = (num) => {
  let n = 1;
  const max = num;
  while (n <= max) {
    log(chalk.italic.bgCyanBright(concatLine(max - n, n)));
    n += 1;
  }
};

staircase(6);
