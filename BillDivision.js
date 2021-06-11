const chalk = require('chalk');

const { log } = console;

/**
 * https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/bon-appetit
 *
 * @param {Array} bill
 * @param {Number} k
 * @param {Number} b
 */
const bonAppetit = (bill, k, b) => {
  let bActual = 0;
  for (let i = 0; i < bill.length; i += 1) {
    if (i !== k) {
      bActual += bill[i];
    }
  }

  if (bActual / 2 === b) {
    log(chalk.bold.blueBright.underline('Bon Appetit'));
  } else {
    log(chalk.bgRed.bold.underline(b - bActual / 2));
  }
};

bonAppetit([3, 10, 2, 9], 1, 7);