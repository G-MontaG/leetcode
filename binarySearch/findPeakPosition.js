// https://leetcode.com/problems/find-peak-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums, lo = 0, hi = null) => {
    if (lo < 0) {
        throw new Error('lo must be non-negative');
    }
    if (!hi) {
        hi = nums.length - 1;
    }
    while (lo < hi) {
        mid = Math.floor((lo + hi)/2);
        if (nums[mid] < nums[mid + 1]) {
            lo = mid + 1;
        } else {
           hi = mid; 
        }
    }
    return lo;
};
