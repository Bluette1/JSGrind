const countChars = (str, value) => {
  const regExp = new RegExp(value, 'gi');
  return (str.match(regExp) || []).length;
};

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  if (word1 === word2) {
    return true;
  }
  const word1Arr = word1.split('');

  for (let i = 0; i < word1Arr.length; i += 1) {
    if (countChars(word1, word1Arr[i]) !== countChars(word2, word1Arr[i])) {
      return false;
    }
  }
  return true;
};

/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */
const funWithAnagrams = (text) => {
  const words = [];

  for (let i = 0; i < text.length; i += 1) {
    const currentStr = text[i];
    // Do the anagram test
    let isNotAnagram = true;
    for (let j = 0; j < words.length; j += 1) {
      if (isAnagram(words[j], currentStr)) {
        isNotAnagram = false;
        break;
      }
    }
    if (isNotAnagram) {
      words.push(currentStr);
    }
  }
  words.sort();
  return words;
};

funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']);
