/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please
 * Soln Tips: Visualizing the solution results in a tree structure.
 * Whenever you see a tree, think recursion.
 * Recursive problems can normally be solved iteratively.
 */

const permutations = (str) => {
  let length = str.length;
  let charactersLeft = str.split("");
  let subStrings = [new Array(length).fill("")];

  while (charactersLeft.length > 0) {
    const newSubStrings = [];
    subStrings.forEach((subStr) => {
      for (let posn = 0; posn < subStr.length; posn += 1) {
        if (!subStr[posn]) {
          const subStrToAdd = [...subStr];
          subStrToAdd[posn] = charactersLeft[0];
          newSubStrings.push(subStrToAdd);
        }
      }
    });
    charactersLeft.shift();
    subStrings = newSubStrings;
  }

  return subStrings;
};

const iterativeNoRepeats = (str) => {
  const subStrings = permutations(str);
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

console.log(iterativeNoRepeats("aab"));
