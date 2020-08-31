// https://leetcode.com/problems/linked-list-cycle/
const hasCycle = (head) => {
  if (!head) {
    return false;
  }
  let hare = head;
  let tortoise = head;
  while (hare) {
    if (!hare.next) {
      return false;
    } else {
      hare = hare.next.next;
      tortoise = tortoise.next;
    }
    if (tortoise == hare) {
      return true;
    }
  }
  return false;
};
