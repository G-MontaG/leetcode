# https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Here I actually rewrite numbers in the array and leave dummy tail
# because task description allow me to do that
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        newTail = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[newTail]:
                newTail += 1
                nums[newTail] = nums[i]
        return newTail + 1
