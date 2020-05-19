// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    return new Set(nums).size !== nums.length;
}

// var containsDuplicate = function(nums) {
//     let isDuplicates = false;
//     const numsObj = nums.reduce((acc, value) => {
//         if (!acc[value]) {
//             acc[value] = 1;
//         } else {
//             acc[value]++;
//             isDuplicates = true;
//         }
//         return acc;
//     }, {})
//     return isDuplicates;
// };
