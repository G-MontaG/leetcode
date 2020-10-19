// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
// BFS
const levelOrderBottom = (root) => {
  if (!root) {
    return [];
  }

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const size = stack.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      level.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    result.push(level);
  }
  return result.reverse();
};
