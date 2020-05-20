// https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const res = [];
    const counts = nums1.reduce((acc, value) => {
        acc[value] = acc[value] ? acc[value] + 1 : 1;
        return acc;
    }, {});
    
    nums2.forEach((value) => {
        if (counts[value]) {
            res.push(value);
            counts[value]--;
        }
    });
    
    return res;
};
