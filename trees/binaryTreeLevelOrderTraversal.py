# https://leetcode.com/problems/binary-tree-level-order-traversal/
from collections import deque


class Solution:
    # BFS
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        q, result = deque(), []
        if root:
            q.append(root)
        while len(q):
            level = []
            for _ in range(len(q)):
                x = q.popleft()
                level.append(x.val)
                if x.left:
                    q.append(x.left)
                if x.right:
                    q.append(x.right)
            result.append(level)
        return result


class Solution:
    # DFS
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        res, stack = [], [(root, 0)]
        while stack:
            curr, level = stack.pop()
            if len(res) < level + 1:
                res.append([])
            res[level].append(curr.val)
            if curr.right:
                stack.append((curr.right, level+1))
            if curr.left:
                stack.append((curr.left, level+1))
        return res


class Solution:
    # DFS recursive
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        self.dfs(root, 0, res)
        return res

    def dfs(self, root, level, res):
        if not root:
            return
        if len(res) < level+1:
            res.append([])
        res[level].append(root.val)
        self.dfs(root.left, level+1, res)
        self.dfs(root.right, level+1, res)
