# https://leetcode.com/problems/letter-combinations-of-a-phone-number/
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        d = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl",
             "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
        if not digits:
            return []

        res = []

        def dfs(res, index, path):
            if len(path) == len(digits):
                res.append(path)
                return
            else:
                for c in d[digits[index]]:
                    dfs(res, index+1, path + c)
        dfs(res, 0, "")
        return res
