// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const length = nums.length;
    const revTable = {};
    for (let i = 0; i < length; i++) {
        const secondAddend = target - nums[i];
        if (revTable.hasOwnProperty(secondAddend)) {
            return [revTable[secondAddend], i];
        } else {
            revTable[nums[i]] = i;
        }
    }
};
