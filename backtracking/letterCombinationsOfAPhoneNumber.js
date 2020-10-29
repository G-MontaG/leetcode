// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const go = (index, path, digits, res) => {
  if (index === digits.length) {
    res.push(path);
    return;
  }

  for (const c of map[digits[index]]) {
    go(index + 1, path + c, digits, res);
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const res = [];
  go(0, "", digits, res);
  return res;
};
