# https://leetcode.com/problems/first-unique-character-in-a-string/
class Solution:
    def firstUniqChar(self, s: str) -> int:
        mapping = {}
        for index, char in enumerate(s):
            if char in mapping.keys():
                mapping[char] = -1
            else:
                mapping[char] = index

        for char in mapping:
            if mapping[char] > -1:
                return mapping[char]

        return -1
