const bisectSearch = (arr, target, lo = 0, hi = null) => {
    if (lo < 0) {
        throw new Error('lo must be non-negative');
    }
    if (hi === null) {
        hi = arr.length;
    }
    while (lo < hi) {
        let mid = Math.floor((lo + hi)/2);
        if (arr[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return lo;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const index = bisectSearch(nums, target);
    return nums[index] === target ? index : -1;
};
