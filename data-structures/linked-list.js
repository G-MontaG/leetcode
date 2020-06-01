class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  /** Add data to the end of linked list */
  push(data) {
    const node = new Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      let temp = this.last;
      this.last = node;
      node.prev = temp;
      temp.next = node;
    }
  }

  /** Add data to the beginning of linked list */
  unshift(data) {
    const node = new Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      node.next = temp;
      temp.prev = node;
    }
  }

  /** In order traversal of the linked list */
  inorder(cb) {
    let temp = this.first;
    while (temp) {
      cb(temp);
      temp = temp.next;
    }
  }

  /** Remove data from the linked list */
  remove(data) {
    if (this.first === null) {
      return false;
    }
    let temp = this.first;
    let next;
    let prev;
    while (temp) {
      if (temp.data === data) {
        next = temp.next;
        prev = temp.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (temp === this.first) {
          this.first = next;
        }
        if (temp === this.last) {
          this.last = prev;
        }
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  /** Check if linked list contains cycle */
  hasCycle() {
    let fast = this.first;
    let slow = this.first;
    while (true) {
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
  }

  /** Return last node from the linked list */
  pop() {
    if (this.last === null) {
      return null;
    }
    let temp = this.last;
    this.last = this.last.prev;
    return temp;
  }

  /** Return first node from the linked list */
  shift() {
    if (this.first === null) {
      return null;
    }
    let temp = this.first;
    this.first = this.first.next;
    return temp;
  }

  /** Reverses the linked list recursively */
  recursiveReverse() {
    function inverse(current, next) {
      if (!next) {
        return;
      }
      inverse(next, next.next);
      next.prev = next.next;
      next.next = current;
    }

    if (!this.first) {
      return;
    }
    inverse(this.first, this.first.next);
    this.first.prev = this.first.next;
    this.first.next = null;
    let temp = this.first;
    this.first = this.last;
    this.last = temp;
  }

  /** Reverses the linked list iteratively */
  reverse() {
    if (!this.first || !this.first.next) {
      return;
    }
    let current = this.first;
    let next;

    do {
      next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    } while (next);

    let tmp = this.first;
    this.first = this.last;
    this.last = tmp;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);

console.log("Push from 1 to 5");
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log("First data: ", linkedList.first.data); // 1
console.log("Last data: ", linkedList.last.data); // 5

console.log("Pop: ", linkedList.pop().data); // 5
console.log("Pop: ", linkedList.pop().data); // 4

console.log("Shift: ", linkedList.shift().data); // 1

console.log("Unshift 3");
linkedList.unshift(3);
console.log("Shift: ", linkedList.shift().data); // 3

console.log("Remove 3");
linkedList.remove(3);
console.log("Pop: ", linkedList.pop().data); // 2
console.log("Pop: ", linkedList.pop().data); // 3, because of previous unshift
console.log("Pop: ", linkedList.pop()); // null
