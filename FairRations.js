const allEven = (res, num) => res && (num % 2 === 0);
const allOdd = (res, num) => res && (num % 2 > 0);
const turnEvens = (arr) => {
  let minLoaves = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] % 2 > 0) {
      arr[idx] += 1;
      arr[idx + 1] += 1;
      minLoaves += 2;
    }
  }

  return minLoaves;
};

const findMinLoaves = (arr) => {
  const minLoavesRes = turnEvens(arr);

  const evens = arr.reduce(allEven, true);

  if (minLoavesRes === 0 || !evens) {
    return 'NO';
  }
  return minLoavesRes;
};

// Complete the fairRations function below.
function fairRations(arr) {
  const { length } = arr;
  const total = (sum, num) => num + sum;
  const sum = arr.reduce(total);

  if (sum % 2 > 0) {
    return 'NO';
  }

  const evens = arr.reduce(allEven, true);
  const odds = arr.reduce(allOdd, true);
  if (evens) {
    return 0;
  }

  if (odds && length % 2 > 0) {
    return 'NO';
  }

  if (length === 2) {
    return 'NO';
  }

  return findMinLoaves(arr);
}

const str = '3 8 4 6 1 9 8 8 6 7 5 2 1 5 8 6 1 3 3 9 3 7 8 5 5 4 7 2 9 8 7 7 4 4 7 1 5 3 10 7 10 10 9 1 9 10 1 10 2 7 2 10 2 7 8 10 3 8 1 3 4 1 6 1 5 3 10 7 6 10 6 6 1 6 3 9 6 8 4 9 5 3 7 7 3 5 4 2 7 5 6 4 3 10 4 5 2 4 7 5 6 10 3 4 8 4 10 7 8 9 1 10 2 6 4 10 1 2 6 3 6 4 9 6 6 2 8 8 5 9 7 4 2 10 10 6 4 7 2 8 4 5 6 1 1 7 3 5 2 7 10 1 6 2 2 9 3 1 10 1 2 5 5 5 4 9 9 7 9 2 6 4 2 10 9 2 8 8 10 9 1 7 3 3 7 4 9 3 3 3 1 6 5 2 7 9 4 1 4 1 10 7 8 6 4 6 5 6 1 1 7 6 1 8 5 3 3 4 5 7 10 3 10 9 8 10 9 2 3 9 6 3 3 10 5 3 3 1 10 8 6 5 8 5 8 7 5 5 9 6 1 9 5 2 8 8 1 8 7 1 7 3 4 3 7 7 5 4 7 10 7 3 3 9 2 4 2 7 1 6 6 3 2 1 5 4 6 7 8 8 9 10 5 1 1 10 3 7 3 5 2 6 4 7 4 6 8 10 10 4 3 10 7 1 5 1 6 1 5 8 6 10 2 4 9 10 2 1 8 9 1 6 4 4 9 5 9 3 2 3 4 8 9 5 6 10 3 1 3 4 7 4 8 9 9 8 10 4 3 6 7 1 9 6 8 4 7 6 8 9 2 4 6 8 1 8 7 9 5 7 9 10 4 2 5 3 2 2 8 2 10 10 9 1 10 10 7 6 9 2 1 4 3 4 5 9 8 6 9 4 3 10 6 8 10 2 4 2 9 5 7 4 7 6 10 3 5 8 2 5 3 8 8 2 10 4 3 6 9 3 5 10 10 8 6 4 6 1 10 9 3 4 7 3 7 10 7 4 2 5 3 9 2 6 6 4 4 2 4 3 2 10 1 6 7 5 2 8 2 9 4 3 4 9 3 4 9 6 8 5 5 8 3 6 8 7 6 9 9 3 1 8 9 5 10 5 4 9 9 3 6 8 10 1 9 6 7 5 3 10 1 2 9 4 4 4 6 3 6 9 2 5 9 8 6 8 6 7 5 6 3 10 1 2 2 5 6 9 5 6 5 10 5 2 7 1 2 10 7 7 7 1 1 7 6 4 5 7 4 10 6 4 5 9 3 5 10 7 1 10 1 9 6 3 5 6 5 5 6 2 9 4 8 8 10 1 3 6 2 2 2 2 9 3 7 6 6 1 1 2 10 5 9 2 7 4 8 1 4 9 6 8 7 6 7 9 8 4 2 1 3 10 7 2 7 8 4 1 10 6 9 7 4 7 8 10 3 4 6 10 7 10 7 2 6 1 9 6 9 4 6 2 4 9 6 5 8 4 10 4 5 5 10 4 5 8 7 2 8 2 1 6 9 3 8 3 4 5 5 3 7 10 5 7 9 2 6 7 9 3 5 8 4 4 2 6 6 1 9 2 9 5 7 4 4 7 4 2 8 1 6 6 9 2 2 4 7 5 3 2 8 5 6 10 1 1 3 5 5 1 5 4 4 3 10 5 1 10 1 7 2 8 9 3 6 6 2 7 3 6 6 4 7 9 10 2 3 3 10 9 7 5 7 5 5 10 5 4 10 2 5 6 6 7 7 3 2 9 2 9 1 1 2 6 8 1 2 9 10 8 2 7 10 9 2 1 5 4 8 2 4 9 1 1 7 4 10 3 1 9 3 7 7 8 8 5 1 4 1 1 10 1 7 9 5 1 8 7 9 10 1 7 2 10 5 4 1 7 8 5 8 9 9 6 1 8 7 3 9 10 6 5 9 2 7 3 5 1 1 5 6 10 9 5 10 4 4 5 9 6 4 3 2 2 2 6 6 5 1 5 2 1 3 6 1 5 8 9 9 5 3 10 6 8 2 4 3 8 4 10 3 10 5 1 10 1 9 8 7 1 6 6 4 2 1 3 6 8 7 7 10 5 8 7 7 4 8 8 1 4 5 3 10 1 7 1 7 6 10 4 7 8 5 3 2 3 5 9 9 9 10 9 9 9 8 1 2 6 9 9 7 8 1 5 9 8 6 9 2 6';
const strArr = str.split(' ');
const arrStr = strArr.map(str => parseInt(str, 10));
fairRations(arrStr);
