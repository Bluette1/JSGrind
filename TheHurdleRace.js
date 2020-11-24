// Complete the hurdleRace function below.
const hurdleRace = (k, height) => {
  const maxHeight = Math.max(...height);
  if (maxHeight > k) {
    return maxHeight - k;
  }
  return 0;
};

hurdleRace(7, [2, 5, 4, 5, 2]);