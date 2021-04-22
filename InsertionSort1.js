const insertionSort1 = (n, arr) => {
  const temp = arr[n - 1];
  let inserted = false;
  for (let i = n - 2; i >= 0; i -= 1) {
    if (arr[i] > temp) {
      arr[i + 1] = arr[i];
      console.log(arr.join(' '));
    } else {
      arr[i + 1] = temp;
      console.log(arr.join(' '));
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    arr[0] = temp;
    console.log(arr.join(' '));
  }
};
insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);