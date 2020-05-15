// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
        } else {
            i++;
        }
    }
    return nums.length;
};
