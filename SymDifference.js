const chalk = require('chalk');

const { log } = console;

const removeDuplicates = (array) => {
  const distinct = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (!distinct.includes(array[idx])) {
      distinct.push(array[idx]);
    }
  }
  return distinct;
};

const symDiff = (setA, setB) => {
  const setAOnly = setA.filter(num => !setB.includes(num));
  const setBOnly = setB.filter(num => !setA.includes(num));
  return [...setAOnly, ...setBOnly];
};

const resSymDiff = (args) => {
  const size = args.length;
  if (size === 2) {
    return symDiff(args[0], args[1]);
  }
  const [a, b, ...rest] = args;
  return resSymDiff([symDiff(a, b), ...rest]);
};

/**
 *
 * @param  {...any} args
 * @returns - the symmetric difference between the given sets
 * @see https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 */
const sym = (...args) => removeDuplicates(resSymDiff(args));

const ans = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
log(chalk.underline.bold.greenBright(removeDuplicates(ans)));