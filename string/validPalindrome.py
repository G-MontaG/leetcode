# https://leetcode.com/problems/valid-palindrome/
import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
        a = re.sub(r"\W", r"", s.lower())
        return a == a[::-1]

# Without regexp
# def isPalindrome(self, s):
#         s = [c.lower() for c in s if c.isalnum()]
#         return s == s[::-1]
