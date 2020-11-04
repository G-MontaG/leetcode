// https://leetcode.com/problems/sort-colors/
const swap = (i, j, nums) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let red = 0;
  let white = 0;
  let blue = nums.length - 1;

  while (white <= blue) {
    if (nums[white] === 0) {
      swap(white, red, nums);
      red++;
      white++;
    } else if (nums[white] === 2) {
      swap(white, blue, nums);
      blue--;
    } else {
      white++;
    }
  }
};
