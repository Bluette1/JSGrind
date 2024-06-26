const heapifyDown = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, n, largest);
  }
};

const buildMaxHeap = (arr) => {
  const lastParentIndex = Math.floor((arr.length - 2) / 2);

  // Heapify from the last parent index up to the root
  for (let i = lastParentIndex; i >= 0; i -= 1) {
    heapifyDown(arr, arr.length, i);
  }
};

const heapify = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, i, 0);
  }
};

const arr = [2, 13, 10, 3, 7, 11];

const heapSort = (arr) => {
  buildMaxHeap(arr); // Build max heap

  heapify(arr); // Perform heap sort
};

heapSort(arr);
