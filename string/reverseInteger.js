// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const reversedNumber =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  if (Math.abs(reversedNumber) > 2147483648) {
    return 0;
  }
  return reversedNumber;
};
