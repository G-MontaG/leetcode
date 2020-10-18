// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// DFS
const preorderTraversal = (root) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return result;
};

// Visited flag
const preorderTraversal = (root) => {
  const stack = [[root, false]];
  const res = [];

  while (stack.length) {
    const [node, visitedFlag] = stack.pop();
    if (node) {
      if (visitedFlag) {
        res.push(node.val);
      } else {
        stack.push([node.right, false]);
        stack.push([node.left, false]);
        stack.push([node, true]);
      }
    }
  }

  return res;
};
