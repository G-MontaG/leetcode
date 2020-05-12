# https://leetcode.com/problems/search-insert-position

class Solution:
    def searchInsert(self, nums: List[int], target: int, lo=0, hi=None) -> int:
        if lo < 0:
            raise ValueError('lo must be non-negative')
        if hi is None:
            hi = len(nums)
        while lo < hi:
            mid = (lo+hi)//2
            if nums[mid] < target: lo = mid+1
            else: hi = mid
        return lo
