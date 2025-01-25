## Data Structures: Linked Lists

### Intro

2 types of linked lists: **Singly** and **Doubly** linked lists.

Known issues with arrays & hash tables:
Arrays: When increasing size of static arrays, the doubling in size + copying over the array has a performance implication costs O(n). Insertion / deletion that requires index shifting also takes time.

Hash Tables: We can store things anywhere in the memory, and hash tables would take care of it. But it's not ordered.

And linked lists solves the unordered hash table issue.

### What Is A Linked List?

A list that is linked -- contains a set of nodes. A node consists of 2 elements, the value of the data, and a pointer to the next node in line.

The first node is called the **head**, and the last node is called the **tail**. The last node points to null.

Note: JS doesn't have linked list built-in, and Java does.

### Why Linked Lists?

我的回答：When you want to use hash tables (like for custom key) but needs it to be ordered.

Big O:
prepend O(1)
append O(1)
lookup (traversal) O(n)
insert O(n)
delete O(n)

insert and delete takes O(n) because it requires traversal.

### What Is A Pointer?

A **reference** to another place in memory.

```
const obj1 = { a: true };
const obj2 = obj1; // a pointer

Both object 1 and object 2 points to the same location in memory.
```

### Doubly Linked List

Node contains another pointer which links to the previous node.

Doubly linked lists allows us to traverse our list **backwards**.

Big O:
prepend O(1)
append O(1)
lookup O(n) // technically a little bit faster n/2 if we know which half to look for
insert O(n)
delete O(n)

### Singly vs Doubly Linked Lists

Singly Linked Lists:

- simpler to implement.
- requires less memory, makes insertion and deletion a little faster (less operations).

but ...

- cannot be reversed, or traverse from back to front.
- if we lose ref to this.head, the list can actually be lost in memory forever.

Doubly Linked Lists:

- can be iterated, or traversed both from the front or from the back.
- deletion of a previous node is easier.

but ...

- fairly complicated.
- requires more memory.
- slower insertion and deletion as it requires a bit more operations.

Notes: most interview questions are singly linked lists related.

### Reversing a Linked List

pre: create 2 pointers: 1) prev that initially does not point at any node (null) and 2) curr which points at the current node, starting at the head.

4 steps to reverse a linked list:

1. create a new temp pointer which points to curr.next;
2. set curr.next to prev;
3. update prev to curr;
4. update curr to next;

and repeat.

Lastly update tail to head, and head to prev.

(helpful link to visualize: https://www.youtube.com/watch?v=S9kMVEUg-x4)

## Linked Lists Review

Linked Lists are low level data structures, it does get used in other data structures such as hash tables, stacks and queues.

Pro:
ordered
flexible size

Con:
slow lookup
more memory
