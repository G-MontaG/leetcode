// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  let hash = {};
  inorder.forEach((e, i) => {
    hash[e] = i;
  });

  const dfs = (start, end) => {
    if (start > end) return null;
    const val = postorder.pop();
    let root = new TreeNode(val);
    root.right = dfs(hash[val] + 1, end);
    root.left = dfs(start, hash[val] - 1);
    return root;
  };

  return dfs(0, inorder.length - 1);
};
