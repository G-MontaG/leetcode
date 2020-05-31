# https://leetcode.com/problems/string-to-integer-atoi/
import re


class Solution:
    def myAtoi(self, str: str) -> int:
        str = str.strip()
        if not str:
            return 0
        maxint = 2147483647
        minint = -2147483648
        exp = r'[-+]?\d+'
        str = re.match(exp, str)
        if str:
            num = int(str.group())
            if num > maxint:
                return maxint
            elif num < minint:
                return minint
            else:
                return num
        return 0
