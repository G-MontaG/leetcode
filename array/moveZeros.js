// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let lastZeroRef = 0;
  nums.forEach((value, i) => {
    if (value !== 0) {
      [nums[i], nums[lastZeroRef]] = [nums[lastZeroRef], nums[i]];
      lastZeroRef++;
    }
  });
};
