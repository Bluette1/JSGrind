const joinChars = (max, char) => {
  let resStr = '';
  while (max > 0) {
    resStr += char;
    max -= 1;
  }
  return resStr;
};

const concatLine = (spaces, hashes) => joinChars(spaces, ' ') + joinChars(hashes, '#');

const staircase = (num) => {
  let n = 1;
  const max = num;
  while (n <= max) {
    console.log(concatLine(max - n, n));
    n += 1;
  }
};

staircase(6);
