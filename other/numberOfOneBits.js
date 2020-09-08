// https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let sum = 0;
  while (n) {
    n &= n - 1;
    sum++;
  }
  return sum;
};
