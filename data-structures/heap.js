class Heap {
  constructor(cmp) {
    this._heap = [];
    // Function used for comparison between the elements.
    if (typeof cmp === "function") {
      this._cmp = cmp;
    } else {
      this._cmp = function (a, b) {
        return a - b;
      };
    }
  }

  /**
   * Exchange indexes with start index given as argument
   * to turn the tree into a valid heap. On a single call
   * this method maintains only a single "branch" of the heap.
   *
   * Time complexity: O(log N).
   */
  _heapify(index) {
    let extr = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let temp;

    if (
      left < this._heap.length &&
      this._cmp(this._heap[left], this._heap[index]) > 0
    ) {
      extr = left;
    }

    if (
      right < this._heap.length &&
      this._cmp(this._heap[right], this._heap[index]) > 0 &&
      this._cmp(this._heap[right], this._heap[left]) > 0
    ) {
      extr = right;
    }

    if (index !== extr) {
      temp = this._heap[index];
      this._heap[index] = this._heap[extr];
      this._heap[extr] = temp;
      this._heapify(extr);
    }
  }

  /**
   * Changes the key.
   * Complexity: O(log N).
   */
  changeKey(index, value) {
    this._heap[index] = value;
    let elem = this._heap[index];
    let parent = Math.floor(index / 2);
    let temp;
    if (elem !== undefined) {
      while (parent >= 0 && this._cmp(elem, this._heap[parent]) > 0) {
        temp = this._heap[parent];
        this._heap[parent] = elem;
        this._heap[index] = temp;
        index = parent;
        parent = Math.floor(parent / 2);
      }
      this._heapify(index);
    }
    return parent;
  }

  /**
   * Updates a given node. This operation is useful
   * in algorithms like Dijkstra, A* where we need
   * to decrease/increase value of the given node.
   */
  update(node) {
    var idx = this._heap.indexOf(node);
    if (idx >= 0) {
      this.changeKey(idx, node);
    }
  }

  /**
   * Adds new element to the heap.
   * Complexity: O(log N).
   */
  add(value) {
    this._heap.push(value);
    return this.changeKey(this._heap.length - 1, value);
  }

  /**
   * Returns current value which is on the top of the heap.
   * Complexity: O(1).
   */
  top() {
    return this._heap[0];
  }

  /**
   * Removes and returns the current extremum value
   * which is on the top of the heap.
   * Complexity: O(log N).
   */
  extract() {
    if (!this._heap.length) {
      throw "The heap is already empty!";
    }
    var extr = this._heap.shift();
    this._heapify(0);
    return extr;
  }

  getCollection() {
    return this._heap;
  }

  /** Checks or heap is empty. */
  isEmpty() {
    return !this._heap.length;
  }
}

const heap = new Heap((a, b) => a.birthyear - b.birthyear);

console.log(
  "Add: ",
  { name: "John", birthyear: 1981 },
  heap.add({ name: "John", birthyear: 1981 })
);
console.log(
  "Add: ",
  { name: "Pavlo", birthyear: 2000 },
  heap.add({ name: "Pavlo", birthyear: 2000 })
);
console.log(
  "Add: ",
  { name: "Garry", birthyear: 1989 },
  heap.add({ name: "Garry", birthyear: 1989 })
);
console.log(
  "Add: ",
  { name: "Derek", birthyear: 1990 },
  heap.add({ name: "Derek", birthyear: 1990 })
);
console.log(
  "Add: ",
  { name: "Ivan", birthyear: 1966 },
  heap.add({ name: "Ivan", birthyear: 1966 })
);

console.log("Top: ", heap.top()); // { name: "John", birthyear: 1981 }

console.log("Update: ", { name: "John", birthyear: 1981 });
heap.update({ name: "John", birthyear: 1981 });

console.log(heap.extract()); // { name: 'Pavlo', birthyear: 2000 }
console.log(heap.extract()); // { name: 'Derek', birthyear: 1990 }
console.log(heap.extract()); // { name: 'Garry', birthyear: 1989 }
console.log(heap.extract()); // { name: 'John', birthyear: 1982 }
console.log(heap.extract()); // { name: 'Ivan', birthyear: 1966 }
