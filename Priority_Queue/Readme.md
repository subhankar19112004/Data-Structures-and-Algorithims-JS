# Priority Queue, Heap & Heap Sort — Complete Guide for JavaScript Interviews

> A practical and interview-focused guide to understanding **Priority Queue**, **Heap**, **Heap Sort**, and how to implement a Priority Queue in JavaScript.

---

# Table of Contents

1. [What is a Queue?](#1-what-is-a-queue)
2. [Why Do We Need a Priority Queue?](#2-why-do-we-need-a-priority-queue)
3. [What is a Priority Queue?](#3-what-is-a-priority-queue)
4. [Real-Life Examples](#4-real-life-examples)
5. [Hospital Emergency Room Example](#5-hospital-emergency-room-example)
6. [Normal Queue vs Priority Queue](#6-normal-queue-vs-priority-queue)
7. [How is Priority Queue Implemented?](#7-how-is-priority-queue-implemented)
8. [Why Does Heap Come Into the Picture?](#8-why-does-heap-come-into-the-picture)
9. [What is a Heap?](#9-what-is-a-heap)
10. [Min Heap vs Max Heap](#10-min-heap-vs-max-heap)
11. [Heap as a Complete Binary Tree](#11-heap-as-a-complete-binary-tree)
12. [Heap Stored Inside an Array](#12-heap-stored-inside-an-array)
13. [Heap Index Formulas](#13-heap-index-formulas)
14. [Heapify Up](#14-heapify-up)
15. [Heapify Down](#15-heapify-down)
16. [Priority Queue Operations](#16-priority-queue-operations)
17. [Time Complexity](#17-time-complexity)
18. [Why Not Just Sort the Array?](#18-why-not-just-sort-the-array)
19. [Priority Queue Using Sorting](#19-priority-queue-using-sorting)
20. [Why Heap is Better for a Dynamic Priority Queue](#20-why-heap-is-better-for-a-dynamic-priority-queue)
21. [Heap Sort](#21-heap-sort)
22. [Heap Sort vs Priority Queue](#22-heap-sort-vs-priority-queue)
23. [Important Complexity Difference](#23-important-complexity-difference)
24. [JavaScript and Priority Queue](#24-javascript-and-priority-queue)
25. [Implementing Min Heap in JavaScript](#25-implementing-min-heap-in-javascript)
26. [Implementing Max Heap in JavaScript](#26-implementing-max-heap-in-javascript)
27. [Implementing a Priority Queue in JavaScript](#27-implementing-a-priority-queue-in-javascript)
28. [Priority Queue With Objects](#28-priority-queue-with-objects)
29. [LeetCode and Priority Queue](#29-leetcode-and-priority-queue)
30. [Interview Strategy](#30-interview-strategy)
31. [What to Say in an Interview](#31-what-to-say-in-an-interview)
32. [Common Interview Questions](#32-common-interview-questions)
33. [When Should You Think "Heap/Priority Queue"?](#33-when-should-you-think-heappriority-queue)
34. [Top K Problems](#34-top-k-problems)
35. [Dijkstra's Algorithm](#35-dijkstras-algorithm)
36. [Hospital Example Revisited](#36-hospital-example-revisited)
37. [Other Real-Life Examples](#37-other-real-life-examples)
38. [Common Mistakes](#38-common-mistakes)
39. [Interview Cheat Sheet](#39-interview-cheat-sheet)
40. [Final Mental Model](#40-final-mental-model)

---

# 1. What is a Queue?

A normal Queue follows:

```text
FIFO

First In → First Out
```

For example:

```text
Person A
Person B
Person C
Person D
```

If they enter in this order:

```text
A → B → C → D
```

They leave in the same order:

```text
A → B → C → D
```

This is a normal queue.

### Real-life example

Imagine standing in line at a restaurant.

```text
          FRONT
            ↓
[A] [B] [C] [D]
```

A comes first, so A gets served first.

The queue doesn't care whether B is more important than A.

It only cares about arrival order.

---

# 2. Why Do We Need a Priority Queue?

Now imagine a hospital emergency room.

Suppose patients arrive like this:

```text
Patient A → headache
Patient B → broken arm
Patient C → heart attack
Patient D → minor fever
```

If we use a normal FIFO queue:

```text
A → B → C → D
```

Patient A would be treated first simply because they arrived first.

That's not what we want.

The patient with the most serious condition should be treated first.

So we need:

```text
Priority
   ↓
Patient C → highest priority
Patient B → medium priority
Patient A → low priority
Patient D → low priority
```

This is where a **Priority Queue** comes in.

---

# 3. What is a Priority Queue?

A Priority Queue is an Abstract Data Type (ADT) where each element has an associated priority.

Instead of processing elements strictly according to arrival order, we process the element with the highest or lowest priority first.

For example:

```text
Task                  Priority

Fix production bug       10
Reply to email            2
Deploy application        9
Update documentation      3
```

A max-priority queue would process:

```text
Fix production bug
Deploy application
Update documentation
Reply to email
```

The exact meaning of "high priority" depends on the problem.

---

# 4. Real-Life Examples

Priority queues appear everywhere.

## Example 1 — Hospital

Patients are assigned priority based on severity.

```text
Patient       Priority

Heart attack      10
Severe injury      9
Broken arm         6
Fever              3
Checkup            1
```

The highest-priority patient gets attention first.

---

## Example 2 — CPU Scheduling

Operating systems may have processes with different priorities.

```text
Process A → Priority 2
Process B → Priority 10
Process C → Priority 5
```

A priority-based scheduler can choose B first.

---

## Example 3 — Network Packets

Suppose a router receives:

```text
Normal packet
Video packet
Emergency packet
Control packet
```

Some packets may need to be handled before others.

A priority-based system can process more important packets first.

---

## Example 4 — Airline Boarding

Imagine passengers with different boarding priorities:

```text
Medical assistance
First class
Business class
General boarding
```

The system doesn't necessarily process passengers strictly according to when they joined the airport.

Priority matters.

---

## Example 5 — Task Scheduling

Imagine an application has:

```text
Send email           priority 2
Generate report      priority 5
Fix payment failure  priority 10
Clean temporary data priority 1
```

The payment failure should probably be handled first.

---

## Example 6 — Dijkstra's Algorithm

Dijkstra repeatedly needs:

> "Give me the unprocessed node with the smallest known distance."

That's exactly what a **Min Priority Queue** is good at.

---

## Example 7 — Event Simulation

Imagine a simulation containing events:

```text
Event                    Time

Train arrives             10
Customer arrives           3
Machine breaks             7
Doctor becomes available   5
```

We want to process the earliest event first.

A Min Heap can efficiently provide:

```text
3 → 5 → 7 → 10
```

---

# 5. Hospital Emergency Room Example

This is one of the easiest examples to explain in an interview.

Suppose patients arrive:

```text
Patient A → priority 3
Patient B → priority 10
Patient C → priority 5
Patient D → priority 1
```

A normal queue gives:

```text
A → B → C → D
```

But the hospital wants:

```text
B → C → A → D
```

because:

```text
10 > 5 > 3 > 1
```

So:

```text
Priority Queue
      ↓
Patient with highest priority comes out first
```

We don't care about maintaining the complete list in sorted order.

We only care about efficiently finding the next most important patient.

That distinction is extremely important.

---

# 6. Normal Queue vs Priority Queue

| Feature                   | Normal Queue      | Priority Queue                 |
| ------------------------- | ----------------- | ------------------------------ |
| Ordering                  | Arrival order     | Priority                       |
| Principle                 | FIFO              | Priority-based                 |
| Example                   | Restaurant line   | Emergency room                 |
| Important operation       | Dequeue oldest    | Remove highest/lowest priority |
| Typical implementation    | Array/Linked List | Heap                           |
| Peek                      | Front element     | Highest/lowest priority        |
| Dynamic priority handling | No                | Yes                            |

---

# 7. How is Priority Queue Implemented?

A Priority Queue is an **abstract data type**.

That means it describes behavior rather than forcing one particular implementation.

For example, we can implement a Priority Queue using:

```text
1. Array
2. Linked List
3. Sorted Array
4. Binary Search Tree
5. Heap
```

But the **Binary Heap** is one of the most common and efficient implementations.

Why?

Because it gives us:

```text
peek        → O(1)
insert      → O(log n)
remove      → O(log n)
```

That is extremely useful.

---

# 8. Why Does Heap Come Into the Picture?

This is the key relationship:

```text
Priority Queue
      ↓
Abstract Data Type
      ↓
Needs an implementation
      ↓
Binary Heap
      ↓
Efficient implementation
```

Think about it this way:

### Priority Queue says:

> "I want the highest-priority element quickly."

### Heap says:

> "I can keep the highest-priority element at the root and maintain that property efficiently."

Therefore:

```text
Priority Queue = WHAT we want

Heap = HOW we commonly implement it
```

This is one of the most important concepts to remember.

---

# 9. What is a Heap?

A Binary Heap is a **complete binary tree** that satisfies a heap property.

There are two common types:

```text
Min Heap
Max Heap
```

---

# 10. Min Heap vs Max Heap

## Min Heap

The smallest element is at the root.

Example:

```text
        1
       / \
      3   2
     / \
    7   5
```

Property:

```text
Parent <= Children
```

Therefore:

```text
peek() → 1
```

---

## Max Heap

The largest element is at the root.

```text
        10
       /  \
      7    8
     / \
    3   5
```

Property:

```text
Parent >= Children
```

Therefore:

```text
peek() → 10
```

---

# 11. Heap as a Complete Binary Tree

A heap must be a **complete binary tree**.

That means:

> Every level is completely filled except possibly the last level, and the last level is filled from left to right.

Example:

```text
          10
        /    \
       8      9
      / \    /
     4   5  6
```

This is complete.

But:

```text
          10
        /    \
       8      9
        \
         5
```

is not the usual complete-tree shape because nodes are not filled left-to-right.

---

# 12. Heap Stored Inside an Array

This is the beautiful part.

We don't actually need to create tree nodes.

We can store the heap inside an array.

For example:

```text
        10
       /  \
      8    9
     / \
    4   5
```

can be stored as:

```text
[10, 8, 9, 4, 5]
```

This works because a complete binary tree has a predictable structure.

---

# 13. Heap Index Formulas

Using **0-based indexing**:

```text
parent(i) = Math.floor((i - 1) / 2)

left(i) = 2 * i + 1

right(i) = 2 * i + 2
```

Example:

```text
Array:

[10, 8, 9, 4, 5]
```

Indexes:

```text
        10(0)
       /     \
    8(1)     9(2)
    /  \
 4(3)  5(4)
```

For node `8` at index `1`:

```text
left = 2 * 1 + 1
     = 3

right = 2 * 1 + 2
      = 4
```

Exactly:

```text
4 and 5
```

---

# 14. Heapify Up

Suppose we have a Min Heap:

```text
[2, 5, 8, 10]
```

Now insert:

```text
1
```

We first place it at the end:

```text
[2, 5, 8, 10, 1]
```

Tree:

```text
        2
       / \
      5   8
     / \
   10   1
```

But:

```text
1 < 5
```

and:

```text
1 < 2
```

So the heap property is broken.

We move `1` upward.

This is called:

```text
Heapify Up
```

Result:

```text
        1
       / \
      2   8
     / \
   10   5
```

Array:

```text
[1, 2, 8, 10, 5]
```

---

# 15. Heapify Down

Suppose:

```text
[1, 2, 8, 10, 5]
```

We remove the root.

The root is:

```text
1
```

Take the last element:

```text
5
```

and move it to the root:

```text
[5, 2, 8, 10]
```

Now:

```text
5 > 2
```

so the heap property is broken.

We move `5` downward.

This is:

```text
Heapify Down
```

Result:

```text
[2, 5, 8, 10]
```

---

# 16. Priority Queue Operations

A typical Priority Queue exposes operations such as:

```text
insert / enqueue
peek
remove / dequeue
size
isEmpty
```

For a Min Priority Queue:

```text
enqueue(10)
enqueue(5)
enqueue(20)
enqueue(2)
```

Internally:

```text
        2
       / \
      5   20
     /
    10
```

Then:

```text
peek()
```

returns:

```text
2
```

And:

```text
dequeue()
```

returns:

```text
2
```

The heap is then repaired.

---

# 17. Time Complexity

For a Binary Heap:

| Operation              | Complexity |
| ---------------------- | ---------: |
| Peek                   |       O(1) |
| Insert                 |   O(log n) |
| Remove root            |   O(log n) |
| Build heap             |       O(n) |
| Search arbitrary value |       O(n) |
| Space                  |       O(n) |

Why is insertion `O(log n)`?

Because the heap is a complete binary tree.

Its height is:

```text
O(log n)
```

When inserting an element, we may need to move it from the bottom toward the root.

At worst:

```text
bottom → root
```

which is:

```text
O(log n)
```

---

# 18. Why Not Just Sort the Array?

This is a very common interview question.

Suppose we have:

```text
[8, 2, 10, 4, 1]
```

We could sort:

```text
[1, 2, 4, 8, 10]
```

Then the smallest element is easy to access.

But now imagine:

```text
new element = 3
```

We need to maintain the sorted structure.

We could insert it into the correct position:

```text
[1, 2, 3, 4, 8, 10]
```

Finding/inserting into an array can require shifting many elements.

So maintaining a sorted array dynamically can become expensive.

---

# 19. Priority Queue Using Sorting

One naive approach is:

```javascript
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
    this.items.sort((a, b) => a - b);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
}
```

This works.

But it is not efficient.

Every insertion performs:

```text
sort()
```

which is approximately:

```text
O(n log n)
```

So if we insert `n` elements:

```text
n × O(n log n)
```

which can become:

```text
O(n² log n)
```

for repeated full sorting.

That's unnecessarily expensive.

---

# 20. Why Heap is Better for a Dynamic Priority Queue

A heap doesn't maintain the entire collection in sorted order.

It maintains only enough ordering to guarantee:

```text
minimum at root
```

or:

```text
maximum at root
```

For a Min Heap:

```text
        1
       / \
      3   2
     / \
    7   5
```

Notice something important:

The array is NOT fully sorted.

```text
[1, 3, 2, 7, 5]
```

But that's okay.

We only need:

```text
minimum → root
```

Therefore:

```text
peek → O(1)
insert → O(log n)
remove minimum → O(log n)
```

This is the main reason heaps are so useful for Priority Queues.

---

# 21. Heap Sort

Heap Sort uses a heap to sort an array.

Its overall time complexity is:

```text
O(n log n)
```

For example:

```text
[5, 1, 8, 2, 3]
```

Build a heap.

Then repeatedly remove the root.

The extracted values come out in priority order.

For a Min Heap:

```text
1
2
3
5
8
```

Therefore we get sorted output.

---

# 22. Heap Sort vs Priority Queue

These concepts are related but are **not the same thing**.

This distinction is very important in interviews.

## Priority Queue

A Priority Queue is a data structure/ADT used when elements arrive dynamically and we repeatedly need the highest/lowest priority item.

Example:

```text
enqueue(10)
enqueue(3)
enqueue(8)

dequeue() → 3
```

Then:

```text
enqueue(1)

dequeue() → 1
```

The collection is dynamic.

---

## Heap Sort

Heap Sort is a sorting algorithm.

Given:

```text
[10, 3, 8, 1]
```

its goal is:

```text
[1, 3, 8, 10]
```

The final objective is to sort the entire dataset.

So:

```text
Priority Queue
    ↓
Dynamic priority-based processing

Heap Sort
    ↓
Sorting an entire collection
```

---

# 23. Important Complexity Difference

Suppose we have `n` elements.

### Approach 1 — Sort everything

```text
O(n log n)
```

If the actual problem is:

> "Sort all elements."

Sorting is perfectly reasonable.

---

### Approach 2 — Priority Queue

Suppose the problem says:

> "Process elements one by one according to priority."

We don't necessarily need the entire collection sorted.

With a heap:

```text
insert → O(log n)
remove → O(log n)
peek   → O(1)
```

This is much better for dynamic workloads.

---

## Example

Imagine 1 million hospital patients arriving over time.

We don't want to repeatedly sort all 1 million patients every time a new patient arrives.

Instead:

```text
Patient arrives
       ↓
Insert into heap
       ↓
O(log n)
       ↓
Doctor asks for next patient
       ↓
Remove root
       ↓
O(log n)
```

This is exactly the kind of workload heaps handle well.

---

# 24. JavaScript and Priority Queue

This is where JavaScript interviews become interesting.

JavaScript's standard language data structures include things such as:

```text
Array
Map
Set
WeakMap
WeakSet
```

but there is **no standard built-in `PriorityQueue` class in ECMAScript**.

MDN's JavaScript data-structure documentation likewise doesn't list a native Priority Queue among JavaScript's standard built-in data structures.

So in a normal JavaScript interview, you should know how to implement one.

---

# 25. Implementing Min Heap in JavaScript

Here is a clean implementation.

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapifyDown();

    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) {
        break;
      }

      this.swap(parent, index);

      index = parent;
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      let smallest = index;

      if (
        left < this.heap.length &&
        this.heap[left] < this.heap[smallest]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right] < this.heap[smallest]
      ) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      this.swap(index, smallest);

      index = smallest;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] =
      [this.heap[j], this.heap[i]];
  }
}
```

---

# 26. Using the Min Heap

```javascript
const heap = new MinHeap();

heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);

console.log(heap.peek());
// 2

console.log(heap.remove());
// 2

console.log(heap.remove());
// 5
```

The important thing is:

```text
peek()
```

doesn't require sorting.

It simply returns:

```javascript
this.heap[0]
```

Therefore:

```text
O(1)
```

---

# 27. Implementing Max Heap in JavaScript

The same idea can be used for a Max Heap.

```javascript
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) {
        break;
      }

      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];

    this.heap[0] = this.heap.pop();

    let index = 0;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      let largest = index;

      if (
        left < this.heap.length &&
        this.heap[left] > this.heap[largest]
      ) {
        largest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right] > this.heap[largest]
      ) {
        largest = right;
      }

      if (largest === index) {
        break;
      }

      [this.heap[index], this.heap[largest]] =
        [this.heap[largest], this.heap[index]];

      index = largest;
    }

    return max;
  }
}
```

---

# 28. Implementing a Priority Queue With Objects

Real-world Priority Queues rarely contain just numbers.

Usually we have an object:

```javascript
{
  name: "John",
  priority: 10
}
```

For example:

```javascript
const patients = [
  { name: "John", priority: 3 },
  { name: "Sarah", priority: 10 },
  { name: "Mike", priority: 5 }
];
```

For a hospital:

```text
Sarah → 10
Mike  → 5
John  → 3
```

Sarah gets treated first.

A good implementation makes the comparison customizable.

```javascript
class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (!this.compare(this.heap[index], this.heap[parent])) {
        break;
      }

      [this.heap[index], this.heap[parent]] =
        [this.heap[parent], this.heap[index]];

      index = parent;
    }
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];

    this.heap[0] = this.heap.pop();

    let index = 0;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      let best = index;

      if (
        left < this.heap.length &&
        this.compare(this.heap[left], this.heap[best])
      ) {
        best = left;
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[best])
      ) {
        best = right;
      }

      if (best === index) {
        break;
      }

      [this.heap[index], this.heap[best]] =
        [this.heap[best], this.heap[index]];

      index = best;
    }

    return result;
  }
}
```

---

# 29. Hospital Priority Queue in JavaScript

Now we can create:

```javascript
const emergencyRoom = new PriorityQueue(
  (a, b) => a.priority > b.priority
);
```

Add patients:

```javascript
emergencyRoom.enqueue({
  name: "John",
  priority: 3
});

emergencyRoom.enqueue({
  name: "Sarah",
  priority: 10
});

emergencyRoom.enqueue({
  name: "Mike",
  priority: 5
});
```

Now:

```javascript
console.log(emergencyRoom.dequeue());
```

returns:

```javascript
{
  name: "Sarah",
  priority: 10
}
```

Then:

```javascript
console.log(emergencyRoom.dequeue());
```

returns:

```javascript
{
  name: "Mike",
  priority: 5
}
```

Then:

```javascript
John
```

---

# 30. LeetCode and Priority Queue

This needs an important distinction.

## Normal JavaScript

JavaScript itself does **not** provide:

```javascript
new PriorityQueue()
```

as a standard ECMAScript built-in.

Therefore, in a normal coding interview, you should know how to implement a heap/Priority Queue yourself.

---

## LeetCode JavaScript

LeetCode's JavaScript environment has provided Priority Queue functionality through `MinPriorityQueue` / `MaxPriorityQueue` support, associated with the `datastructures-js` package. LeetCode discussions show these classes being used directly in JavaScript solutions.

So on LeetCode you may see code such as:

```javascript
const pq = new MinPriorityQueue();
```

or:

```javascript
const pq = new MaxPriorityQueue();
```

Depending on the problem and the current LeetCode JavaScript API.

### Important interview lesson

Do NOT say:

> "JavaScript has a built-in PriorityQueue."

Instead say:

> "JavaScript's standard library doesn't provide a native PriorityQueue, so in a general interview I would implement one using a binary heap. Some coding platforms, including LeetCode's JavaScript environment, provide Priority Queue helpers, so I can use those when the platform supports them."

That is a much stronger answer.

---

# 31. Interview Strategy

Suppose the interviewer says:

> "Implement a Priority Queue in JavaScript."

Don't immediately start typing code.

First clarify:

### Question 1

> "Should this be a Min Priority Queue or Max Priority Queue?"

For example:

```text
Min → smallest priority/value first

Max → largest priority/value first
```

---

### Question 2

Ask what operations are required.

Usually:

```text
enqueue
dequeue
peek
size
isEmpty
```

---

### Question 3

Ask whether priorities are numbers or whether we should support objects.

For example:

```javascript
{
  task: "Fix production issue",
  priority: 10
}
```

---

### Question 4

Explain your implementation.

Say:

> "I would implement the Priority Queue using a binary heap stored in an array."

Then explain:

```text
insert
   ↓
push to end
   ↓
heapify up
```

and:

```text
remove
   ↓
remove root
   ↓
move last element to root
   ↓
heapify down
```

---

# 32. What to Say in an Interview

A strong interview explanation could be:

> "A Priority Queue is an abstract data type where elements are removed according to priority rather than insertion order. In JavaScript, there isn't a native PriorityQueue in the standard language library, so I would implement it using a binary heap. For a Min Priority Queue, the smallest element stays at the root. Insertion adds the element at the end and performs heapify-up, while removal takes the root, moves the last element to the root, and performs heapify-down. Because a binary heap has logarithmic height, insertion and removal are O(log n), while peek is O(1)."

That's a very good interview-level explanation.

---

# 33. When Should You Think "Heap / Priority Queue"?

This is one of the most important DSA skills.

When you see these words, immediately think:

```text
Heap
Priority Queue
```

### Signal 1

> "Find the smallest element repeatedly."

Think:

```text
Min Heap
```

---

### Signal 2

> "Find the largest element repeatedly."

Think:

```text
Max Heap
```

---

### Signal 3

> "Kth largest"

Think:

```text
Min Heap of size K
```

---

### Signal 4

> "Kth smallest"

Think:

```text
Max Heap of size K
```

---

### Signal 5

> "Top K frequent"

Think:

```text
Heap
```

---

### Signal 6

> "Merge K sorted lists"

Think:

```text
Min Heap
```

---

### Signal 7

> "Shortest path"

Think:

```text
Dijkstra + Min Priority Queue
```

---

### Signal 8

> "Always process the next most important item"

Think:

```text
Priority Queue
```

---

### Signal 9

> "Data is arriving continuously"

Think:

```text
Heap
```

because repeatedly sorting the entire collection may be unnecessarily expensive.

---

# 34. Top K Problems

This is one of the most common Heap patterns.

Suppose:

```text
nums = [10, 3, 5, 8, 20, 15]
```

and:

```text
k = 3
```

We want the 3 largest numbers.

We don't necessarily need to sort everything.

Use a **Min Heap of size K**.

Process:

```text
10
```

Heap:

```text
[10]
```

Add:

```text
3
```

Heap:

```text
[3, 10]
```

Add:

```text
5
```

Heap:

```text
[3, 10, 5]
```

Add:

```text
8
```

Heap becomes:

```text
[3, 8, 5, 10]
```

Size is greater than K.

Remove minimum:

```text
3
```

Now:

```text
[5, 8, 10]
```

Continue.

The heap never needs to contain more than:

```text
K
```

elements.

Complexity:

```text
O(n log k)
```

instead of:

```text
O(n log n)
```

for sorting the entire array.

This is a huge interview pattern.

---

# 35. Dijkstra's Algorithm

Dijkstra repeatedly asks:

> "Which node currently has the smallest known distance?"

Suppose:

```text
A → distance 0
B → distance 5
C → distance 2
D → distance 10
```

We need:

```text
C
```

because:

```text
2
```

is the smallest.

After processing C, new distances may be discovered.

Then we need to find the next smallest distance.

This operation happens repeatedly.

Therefore:

```text
Dijkstra
    ↓
Min Priority Queue
    ↓
Binary Min Heap
```

This is one of the most important real uses of Priority Queues.

---

# 36. Hospital Example Revisited

Let's make the hospital scenario more realistic.

Imagine a hospital emergency department.

Patients arrive:

```text
Patient     Condition                 Priority

A           Mild fever                   2
B           Broken leg                   5
C           Severe bleeding              10
D           Headache                     1
E           Breathing difficulty          9
```

A normal queue would process:

```text
A
B
C
D
E
```

But a priority queue processes:

```text
C → 10
E → 9
B → 5
A → 2
D → 1
```

The heap might internally look like:

```text
             C(10)
            /     \
         E(9)     B(5)
        /   \
      A(2)  D(1)
```

The exact tree arrangement may vary, but the important guarantee is:

```text
Highest priority → root
```

Then when C is removed:

```text
E
```

becomes the next highest-priority patient.

---

# 37. Other Real-Life Examples

## 37.1 Airport

Passengers can have:

```text
Emergency assistance
VIP
Business
Economy
```

A priority system can decide who receives certain services first.

---

## 37.2 Customer Support

Tickets:

```text
Payment failure       → 10
Account locked        → 9
Bug report            → 7
Feature request       → 3
General question      → 1
```

The support team processes the highest-impact tickets first.

---

## 37.3 Job Scheduler

Jobs:

```text
Production deployment → 10
Database backup       → 8
Report generation     → 5
Cleanup               → 1
```

The scheduler can prioritize work.

---

## 37.4 Operating System

Processes can have different scheduling priorities.

```text
Critical process
High priority process
Normal process
Background process
```

The scheduling strategy determines which work should execute first.

---

## 37.5 Network Router

Packets can be classified:

```text
Emergency/control traffic
Real-time traffic
Normal traffic
Background traffic
```

Higher-priority traffic can be handled first depending on the network scheduling policy.

---

## 37.6 E-commerce

Imagine an order fulfillment system:

```text
Order with same-day delivery → 10
Next-day delivery            → 7
Standard delivery             → 3
```

The fulfillment system can prioritize orders.

---

## 37.7 Gaming

A game AI might maintain events:

```text
Enemy attack      → 10
Player movement   → 8
Animation update  → 3
Background event  → 1
```

The event scheduler can process higher-priority events first.

---

# 38. Common Mistakes

## Mistake 1 — Thinking a Heap is Fully Sorted

This is wrong.

For example:

```text
Min Heap:

[1, 4, 2, 10, 7, 5]
```

This is not sorted.

But it satisfies:

```text
parent <= children
```

The heap only guarantees the root is the minimum.

---

## Mistake 2 — Calling Priority Queue and Heap Exactly the Same Thing

Technically:

```text
Priority Queue = ADT
Heap = implementation
```

They are closely related but conceptually different.

---

## Mistake 3 — Assuming Heap Search is O(log n)

Searching for an arbitrary element in a heap is generally:

```text
O(n)
```

A heap efficiently gives access to the root, not arbitrary values.

---

## Mistake 4 — Using a Max Heap for Kth Largest

For Kth Largest, the common optimal pattern is:

```text
Min Heap of size K
```

Why?

Because the smallest among the current top K elements stays at the root.

When a larger value arrives:

```text
insert
```

and if size exceeds K:

```text
remove minimum
```

At the end:

```text
root = Kth largest
```

---

## Mistake 5 — Sorting When K is Small

Suppose:

```text
n = 1,000,000
k = 5
```

Sorting everything costs approximately:

```text
O(n log n)
```

A heap of size 5 can solve many top-K problems in:

```text
O(n log k)
```

which is much smaller.

---

# 39. Interview Cheat Sheet

## Priority Queue

```text
Priority Queue
= elements processed by priority
```

---

## Heap

```text
Heap
= complete binary tree + heap property
```

---

## Min Heap

```text
smallest element at root
```

---

## Max Heap

```text
largest element at root
```

---

## Relationship

```text
Priority Queue
      ↓
Abstract Data Type
      ↓
Binary Heap
      ↓
Efficient implementation
```

---

## Min Heap Complexity

```text
peek      O(1)
insert    O(log n)
remove    O(log n)
```

---

## Max Heap Complexity

```text
peek      O(1)
insert    O(log n)
remove    O(log n)
```

---

## Build Heap

```text
O(n)
```

---

## Heap Sort

```text
O(n log n)
```

---

## Priority Queue with Sorting

Repeatedly sorting is generally inefficient.

```text
Insert + sort repeatedly
```

can become much worse than:

```text
Heap insert
O(log n)
```

---

## Top K

```text
Kth largest
→ Min Heap of size K

Kth smallest
→ Max Heap of size K
```

---

## JavaScript

```text
No standard native PriorityQueue
```

Therefore:

```text
Know how to implement a Heap.
```

---

## LeetCode

LeetCode's JavaScript environment provides Priority Queue helpers such as:

```javascript
MinPriorityQueue
MaxPriorityQueue
```

when supported by the current environment/API.

But don't confuse platform-provided helpers with a JavaScript language feature.

---

# 40. Final Mental Model

If you remember only one diagram, remember this:

```text
                    PRIORITY QUEUE
                          |
                          |
                  Abstract Data Type
                          |
                          |
             "Give me highest/lowest
                 priority quickly"
                          |
                          ↓
                  Binary Heap
                          |
              ┌───────────┴───────────┐
              ↓                       ↓
           Min Heap                Max Heap
              ↓                       ↓
       Smallest at root         Largest at root
              ↓                       ↓
         peek O(1)               peek O(1)
         insert O(log n)         insert O(log n)
         remove O(log n)         remove O(log n)
```

And separately:

```text
                         HEAP
                           |
             ┌─────────────┴─────────────┐
             ↓                           ↓
      Priority Queue                 Heap Sort
             ↓                           ↓
   Dynamic processing              Sort entire array
             ↓                           ↓
      Insert / Remove               O(n log n)
       O(log n)
```

---

# The Most Important Interview Understanding

When an interviewer gives you a problem, don't think:

> "Should I use a heap because heaps are fast?"

Instead ask:

> **"What operation do I need to perform repeatedly?"**

If the answer is:

```text
Give me smallest
Give me largest
Give me highest priority
Give me lowest priority
Give me next closest
Give me next shortest distance
Give me top K
```

then a heap/Priority Queue should immediately come to mind.

---

# A Simple Decision Tree

```text
Do I need to sort everything?
        |
       YES
        ↓
    Sorting
        |
       NO
        ↓
Do I repeatedly need min/max?
        |
       YES
        ↓
   Priority Queue
        |
        ↓
      Heap
```

For top-K:

```text
Need K largest?
      ↓
Min Heap
      ↓
Keep only K elements
      ↓
O(n log k)
```

For Kth smallest:

```text
Need K smallest?
      ↓
Max Heap
      ↓
Keep only K elements
      ↓
O(n log k)
```

For shortest-path selection:

```text
Need smallest distance repeatedly?
      ↓
Min Priority Queue
      ↓
Min Heap
```

---

# One Sentence to Remember

> **A Priority Queue tells us what should come out next; a Heap is one of the most efficient ways to implement that behavior.**

And:

> **Heap Sort uses the same heap concept for a different purpose: sorting an entire collection in O(n log n).**

That distinction will make many Heap and Priority Queue interview problems much easier to recognize.
