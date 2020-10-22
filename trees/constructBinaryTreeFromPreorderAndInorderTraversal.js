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

  const dfs = (start, end) => {
    if (start > end) return null;
    const val = preorder.shift();
    let root = new TreeNode(val);
    root.left = dfs(start, hash[val] - 1);
    root.right = dfs(hash[val] + 1, end);
    return root;
  };

  return dfs(0, inorder.length - 1);
};
