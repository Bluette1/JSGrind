const insertionSort1 = (n, arr) => {
  const temp = arr[n - 1];
  let inserted = false;
  for (let i = n - 2; i >= 0; i -= 1) {
    if (arr[i] > temp) {
      arr[i + 1] = arr[i];
    } else {
      arr[i + 1] = temp;
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    arr[0] = temp;
  }
};
const insertionSort2 = (n, arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    insertionSort1(i + 1, arr);
    console.log(arr.join(' '));
  }
};

insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]);
