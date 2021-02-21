// https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);
  /**
   * Use pivotIndex as the seperater. If k is smaller than the length of the
   * right side of the array, the target is in the right side of the array.
   * If k is larger, the target is in the left side of the array.
   */
  if (k < arr.length - pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  } else if (k > arr.length - pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }
  // pivotIndex is the index of the target if k equals to the length of the
  // right side of the array.
  return arr[pivotIndex];
}

function partition(arr, start, end) {
  /**
   * Use the last element as pivot for simplicity. Randomized pivot
   * is a better way to avoid worst case where the the largest or the smallest
   * element is always selected.
   */
  const pivot = arr[end];
  let i = start;
  let j = end - 1;
  // move all numbers smaller than pivot to the left and larger to the right
  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }
  // Swap pivot value to the position so that all numbers larger than pivot value
  // is on the right, and smaller on the left.
  swap(arr, i, end);
  // return the final index where the pivot value is.
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Alternative approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  let res = [];
  let map = new Map();

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  let sortedArray = [...map.entries()].sort((a, b) => b[0] - a[0]);

  let i = 0;
  while (k > 0) {
    k = k - sortedArray[i][1];
    i++;
  }

  // i - 1 because the current index pointed to the number
  // where we exhausted k counter. k could be negative.
  return sortedArray[i - 1][0];
};
