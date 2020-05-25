// https://leetcode.com/problems/reverse-string-ii
const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const length = s.length;
  const arrOfLetters = s.split("");
  for (let i = 0; i < length; i += 2 * k) {
    reverse(arrOfLetters, i, i + k - 1);
  }
  return arrOfLetters.join("");
};
