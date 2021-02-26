const total = (sum, curr) => curr + sum;
const evenFibonacci = (N) => {
  let prev = 1;
  let curr = 2;
  const evens = [];

  while (curr <= N) {
    if (curr % 2 === 0) {
      evens.push(curr);
    }
    const term = prev + curr;
    prev = curr;
    curr = term;
  }

  return evens.reduce(total, 0);
};

evenFibonacci(10);