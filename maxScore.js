const heapifyUp = (nums, index) => {
  // Heapify from the last parent index up to the root
  while (index > 0 && nums[Math.floor((index - 1) / 2)] < nums[index]) {
    [nums[Math.floor((index - 1) / 2)], nums[index]] = [
      nums[index],
      nums[Math.floor((index - 1) / 2)],
    ];
    index = Math.floor((index - 1) / 2);
  }
};

const heapifyDown = (nums, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && nums[left] > nums[largest]) {
    largest = left;
  }

  if (right < n && nums[right] > nums[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]];
    heapifyDown(nums, n, largest);
  }
};

const buildMaxHeap = (nums) => {
  const lastParentIndex = Math.floor((nums.length - 2) / 2);

  // Heapify down from the last parent index(non-leaf node) up to the root
  for (let i = lastParentIndex; i >= 0; i -= 1) {
    heapifyDown(nums, nums.length, i);
  }
};

const nums = [2, 13, 10, 3, 7, 11];

const insert = (nums, value) => {
  nums.push(value);

  heapifyUp(nums, nums.length - 1);
};

const remove = (nums) => {
  [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
  nums.pop();
  heapifyDown(nums, nums.length, 0);
};

const maxScore = (nums, k) => {
  // Steps:
  // - Choose any number
  // - Calculate the cieling of a third of that number
  // - Replace the number in the nums array with this result
  // - Add that number to max score

  // Perfect application for a max heap

  buildMaxHeap(nums); // Build max heap

  let maxValue = 0;

  for (i = 0; i < k; i++) {
    const score = nums[0]; // Retrieve max value

    maxValue += score;

    // Remove the max value from the heap
    remove(nums);

    // Insert the new value to the heap
    const value = Math.ceil(score / 3);
    insert(nums, value);
  }

  return maxValue;
};

console.log(maxScore([10, 10, 10, 10, 10], 5));
