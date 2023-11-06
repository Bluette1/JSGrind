/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
 * Soln Tips: Visualizing the solution results in a tree structure.
 * Whenever you see a tree, think recursion.
 * Recursive problems can normally be solved iteratively.
 */

// eslint-disable-next-line no-unused-vars
const permutations = (str) => {
  const { length } = str;
  const charactersLeft = str.split('');
  let subStrings = [new Array(length).fill('')];

  while (charactersLeft.length > 0) {
    const newSubStrings = [];
    subStrings.forEach((subStr) => {
      for (let posn = 0; posn < subStr.length; posn += 1) {
        if (!subStr[posn]) {
          const subStrToAdd = [...subStr];
          const [characterToAdd] = charactersLeft;
          subStrToAdd[posn] = characterToAdd;
          newSubStrings.push(subStrToAdd);
        }
      }
    });
    charactersLeft.shift();
    subStrings = newSubStrings;
  }

  return subStrings;
};

const permutate = (str) => {
  const charactersLeft = str.split('');
  const { length } = str;
  const queue = [new Array(length).fill('')];
  let n = 0;
  let times = queue.length;

  while (charactersLeft.length > 0) {
    // Get item from queue
    // Create children if possible, if not push to substrings
    const subStr = queue.shift();
    n += 1;

    for (let posn = 0; posn < length; posn += 1) {
      if (!subStr[posn]) {
        const subStrToAdd = [...subStr];
        const [characterToAdd] = charactersLeft;
        subStrToAdd[posn] = characterToAdd;
        queue.push(subStrToAdd);
      }
    }

    if (n === times) {
      charactersLeft.shift();
      times = queue.length;
      n = 0;
    }
  }
  return queue;
};

const iterativeNoRepeats = (str) => {
  const subStrings = permutate(str);
  // const subStrings = permutations(str);
  const res = [];
  subStrings.forEach((subStr) => {
    let hasRepeats = false;
    for (let posn = 0; posn < subStr.length - 1; posn += 1) {
      if (subStr[posn] === subStr[posn + 1]) {
        hasRepeats = true;
        break;
      }
    }
    if (!hasRepeats) {
      res.push(subStr);
    }
  });
  return res.length;
};

iterativeNoRepeats('aab');
