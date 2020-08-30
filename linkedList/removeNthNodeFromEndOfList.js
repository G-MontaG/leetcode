// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
const removeNthFromEnd = (head, n) => {
  let fast = (slow = head);
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
