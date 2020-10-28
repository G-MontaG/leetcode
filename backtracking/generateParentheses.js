// https://leetcode.com/problems/generate-parentheses/
const go = (leftRemain, rightRemain, path, res) => {
  if (leftRemain > rightRemain) return; // The number of '(' should be always >= ')'

  if (leftRemain === 0 && rightRemain === 0) {
    res.push(path);
    return;
  }

  if (leftRemain > 0) go(leftRemain - 1, rightRemain, path + "(", res);
  if (rightRemain > 0) go(leftRemain, rightRemain - 1, path + ")", res);
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];
  go(n, n, "", res);
  return res;
};
