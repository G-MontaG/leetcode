const dfs = (nums, path, res) => {
    const length = nums.length;
    if (!length) {
        res.push(path);
    }
    for (let i = 0; i < length; i++) {
        dfs(
            [].concat(nums.slice(0, i), nums.slice(i + 1, length)),
            [].concat(path, nums[i]),
            res
        )
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const res = [];
    dfs(nums, [], res);
    return res;
}
