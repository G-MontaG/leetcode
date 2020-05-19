// https://leetcode.com/problems/single-number
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    return nums.reduce((prev, curr) => prev ^ curr, 0);
};
