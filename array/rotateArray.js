// https://leetcode.com/problems/rotate-array/
// array should be rotated in-place
const reverse = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    const length = nums.length;
    k = k % length;
    reverse(nums, 0, length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, length - 1);
};

