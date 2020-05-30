// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const strippedString = s.replace(/\W/g, "");
  const reversedString = strippedString.split("").reverse().join("");

  return strippedString.toLowerCase() == reversedString.toLowerCase();
};
