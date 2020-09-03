// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  function convert(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    // subtrees are BSTs as well
    node.left = convert(left, mid - 1);
    node.right = convert(mid + 1, right);

    return node;
  }

  return convert(0, nums.length - 1);
};
