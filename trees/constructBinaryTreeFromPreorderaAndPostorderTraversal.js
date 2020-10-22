// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
const constructFromPrePost = (pre, post) => {
  const hash = {};
  let i = 0;

  post.forEach((e, i) => {
    hash[e] = i;
  });

  const dfs = (start, end) => {
    if (start > end || i >= pre.length) return null;
    const node = pre[i++],
      idx = hash[pre[i]];
    const root = new TreeNode(node);
    if (idx < start || idx > end) return root;
    root.left = dfs(start, idx);
    root.right = dfs(idx + 1, hash[node] - 1);
    return root;
  };
  return dfs(0, post.length - 1);
};
