// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) return null;

  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.left && curr.right) {
      curr.left.next = curr.right;
      if (curr.next) {
        curr.right.next = curr.next.left;
      }
      stack.push(curr.right);
      stack.push(curr.left);
    }
  }
  return root;
};
