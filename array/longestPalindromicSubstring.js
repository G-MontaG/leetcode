// https://leetcode.com/problems/longest-palindromic-substring/
// Expand Around Center solution
// T O(N^2)
// S O(1)
const longestPalindrome = (s) => {
  let max = "";
  const length = s.length;
  for (let i = 0; i < length; i++) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (left >= 0 && right <= length && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }

    // No better move exists
    if (Math.ceil(max.length / 2) >= length - i) break;
  }
  return max;
};
