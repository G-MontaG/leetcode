// https://leetcode.com/problems/missing-number/
const missingNumber = (nums) => {
  let sum = 0,
    total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
};
