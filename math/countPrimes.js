// https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let flagArray = [],
    result = 0;
  for (let i = 2; i < n; i++) {
    if (flagArray[i] === undefined) {
      // is Primes
      flagArray[i] = 1;
      result++;
      // rm it's multiples
      let j = 2;
      while (i * j < n) {
        flagArray[i * j] = 0;
        j++;
      }
    }
  }
  return result;
};
