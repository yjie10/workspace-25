## Data Structures: Arrays

### Intro

Arrays, aka lists, organizes items sequentially -- adds one item after another in memory.

Big O:
lookup O(1)
push O(1)
insert O(n)
delete O(n)

There are 2 types of arrays.

### Static vs Dynamic Arrays

#### Static Arrays

Static in size, need to specify the # of elements the array will hold ahead of time.

```
// C++
int a[20]; // create an array with 20 items in size
int b[5] {1,2,3,4,5}
```

#### Dynamic Arrays

Allows copying and rebuild an array at a new location, with more memory.

Notes: In higher level languages such as JavaScript and Python, arrays work as dynamic arrays, they automatically allocate memory according to the increase in size of the array.
But there's time where you might want to manage memory yourself, then lower level languages that allows declaration of static arrays might be better.
Having more control over memory allows you to tweak things to make things faster, and that explains why lower level languages like C++ can be much faster than higher level languages.
总结：There's no better, it all depends on your needs.

```
push() / append()* can be O(n) because when adding the element, it might copy the whole array to allocate more memory first, resulting n (length of array) operations.
```
