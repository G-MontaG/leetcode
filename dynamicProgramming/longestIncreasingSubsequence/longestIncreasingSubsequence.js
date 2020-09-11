// https://leetcode.com/problems/longest-increasing-subsequence/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
const bisectSearch = (arr, target, lo = 0, hi = null) => {
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

const lengthOfLIS = (nums) => {
  if (!nums.length) return 0;

  let tails = [];
  let length = 0;

  for (num of nums) {
    let newLength = bisectSearch(tails, num, 0, length);
    tails[newLength] = num;
    if (newLength === length) length++;
  }

  return length;
};
