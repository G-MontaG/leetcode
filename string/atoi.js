// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  const match = str.match(/^ *([+-]{0,1}[0-9]+)/);
  return match ? Math.min(2147483647, Math.max(-2147483648, match[1])) : 0;
};
