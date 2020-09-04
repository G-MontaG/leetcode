# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        best_sum = 0 # or: float('-inf')
        for i in range(1, len(prices)):
            best_sum += max(0, prices[i] - prices[i-1])
        return best_sum
        