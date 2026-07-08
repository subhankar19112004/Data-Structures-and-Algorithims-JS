# 📚 Stack & Queue — Complete Interview Notes (JavaScript)

> A comprehensive guide to **Stacks** and **Queues** covering definitions, implementations, formulas, time complexities, patterns, interview concepts, and JavaScript templates.

---

# 📑 Table of Contents

- Stack
  - Definition
  - Terminology
  - LIFO Principle
  - Operations
  - Time Complexity
  - Applications
  - Array Implementation
  - Linked List Implementation
  - Monotonic Stack
- Queue
  - Definition
  - Terminology
  - FIFO Principle
  - Operations
  - Time Complexity
  - Applications
  - Circular Queue
  - Deque
  - Priority Queue
- Stack vs Queue
- Important Patterns
- Frequently Asked Interview Questions
- JavaScript Templates
- Complexity Cheat Sheet
- Quick Revision

---

# 📦 STACK

## What is a Stack?

A **Stack** is a **Linear Data Structure** that follows the

> **LIFO (Last In First Out)** principle.

The **last inserted element** is the **first one removed**.

---

## Real Life Examples

- Stack of plates 🍽️
- Browser History
- Undo / Redo
- Call Stack
- Function Recursion

---

## Visualization

```
          TOP
           │
        ┌─────┐
        │ 40  │
        ├─────┤
        │ 30  │
        ├─────┤
        │ 20  │
        ├─────┤
        │ 10  │
        └─────┘
```

Removing elements

```
POP()

40

↓

30

↓

20

↓

10
```

---

# Stack Terminology

| Term | Meaning |
|------|----------|
| Top | Last inserted element |
| Push | Insert element |
| Pop | Remove top element |
| Peek / Top | View top element |
| Empty | No elements |

---

# Stack Operations

## Push

Insert element at the top.

Before

```
Top

30

20

10
```

Push 40

```
Top

40

30

20

10
```

Time Complexity

```
O(1)
```

---

## Pop

Remove top element.

Before

```
40

30

20
```

After

```
30

20
```

Time Complexity

```
O(1)
```

---

## Peek

Return top element.

```
40

↑

Returned
```

Complexity

```
O(1)
```

---

## isEmpty()

```
Stack.length == 0
```

Complexity

```
O(1)
```

---

## Size

```
stack.length
```

Complexity

```
O(1)
```

---

# Stack Memory

```
Bottom

↓

10

20

30

40

↑

Top
```

---

# Stack Complexity

| Operation | Time | Space |
|-----------|------|--------|
| Push | O(1) | O(1) |
| Pop | O(1) | O(1) |
| Peek | O(1) | O(1) |
| isEmpty | O(1) | O(1) |
| Search | O(n) | O(1) |

---

# Array Implementation

```javascript
class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}
```

---

# Linked List Implementation

```
TOP

↓

40 → 30 → 20 → 10
```

Push

```
Insert at Head

O(1)
```

Pop

```
Delete Head

O(1)
```

---

# Applications of Stack

- Function Calls
- Recursion
- Browser History
- Undo / Redo
- Expression Evaluation
- Parentheses Matching
- DFS
- Backtracking
- Syntax Parsing

---

# Expression Types

## Infix

```
A + B
```

---

## Prefix

```
+ A B
```

---

## Postfix

```
A B +
```

---

# Parentheses Matching

```
()

[]

{}

({[]})

((()))
```

Use

```
Stack
```

---

# Monotonic Stack

A special stack that remains

- Increasing
- Decreasing

Example

```
5

4

3

2
```

Applications

- Next Greater Element
- Previous Greater Element
- Stock Span
- Largest Rectangle
- Daily Temperatures

Complexity

```
O(n)
```

---

# Queue

## What is Queue?

Queue is a linear data structure that follows

> **FIFO (First In First Out)**

The first inserted element is removed first.

---

# Real Life Examples

- Ticket Counter
- Printer Queue
- CPU Scheduling
- Call Center
- Food Queue

---

# Visualization

```
Front                     Rear

10 → 20 → 30 → 40
```

Deletion

```
Front leaves first
```

---

# Queue Terminology

| Term | Meaning |
|------|----------|
| Front | First element |
| Rear | Last element |
| Enqueue | Insert |
| Dequeue | Remove |
| Peek | Front Element |

---

# Queue Operations

## Enqueue

Insert at Rear

```
10 → 20 → 30

↓

10 → 20 → 30 → 40
```

Complexity

```
O(1)
```

---

## Dequeue

Remove Front

```
10 → 20 → 30

↓

20 → 30
```

Complexity

```
O(1)
```

---

## Peek

```
10

Returned
```

Complexity

```
O(1)
```

---

# Queue Complexity

| Operation | Time |
|-----------|------|
| Enqueue | O(1) |
| Dequeue | O(1) |
| Peek | O(1) |
| isEmpty | O(1) |
| Search | O(n) |

---

# Queue using Linked List

```
Front

↓

10 → 20 → 30 → 40

                 ↑

               Rear
```

Enqueue

```
Insert Rear
```

Dequeue

```
Delete Front
```

Both

```
O(1)
```

---

# Circular Queue

Problem

```
Linear Queue wastes memory.
```

Solution

```
Rear wraps around.
```

Visualization

```
     0

4         1

3         2
```

Formula

```
Rear = (Rear + 1) % Size

Front = (Front + 1) % Size
```

Applications

- CPU Scheduling
- Buffers
- Streaming

---

# Deque

Double Ended Queue

```
Front ←→ Rear
```

Supports

```
Insert Front

Insert Rear

Delete Front

Delete Rear
```

Complexity

```
O(1)
```

---

# Priority Queue

Elements removed according to priority.

Example

```
Priority

5

3

1
```

Not insertion order.

Implementation

```
Heap
```

Complexity

| Operation | Time |
|-----------|------|
| Insert | O(log n) |
| Remove | O(log n) |
| Peek | O(1) |

Applications

- Dijkstra
- Prim
- Task Scheduling
- OS

---

# Stack vs Queue

| Feature | Stack | Queue |
|----------|-------|--------|
| Principle | LIFO | FIFO |
| Insert | Top | Rear |
| Remove | Top | Front |
| Pointer | Top | Front & Rear |
| Example | Plates | Ticket Queue |

---

# Important Interview Patterns

---

## Stack

Used in

- Next Greater Element
- Parentheses
- Histogram
- Stock Span
- Daily Temperatures
- Undo
- DFS

---

## Queue

Used in

- BFS
- Scheduling
- Sliding Window
- Buffers
- Producer Consumer

---

## Monotonic Stack

Keeps elements sorted.

Useful for

```
Nearest Greater

Nearest Smaller
```

---

## Monotonic Queue

Maintains maximum/minimum.

Useful in

```
Sliding Window Maximum
```

---

# Frequently Asked Interview Questions

## Easy

- Valid Parentheses
- Implement Stack
- Implement Queue
- Baseball Game
- Backspace String Compare
- Next Greater Element

---

## Medium

- Daily Temperatures
- Decode String
- Asteroid Collision
- Simplify Path
- Evaluate Reverse Polish Notation
- Sliding Window Maximum

---

## Hard

- Largest Rectangle in Histogram
- Trapping Rain Water
- Maximal Rectangle
- Basic Calculator III
- LFU Cache

---

# JavaScript Stack Template

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
```

---

# JavaScript Queue Template

```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
```

> **Note:** Using `Array.shift()` is **O(n)** because all remaining elements are shifted left. In production code, implement a queue using a **Linked List** or a **circular buffer** to achieve **O(1)** dequeue operations.

---

# Complete Complexity Cheat Sheet

| Data Structure | Operation | Time | Space |
|----------------|-----------|------|--------|
| Stack | Push | O(1) | O(1) |
| Stack | Pop | O(1) | O(1) |
| Stack | Peek | O(1) | O(1) |
| Stack | Search | O(n) | O(1) |
| Queue | Enqueue | O(1) | O(1) |
| Queue | Dequeue | O(1)\* | O(1) |
| Queue | Peek | O(1) | O(1) |
| Queue | Search | O(n) | O(1) |
| Priority Queue | Insert | O(log n) | O(1) |
| Priority Queue | Remove | O(log n) | O(1) |
| Priority Queue | Peek | O(1) | O(1) |

> \*Assuming a Linked List or Circular Queue implementation.

---

# Quick Revision

```
STACK
------

LIFO

Push  -> O(1)

Pop   -> O(1)

Peek  -> O(1)

Used in

• DFS
• Undo
• Browser History
• Parentheses
• Recursion

QUEUE
------

FIFO

Enqueue -> O(1)

Dequeue -> O(1)

Peek     -> O(1)

Used in

• BFS
• Scheduling
• Buffers
• Streaming
• Producer-Consumer

MONOTONIC STACK
----------------

• Next Greater Element
• Previous Greater Element
• Stock Span
• Daily Temperatures
• Histogram

CIRCULAR QUEUE
----------------

Rear  = (Rear + 1) % Size

Front = (Front + 1) % Size

DEQUE
------

Insert/Delete from both ends

PRIORITY QUEUE
---------------

Implemented using Heap

Insert -> O(log n)

Delete -> O(log n)

Peek   -> O(1)
```

---

# 🎯 Best Practices

- Use a **Stack** when you need **Last In First Out (LIFO)** behavior.
- Use a **Queue** when processing items in **First In First Out (FIFO)** order.
- Avoid `Array.shift()` for large queues in JavaScript—prefer a **Linked List**, **Deque**, or **Circular Queue**.
- Recognize interview patterns:
  - **Stack** → Matching, DFS, Next Greater Element
  - **Queue** → BFS, Scheduling, Sliding Window
  - **Priority Queue** → Greedy algorithms, shortest paths, task scheduling
- Always analyze whether the problem requires maintaining **order**, **priority**, or **recently added elements**.

---

# 📖 Summary

Stacks and Queues are foundational linear data structures used throughout software engineering. Understanding their behavior, complexity, and common patterns—such as **Monotonic Stacks**, **Circular Queues**, and **Priority Queues**—is essential for solving a wide range of coding interview problems efficiently.