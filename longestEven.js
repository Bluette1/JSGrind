const longestEven = (sentence) => {
  let maxEven = '';
  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i += 1) {
    chars = sentence[i].length;
    if (chars % 2 === 0 && chars > maxEven.length) {
      maxEven = sentence[i];
    }
  }
  return maxEven;
}

longestEven('Time to write great code');