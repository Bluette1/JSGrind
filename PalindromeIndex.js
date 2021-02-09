const palindromeIndex = (str) => {
  const { length } = str;
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
    return -1;
  }

  const j = length - 1;
  for (let i = 0; i < length; i += 1) {
    const string = `${str.slice(0, i)}${str.slice(i + 1)}`;
    const stringReversed = `${reversedStr.slice(0, j - i)}${reversedStr.slice(j - i + 1)}`;

    if (string === stringReversed) {
      return i;
    }
  }

  return -1;
};
palindromeIndex('awa');
