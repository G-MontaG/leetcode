// https://leetcode.com/problems/shuffle-an-array/
var Solution = function (nums) {
  // hold nums in Solution
  this.nums = nums;
};

Solution.prototype.reset = function () {
  return this.nums;
};

Solution.prototype.shuffle = function () {
  // create a copy of this.nums, shuffle it, and return it
  const shuffled = this.nums.slice();
  const length = shuffled.length;

  // swap elements with random elements
  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * length);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
