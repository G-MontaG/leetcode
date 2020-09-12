// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const length = numbers.length;
  const revTable = {};
  for (let i = 0; i < length; i++) {
    const notZeroBasedIndex = i + 1;
    const secondAdded = target - numbers[i];
    if (revTable.hasOwnProperty(secondAdded)) {
      return [revTable[secondAdded], notZeroBasedIndex];
    } else {
      revTable[numbers[i]] = notZeroBasedIndex;
    }
  }
};
