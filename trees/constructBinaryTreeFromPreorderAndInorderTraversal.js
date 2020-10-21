// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  let hash = {};
  inorder.forEach((e, i) => {
    hash[e] = i;
  });

  let recur = function (start, end) {
    if (start > end) return null;
    let root = new TreeNode(preorder.shift());
    root.left = recur(start, hash[root.val] - 1);
    root.right = recur(hash[root.val] + 1, end);
    return root;
  };

  return recur(0, inorder.length - 1);
};
