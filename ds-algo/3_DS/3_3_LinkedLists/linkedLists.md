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
