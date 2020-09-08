// https://leetcode.com/problems/reverse-bits/
const reverseBits = (n) => {
  let result = 0;
  let count = 32;

  while (count--) {
    // Using << coerces the int to a 32-bit signed int, so the tests fail because it's interpreted as a negative value.

    // Using *= coerces it back to a JS float, which is interpreted as the correct positive value (JS floats can store its up to 53 bits)
    // You can still use result = result << 1 if you either (a) Math.abs(result) at the end before returning or (b) return result >>> 0 before returning. Both have the same effect.
    // This is documented here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

    // Without reading that or just knowing it, there's no way to reason out why << doesn't work.
    result = result << 1;
    result += n & 1;
    n = n >> 1;
  }
  return result >>> 0;
};
