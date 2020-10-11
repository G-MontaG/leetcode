// https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let curA = headA;
  let curB = headB;

  while (curA != curB) {
    curA = curA == null ? headA : curA.next;
    curB = curB == null ? headB : curB.next;
  }

  return curA;
};
