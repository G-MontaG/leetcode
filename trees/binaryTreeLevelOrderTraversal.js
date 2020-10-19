// https://leetcode.com/problems/binary-tree-level-order-traversal/
// BFS
const levelOrder = (root) => {
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
  return result;
};
