// https://leetcode.com/problems/reverse-linked-list/
const reverseList = (head) => {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
