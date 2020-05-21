// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let zero = 0;
    nums.forEach((value, i) => {
        console.log(nums[i], nums[zero]);
        if (value !== 0) {
            [nums[i], nums[zero]] = [nums[zero], nums[i]];
            zero++;
        }
        console.log(nums);
    });
};
