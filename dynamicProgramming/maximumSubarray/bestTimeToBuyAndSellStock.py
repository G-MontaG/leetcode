# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        best_sum = 0  # or: float('-inf')
        current_sum = 0
        for i in range(1, len(prices)):
            current_sum = max(0, current_sum + prices[i] - prices[i-1])
            best_sum = max(best_sum, current_sum)
        return best_sum
