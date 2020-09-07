// https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
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
var isPowerOfThree = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};
