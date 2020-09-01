# Depth-first search

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

![GIF](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Depth-First-Search.gif/440px-Depth-First-Search.gif)

[Wiki](https://en.wikipedia.org/wiki/Depth-first_search)

# Breadth-first search

Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

![GIF](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)

[Wiki](https://en.wikipedia.org/wiki/Breadth-first_search)

This non-recursive implementation is similar to the non-recursive implementation of depth-first search, but differs from it in two ways:

- it uses a queue (First In First Out) instead of a stack and
- it checks whether a vertex has been discovered before enqueueing the vertex rather than delaying this check until the vertex is dequeued from the queue.
