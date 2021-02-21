// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const findFirstIndex = (nums, low, high, target) => {
  let res = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      res = mid;
      high = mid - 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
};

const findLastIndex = (nums, low, high, target) => {
  let res = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      res = mid;
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  const first = findFirstIndex(nums, low, high, target);
  const second = findLastIndex(nums, low, high, target);

  return [first, second];
};
