// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (map[el]) {
      stack.push(map[el]);
    } else {
      if (el !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
