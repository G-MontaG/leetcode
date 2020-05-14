// https://leetcode.com/problems/fibonacci-number/
const cache = {};

/**
 * @param {number} N
 * @return {number}
 */
const climbStairs = (N) =>  {
    if (N <= 1) {
        return N;
    }
    if (cache[N] !== undefined) {
        return cache[N]
    } else {
        return cache[N] = climbStairs(N - 1) + climbStairs(N - 2)
    }
};
