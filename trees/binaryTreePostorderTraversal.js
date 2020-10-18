// https://leetcode.com/problems/binary-tree-postorder-traversal/
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
const postorderTraversal = (root) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  return result.reverse();
};

// Visited flag
const postorderTraversal = (root) => {
  const stack = [[root, false]];
  const res = [];

  while (stack.length) {
    const [node, visitedFlag] = stack.pop();
    if (node) {
      if (visitedFlag) {
        res.push(node.val);
      } else {
        stack.push([node, true]);
        stack.push([node.right, false]);
        stack.push([node.left, false]);
      }
    }
  }

  return res;
};
