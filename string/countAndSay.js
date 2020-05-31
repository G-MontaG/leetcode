// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let s = "1";
  for (let i = 1; i < n; i++) {
    let count = 1;
    const temp = [];
    for (let j = 1; j < s.length; j++) {
      if (s[j] === s[j - 1]) {
        count++;
      } else {
        temp.push(count);
        temp.push(s[j - 1]);
        count = 1;
      }
    }
    temp.push(count);
    temp.push(s[s.length - 1]);
    s = temp.join("");
  }
  return s;
};
