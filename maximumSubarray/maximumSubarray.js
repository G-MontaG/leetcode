// https://leetcode.com/problems/maximum-subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let bestSum = nums[0];
    let currentSum = nums[0];
    const length = nums.length;
    for (let i = 1; i < length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
};
