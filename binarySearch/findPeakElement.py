# https://leetcode.com/problems/find-peak-element/
class Solution:
    def findPeakElement(self, nums: List[int], lo = 0, hi = None) -> int:
        if lo < 0: 
            raise ValueError('lo must be non-negative')
        if hi is None:
            hi = len(nums) - 1
        while lo < hi:
            mid = (lo + hi)//2
            if nums[mid] < nums[mid + 1]:
                lo = mid + 1
            else:
                hi = mid
        return lo
