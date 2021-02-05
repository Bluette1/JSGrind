const charCount = (str, letter) => {
  let letterCount = 0;
  for (let position = 0; position < str.length; position += 1) {
    if (str.charAt(position) === letter) {
      letterCount += 1;
    }
  }
  return letterCount;
};

const checkPalindromeAnagram = (s) => {
  const counts = [];
  const changed = [];
  for (let i = 0; i < s.length; i += 1) {
    const letter = s.charAt(i);
    if (!changed.includes(letter)) {
      counts.push(charCount(s, letter));
      changed.push(letter);
    }
  }

  let oddCounts = 0;
  for (let i = 0; i < counts.length; i += 1) {
    if (counts[i] % 2 !== 0) {
      oddCounts += 1;
    }
  }
  return oddCounts < 2;
};

/**
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 * @param {string} s 
 */

const gameOfThrones = (s) => {
  if (checkPalindromeAnagram(s)) {
    return 'YES';
  }
  return 'NO';
};
gameOfThrones('aaabbbb');
