// https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const map = new Map();
  for (let index = 0; index < s.length; index++) {
    if (map.has(s[index])) {
      map.set(s[index], -1);
    } else {
      map.set(s[index], index);
    }
  }
  let firstUniqIndex = -1;
  for (const [key, index] of map) {
    if (index != -1) {
      firstUniqIndex = index;
      break;
    }
  }
  return firstUniqIndex;
};
