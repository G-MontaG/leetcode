// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target, lo = 0, hi = null) => {
    if (lo < 0) {
        throw new Error('lo must be non-negative');
    }
    if (hi === null) {
        hi = nums.length;
    }
    while (lo < hi) {
        let mid = Math.floor((lo + hi)/2);
        if (nums[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return lo;
};
