// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  return new Array(n)
    .fill(0)
    .map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};
