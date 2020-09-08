// https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  return (
    n
      .toString(3)
      .split("")
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr)) == 1
  );
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};
