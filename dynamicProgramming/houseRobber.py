# https://leetcode.com/problems/house-robber/
class Solution(object):
    def rob(self, nums: List[int]) -> int:
        length = len(nums)
        if length == 0:
            return 0
        if length == 1:
            return nums[0]

        dp = [0]*length  # assign dp array
        dp[0], dp[1] = nums[0], max(nums[0], nums[1])

        for i in range(2, length):
            dp[i] = max(dp[i-2]+nums[i], dp[i-1])
        print(dp)

        return max(dp)
