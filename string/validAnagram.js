// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const dic = new Map();

  for (let char of s) {
    if (!dic.has(char)) {
      dic.set(char, 1);
    } else {
      dic.set(char, dic.get(char) + 1);
    }
  }

  for (let char of t) {
    if (!dic.has(char)) {
      return false;
    } else {
      dic.set(char, dic.get(char) - 1);
    }
  }

  for (let [key, value] of dic) {
    if (value !== 0) return false;
  }

  return true;
};
