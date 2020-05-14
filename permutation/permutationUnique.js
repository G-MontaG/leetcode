// https://leetcode.com/problems/permutations-ii/
const dfs = (nums, path, res) => {
    const length = nums.length;
    if (!length) {
        res.push(path);
    }
    for (let i = 0; i < length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        dfs(
            [].concat(nums.slice(0, i), nums.slice(i + 1, )),
            [].concat(path, nums[i]),
            res
        );
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const res = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    dfs(nums, [], res);
    return res;
}
