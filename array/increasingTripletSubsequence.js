// https://leetcode.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  let min = nums[0];
  let secondMinUpdatedAfterMin = Infinity;
  for (let val of nums) {
    if (val <= min) {
      min = val;
    } else if (val <= secondMinUpdatedAfterMin) {
      secondMinUpdatedAfterMin = val;
    } else {
      // min < secondMinUpdatedAfterMin < val
      return true;
    }
  }
  return false;
};
