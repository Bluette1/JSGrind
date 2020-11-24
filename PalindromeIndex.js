const palindrome = str => str === str.split('').reverse().join('');
const newString = (str, idx) => `${str.slice(0, idx)}${str.slice(idx + 1)}`;
const palindromeIndex = (str) => {
  str = str.toLowerCase();
  if (palindrome(str)) {
    return -1;
  }

  for (let i = 0; i < str.length; i += 1) {
    const newStr = newString(str, i);
    if (palindrome(newStr)) {
      return true;
    }
  }
  return false;
};
palindromeIndex('awa');