# https://leetcode.com/problems/first-bad-version/
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        i = 1
        j = n
        while i < j:
            k = (i+j)//2
            if isBadVersion(k):
                j = k
            else:
                i = k+1
        return i
