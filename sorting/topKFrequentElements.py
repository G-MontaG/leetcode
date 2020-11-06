# https://leetcode.com/problems/top-k-frequent-elements/
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        maps = {}
        for i in nums:
            maps[i] = maps.get(i, 0)+1
        bucket = [None]*(len(nums)+1)
        for i, j in maps.items():
            if bucket[j] is None:
                bucket[j] = []
            bucket[j].append(i)
        res = []
        for i in bucket[::-1]:
            if i is not None:
                for j in i:
                    if k > 0:
                        res.append(j)
                        k -= 1
                if k == 0:
                    break
        return res
