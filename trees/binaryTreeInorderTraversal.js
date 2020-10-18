// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
const inorderTraversal = (root) => {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      res.push(node.val);
      root = node.right;
    }
  }

  return res;
};

// Visited flag
const inorderTraversal = (root) => {
  const stack = [[root, false]];
  const res = [];

  while (stack.length) {
    const [node, visitedFlag] = stack.pop();
    if (node) {
      if (visitedFlag) {
        res.push(node.val);
      } else {
        stack.push([node.right, false]);
        stack.push([node, true]);
        stack.push([node.left, false]);
      }
    }
  }

  return res;
};
