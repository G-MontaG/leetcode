# https://leetcode.com/problems/binary-search/

def bisect_left(a, x, lo=0, hi=None):
    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = bisect_left(nums, target)
        if i != len(nums) and nums[i] == target:
            return i
        else:
            return -1
