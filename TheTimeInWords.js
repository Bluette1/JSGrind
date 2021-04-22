/**
 * https://www.hackerrank.com/challenges/the-time-in-words
 *
 * @param {number} hr
 * @param {number} min
 * @returns {string} - the time in words
 */
function timeInWords(hr, min) {
  const wordMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
  };

  const minutes = (num) => {
    if (num > 1) {
      return 'minutes';
    }
    return 'minute';
  };
  const toWord = (num) => {
    if (num <= 20 || num === 30) {
      return wordMap[num];
    }
    return `${wordMap[20]} ${wordMap[num % 20]}`;
  };
  if (min === 0) {
    return `${toWord(hr)} o' clock`;
  }

  if (min === 15) {
    return `quarter past ${toWord(hr)}`;
  }

  if (min < 30) {
    return `${toWord(min)} ${minutes(min)} past ${toWord(hr)}`;
  }

  if (min === 30) {
    return `half past ${toWord(hr)}`;
  }

  if (min === 45) {
    return `quarter to ${toWord(hr + 1)}`;
  }
  return `${toWord(60 - min)} ${minutes(60 - min)} to ${toWord(hr + 1)}`;
}
timeInWords(7, 15);