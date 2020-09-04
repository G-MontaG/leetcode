# https://leetcode.com/problems/climbing-stairs/
class Solution:
    def __init__(self):
        self.cache = {}

    def climbStairs(self, N: int) -> int:
        if N <= 2:
            return N
        if N in self.cache:
            return self.cache[N]
        else:
            self.cache[N] = self.climbStairs(N - 1) + self.climbStairs(N - 2)
            return self.cache[N]
