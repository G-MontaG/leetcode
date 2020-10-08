// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const map = {};
  let left = 0;

  return s.split("").reduce((max, v, i) => {
    if (map[v] >= left) {
      left = map[v] + 1;
    }
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};
