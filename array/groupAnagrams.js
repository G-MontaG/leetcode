// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Complexity O(nmlog(m))
const groupAnagrams = (strs) => {
  let map = {};

  for (let str of strs) {
    let key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
};

// Complexity O(KN)
// const groupAnagrams = (strs) => {
//   let mapping = {}
//   for (let str of strs) {
//       let charCount = new Array(26).fill(0)
//       for (let c of str) {
//           charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
//       }
//       if (!mapping[charCount]) mapping[charCount] = []
//       mapping[charCount].push(str)
//   }
//   return Object.values(mapping)
// };
