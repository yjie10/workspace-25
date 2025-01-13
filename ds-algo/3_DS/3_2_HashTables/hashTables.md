## Data Structures: Hash Tables

### Intro

Hash tables, aka hash maps, maps, unordered maps, dictionaries, objects, etc.

Objects in JS are a type of hash table.

With hash table, we get to set a key and a value:

```
basket.grapes = 10000; // key: grapes, value: 10000
```

The **key** is used as the index as where to find the **value** in memory.

Fast data access;

Big O:
insert O(1)
lookup O(1)
delete O(1)
search O(1)

#### Hash Function

Generates a value of fixed length for each input that it gets.

It's one way -- no way to convert the hash back into the input.

And Hash will always be the same for the same input -- This is called **idempotent**.

### Hash Collisions

With limited memory and enough data, it's unavoidable there will be collision.

When collision happens, it slows down **reading** and **writing**. // O(1) -> O(n)
