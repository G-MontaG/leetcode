# Data Structures

All about data complexity [bigocheatsheet](https://www.bigocheatsheet.com/) and [wiki](https://en.wikipedia.org/wiki/Search_data_structure#Asymptotic_amortized_worst-case_analysis).

### Array

We have array structure in javascript by design.

[Wiki](https://en.wikipedia.org/wiki/Array_data_structure)

### Stack

In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:

- **push**, which adds an element to the collection, and
- **pop**, which removes the most recently added element that was not yet removed.

In a stack, the element deleted from the set is the one most recently inserted: the stack implements a last-in, first-out, or LIFO, policy.

Javascript has `push` and `pop` methods, which operate on ordinary Javascript array objects.

[Wiki](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>),
[Youtube](https://youtu.be/wjI1WNcIntg)

### Queue

In computer science, a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principle (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.

Javascript has `push` and `shift` methods, which operate on ordinary Javascript array objects.

[Wiki](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>),
[Youtube](https://youtu.be/wjI1WNcIntg)

### Linked list (in my case Doubly linked list)

Each node contains three fields: two link fields (references to the previous and to the next node in the sequence of nodes) and one **data** field. The beginning and ending nodes' **previous** and **next** links, respectively, point to some kind of terminator, typically a sentinel node or null, to facilitate traversal of the list. If there is only one sentinel node, then the list is circularly linked via the sentinel node.

The first and last nodes of a doubly linked list are immediately accessible (i.e., accessible without traversal, and usually called head and tail) and therefore allow traversal of the list from the beginning or end of the list, respectively: e.g.

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

Linked lists have several advantages over dynamic arrays. Insertion or deletion of an element at a specific point of a list, assuming that we have indexed a pointer to the node (before the one to be removed, or before the insertion point) already, is a constant-time operation (otherwise without this reference it is `O(n)`), whereas insertion in a dynamic array at random locations will require moving half of the elements on average, and all the elements in the worst case. While one can _delete_ an element from an array in constant time by somehow marking its slot as _vacant_, this causes fragmentation that impedes the performance of iteration.

Moreover, arbitrarily many elements may be inserted into a linked list, limited only by the total memory available; while a dynamic array will eventually fill up its underlying array data structure and will have to reallocate—an expensive operation, one that may not even be possible if memory is fragmented, although the cost of reallocation can be averaged over insertions, and the cost of an insertion due to reallocation would still be amortized O(1). This helps with appending elements at the array's end, but inserting into (or removing from) middle positions still carries prohibitive costs due to data moving to maintain contiguity. An array from which many elements are removed may also have to be resized in order to avoid wasting too much space.

On the other hand, dynamic arrays (as well as fixed-size array data structures) allow constant-time random access, while linked lists allow only sequential access to elements. Sequential access on arrays and dynamic arrays is also faster than on linked lists on many machines, because they have optimal locality of reference and thus make good use of data caching.

Another disadvantage of linked lists is the extra storage needed for references.

A balanced tree has similar memory access patterns and space overhead to a linked list while permitting much more efficient indexing, taking `O(log n)` time instead of `O(n)` for a random access. However, insertion and deletion operations are more expensive due to the overhead of tree manipulations to maintain balance. Schemes exist for trees to automatically maintain themselves in a balanced state: AVL trees or red-black trees.

[Wiki Linked list](https://en.wikipedia.org/wiki/Linked_list), [Wiki Doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list)

### Heap

Heap is a specialized tree-based data structure which is essentially an almost complete.

The heap is one maximally efficient implementation of an abstract data type called a priority queue, and in fact, priority queues are often referred to as _heaps_, regardless of how they may be implemented. In a heap, the highest (or lowest) priority element is always stored at the root. However, a heap is not a sorted structure; it can be regarded as being partially ordered. A heap is a useful data structure when it is necessary to repeatedly remove the object with the **highest (or lowest)** priority.

**Heapsort**: One of the best sorting methods being in-place and with no quadratic worst-case scenarios.

In a _min heap_, if `P` is a parent node of `C`, then the key (the value) of `P` is less than or equal to the key of `C`.

![MinHeap](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

In a _max heap_, the key of `P` is greater than or equal to the key of `C`

![Heap](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

The node at the "top" of the heap with no parents is called the root node.

[Wiki](https://en.wikipedia.org/wiki/Heapsort),
[Wiki](<https://en.wikipedia.org/wiki/Heap_(data_structure)>),
[YouTube](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
