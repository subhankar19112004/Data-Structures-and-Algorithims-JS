# 📚 Linked List - Complete Notes (JavaScript)

> A complete reference guide for Linked Lists. This README covers every important definition, formula, complexity, operation, interview concept, and implementation detail.

---

# Table of Contents

1. What is a Linked List?
2. Terminology
3. Structure of a Node
4. Types of Linked Lists
5. Advantages
6. Disadvantages
7. Time Complexities
8. Space Complexities
9. Memory Representation
10. Traversal
11. Insertion
12. Deletion
13. Searching
14. Reversal
15. Fast & Slow Pointer Technique
16. Cycle Detection
17. Middle Node Formula
18. Length Formula
19. Merge Two Lists
20. Merge Sort on Linked List
21. Important Patterns
22. Interview Questions
23. Common Mistakes
24. JavaScript Template
25. Cheat Sheet

---

# What is a Linked List?

A **Linked List** is a linear data structure where each element (called a node) stores:

- Data
- Address (reference) of the next node

Unlike arrays, nodes are **not stored in contiguous memory**.

```
Array

[10][20][30][40]

Continuous Memory


Linked List

10 → 20 → 30 → 40 → NULL

Nodes can be anywhere in memory.
```

---

# Terminology

## Node

A node is the basic building block.

```
+--------+--------+
| Data   | Next   |
+--------+--------+
```

Example

```
+----+------+      +----+------+      +----+------+
|10  |  ●---|----->|20  |  ●---|----->|30  | NULL |
+----+------+      +----+------+      +----+------+
```

---

## Head

Pointer to the first node.

```
Head
 ↓
10 → 20 → 30 → NULL
```

---

## Tail

The last node.

```
10 → 20 → 30
            ↑
          Tail
```

---

## Next Pointer

Stores the address of the next node.

```
10 → 20

Node 10's next stores address of Node 20.
```

---

## NULL

Indicates end of linked list.

```
10 → 20 → 30 → NULL
```

---

# Structure of a Node

## JavaScript

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

---

# Types of Linked Lists

---

## 1. Singly Linked List

Each node points to only one next node.

```
10 → 20 → 30 → NULL
```

---

## 2. Doubly Linked List

Each node has

- Previous
- Next

```
NULL ← 10 ⇄ 20 ⇄ 30 → NULL
```

Node Structure

```
Prev | Data | Next
```

---

## 3. Circular Linked List

Last node points back to Head.

```
10 → 20 → 30
↑           |
|___________|
```

---

## 4. Circular Doubly Linked List

```
←───────────────→
10 ⇄ 20 ⇄ 30
↑           ↓
└───────────┘
```

---

# Advantages

✅ Dynamic Size

No fixed size.

---

✅ Efficient Insertion

```
A → B

Insert C

A → C → B
```

Only pointers change.

---

✅ Efficient Deletion

No shifting required.

---

✅ Better Memory Utilization

Memory allocated only when needed.

---

# Disadvantages

❌ Extra Memory

Need pointer field.

---

❌ No Random Access

Cannot directly access kth node.

Need traversal.

---

❌ Cache Unfriendly

Nodes are scattered.

---

❌ Reverse Traversal Impossible

Only in Singly LL.

---

# Time Complexities

| Operation | Complexity |
|------------|------------|
| Access kth Node | O(n) |
| Search | O(n) |
| Insert Front | O(1) |
| Insert End (Tail) | O(1) |
| Insert End (No Tail) | O(n) |
| Delete Front | O(1) |
| Delete End (Tail Only) | O(n) |
| Delete End (Prev Known) | O(1) |
| Reverse | O(n) |
| Find Middle | O(n) |
| Detect Cycle | O(n) |

---

# Space Complexities

Traversal

```
O(1)
```

Recursive Reverse

```
O(n)
```

Iterative Reverse

```
O(1)
```

Merge Sort

```
O(log n)
```

---

# Memory Representation

Suppose memory

```
Address     Data     Next

100         10       560

560         20       900

900         30       NULL
```

Actual Memory

```
100 ------------------------→560------------------------→900
```

Logical View

```
10 → 20 → 30
```

---

# Traversal

Algorithm

```
Start from Head

↓

Visit Node

↓

Move to Next

↓

Repeat until NULL
```

Pseudo

```
current = head

while(current){

print(current.data)

current = current.next

}
```

Complexity

```
Time : O(n)

Space : O(1)
```

---

# Insertion

---

## At Beginning

Before

```
10 → 20 → 30
```

Insert 5

```
5 → 10 → 20 → 30
```

Formula

```
newNode.next = head

head = newNode
```

Time

```
O(1)
```

---

## At End

Without Tail

```
Traverse

↓

Last Node

↓

Last.next = newNode
```

Time

```
O(n)
```

With Tail

```
tail.next = newNode

tail = newNode
```

Time

```
O(1)
```

---

## At Position

Steps

```
Traverse

↓

Previous Node

↓

Change Links
```

Formula

```
new.next = prev.next

prev.next = new
```

---

# Deletion

---

## Delete Head

```
head = head.next
```

Time

```
O(1)
```

---

## Delete Tail

Need previous node.

```
prev.next = NULL
```

Time

```
O(n)
```

---

## Delete at Position

```
prev.next = current.next
```

Time

```
O(n)
```

---

# Searching

Linear Search

```
current = head

↓

Compare

↓

Move Next
```

Complexity

```
O(n)
```

---

# Reverse Linked List

Before

```
1 → 2 → 3 → NULL
```

After

```
3 → 2 → 1 → NULL
```

Three Pointer Method

```
prev

curr

next
```

Algorithm

```
Save next

↓

Reverse Link

↓

Move prev

↓

Move curr
```

Formula

```
next = curr.next

curr.next = prev

prev = curr

curr = next
```

Time

```
O(n)
```

Space

```
O(1)
```

---

# Fast & Slow Pointer Technique

Also called

```
Tortoise & Hare
```

Slow

```
1 Step
```

Fast

```
2 Steps
```

Used For

- Middle Node
- Detect Cycle
- Remove Nth Node
- Happy Number
- Palindrome
- Split List

---

# Detect Cycle

Algorithm

```
Slow = 1 step

Fast = 2 steps

If they meet

Cycle Exists
```

Complexity

```
Time : O(n)

Space : O(1)
```

---

# Find Middle Node

Formula

```
slow = head

fast = head

while(fast && fast.next){

slow = slow.next

fast = fast.next.next

}
```

At end

```
slow

=

Middle Node
```

Complexity

```
O(n)
```

---

# Length Formula

```
count = 0

current = head

while(current){

count++

current = current.next

}
```

Complexity

```
O(n)
```

---

# Merge Two Sorted Lists

```
1 → 3 → 5

2 → 4 → 6
```

Result

```
1 → 2 → 3 → 4 → 5 → 6
```

Complexity

```
O(n + m)
```

---

# Merge Sort on Linked List

Steps

```
Find Middle

↓

Split

↓

Sort Left

↓

Sort Right

↓

Merge
```

Complexity

```
Time

O(n log n)

Space

O(log n)
```

---

# Important Patterns

---

## Dummy Node

```
dummy → head
```

Used for

- Merge
- Delete
- Partition

---

## Two Pointer

```
slow

fast
```

---

## Three Pointer

```
prev

curr

next
```

---

## Recursive Pattern

```
Solve Smaller

↓

Connect

↓

Return
```

---

# Frequently Asked Interview Questions

### Easy

- Reverse Linked List
- Middle Node
- Delete Node
- Insert Node
- Remove Duplicates
- Merge Lists
- Length
- Search

---

### Medium

- Detect Cycle
- Intersection Point
- Remove Nth Node
- Add Two Numbers
- Odd Even Linked List
- Rotate List
- Reorder List
- Swap Pairs

---

### Hard

- Reverse in K Groups
- Flatten Multilevel List
- Copy Random Pointer
- Merge K Lists
- LRU Cache
- LFU Cache

---

# Common Mistakes

❌ Forget updating head

❌ Lose next pointer before changing links

❌ Infinite loop due to cycle

❌ Forget NULL check

❌ Memory leak (C/C++)

❌ Wrong insertion order

---

# JavaScript Template

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }
}
```

---

# Complete Complexity Cheat Sheet

| Operation | Time | Space |
|------------|------|--------|
| Traverse | O(n) | O(1) |
| Search | O(n) | O(1) |
| Insert Front | O(1) | O(1) |
| Insert End (Tail) | O(1) | O(1) |
| Insert End | O(n) | O(1) |
| Delete Front | O(1) | O(1) |
| Delete End | O(n) | O(1) |
| Reverse | O(n) | O(1) |
| Find Middle | O(n) | O(1) |
| Detect Cycle | O(n) | O(1) |
| Merge Sorted Lists | O(n+m) | O(1) |
| Merge Sort | O(n log n) | O(log n) |

---

# Quick Revision

```
Traversal
O(n)

Search
O(n)

Insert Head
O(1)

Insert Tail
O(1) (with tail)

Delete Head
O(1)

Delete Tail
O(n)

Reverse
O(n)

Middle
Fast & Slow Pointer

Cycle
Floyd Algorithm

Merge
Dummy Node

Reverse
3 Pointers

Middle
2 Pointers

Split
Slow & Fast

Recursive Reverse
O(n)

Iterative Reverse
O(1) Space
```

---

# Best Practices

- Always check if `head === null`.
- Save `next` before modifying links.
- Use a **dummy node** to simplify insertion/deletion at the head.
- Prefer the **iterative reverse** for `O(1)` extra space.
- Use **fast & slow pointers** whenever the problem involves finding the middle, cycles, or splitting a list.
- Keep track of the **tail** if frequent insertions at the end are required.

---

## 📖 Summary

A Linked List is one of the most fundamental data structures used in software engineering. Mastering node manipulation, pointer updates, and common patterns such as **Fast & Slow Pointers**, **Dummy Nodes**, and **Three-Pointer Reversal** will prepare you for the majority of linked list interview problems.

> **Tip:** Focus on understanding how pointers move rather than memorizing code. Once you can visualize the links changing, most linked list problems become much easier to solve.