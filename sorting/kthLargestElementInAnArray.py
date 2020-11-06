# https://leetcode.com/problems/kth-largest-element-in-an-array/
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pivot = random.choice(nums)
        # print(nums, k, pivot)
        l, r, m = [], [], []
        for i in nums:
            if i == pivot:
                m.append(i)
            elif i < pivot:
                l.append(i)
            else:
                r.append(i)
        # print(l, m, r)
        ll, lm, lr = len(l), len(m), len(r)
        if lr < k <= lr+lm:
            return m[0]
        elif k <= lr:
            return self.findKthLargest(r, k)
        else:
            return self.findKthLargest(l, k-lr-lm)
