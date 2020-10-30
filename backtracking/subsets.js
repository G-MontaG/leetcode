// https://leetcode.com/problems/subsets/
const dfs = (current, index, nums, result) => {
  result.push(current);
  for (let i = index; i < nums.length; i++) {
    dfs(current.concat(nums[i]), i + 1, nums, result);
  }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  let result = [];
  dfs([], 0, nums, result);
  return result;
};
