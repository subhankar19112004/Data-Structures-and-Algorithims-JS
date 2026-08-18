# 🌳 Heap Data Structure

> A complete guide to **Complete Binary Trees, Heaps, Min Heap, Max Heap, Heap Properties, Array Representation, Heapify, Insertion, Deletion, Priority Queues, Heap Sort, Time Complexity, JavaScript Implementation, and Interview Questions.**

---

## 📚 Table of Contents

* [🌱 What is a Complete Binary Tree?](#-what-is-a-complete-binary-tree)
* [📌 Properties of a Complete Binary Tree](#-properties-of-a-complete-binary-tree)
* [🔍 Complete vs Full vs Perfect Binary Tree](#-complete-vs-full-vs-perfect-binary-tree)
* [🏔️ What is a Heap?](#️-what-is-a-heap)
* [🧩 Heap Properties](#-heap-properties)
* [⬇️ Min Heap](#️-min-heap)
* [⬆️ Max Heap](#️-max-heap)
* [🆚 Min Heap vs Max Heap](#-min-heap-vs-max-heap)
* [📦 Array Representation of Heap](#-array-representation-of-heap)
* [🔢 Parent and Child Index Formulas](#-parent-and-child-index-formulas)
* [➕ Insertion in Heap](#-insertion-in-heap)
* [⬆️ Heapify Up](#️-heapify-up)
* [➖ Deletion from Heap](#-deletion-from-heap)
* [⬇️ Heapify Down](#️-heapify-down)
* [🏗️ Build Heap](#️-build-heap)
* [🔄 Heap Sort](#-heap-sort)
* [🎯 Priority Queue](#-priority-queue)
* [⚡ Time Complexity](#-time-complexity)
* [🌲 Heap vs BST](#-heap-vs-bst)
* [🌳 Heap vs Binary Tree](#-heap-vs-binary-tree)
* [🧠 Important Heap Concepts](#-important-heap-concepts)
* [🎯 Common Heap Problem Patterns](#-common-heap-problem-patterns)
* [💻 JavaScript Implementation](#-javascript-implementation)
* [🎤 Interview Questions](#-interview-questions)
* [📝 Heap Cheat Sheet](#-heap-cheat-sheet)

---

# 🌱 What is a Complete Binary Tree?

Before understanding a Heap, you must understand the **Complete Binary Tree**.

A **Complete Binary Tree** is a binary tree in which:

1. Every level is completely filled except possibly the last level.
2. The last level is filled **from left to right**.

This definition is extremely important because **every Heap is a Complete Binary Tree**.

---

## 📌 Example of a Complete Binary Tree

```text
                1
              /   \
             2     3
            / \   / \
           4   5 6   7
```

Every level is completely filled.

Therefore, this is a Complete Binary Tree.

---

## 📌 Another Complete Binary Tree

```text
                1
              /   \
             2     3
            / \   /
           4   5 6
```

The last level is:

```text
4 → 5 → 6
```

It is filled from **left to right**.

Therefore, this is also a Complete Binary Tree.

---

## ❌ Not a Complete Binary Tree

```text
                1
              /   \
             2     3
            /       \
           4         7
```

The last level contains a gap.

```text
4 → gap → 7
```

The last level is not filled from left to right.

Therefore, this is **not** a Complete Binary Tree.

---

## ❌ Another Invalid Example

```text
                1
              /   \
             2     3
                \
                 6
```

Node `6` appears on the right side while the left position is empty.

Therefore, the tree is not complete.

---

# 📌 Properties of a Complete Binary Tree

A Complete Binary Tree has the following properties:

### 1. Every level except possibly the last is completely filled.

```text
Level 0 → Complete
Level 1 → Complete
Level 2 → Complete
Level 3 → May be partially filled
```

---

### 2. The last level is filled from left to right.

This is the most important property.

```text
Valid:

        1
       / \
      2   3
     / \
    4   5
```

```text
Invalid:

        1
       / \
      2   3
       \
        5
```

---

### 3. There cannot be gaps before existing nodes.

For example:

```text
        1
       / \
      2   3
     /     \
    4       7
```

is invalid because there is a missing position before `7`.

---

# 🔍 Why Is Complete Binary Tree Important for Heaps?

A Heap must always maintain the shape of a Complete Binary Tree.

Consider:

```text
                10
              /    \
             20     30
            / \    /
           40 50  60
```

This is complete.

If we insert another value:

```text
                10
              /    \
             20     30
            / \    / \
           40 50  60 70
```

The new node is placed in the next available position from left to right.

This predictable structure allows us to efficiently store the Heap inside an **array**.

---

# 🔍 Complete vs Full vs Perfect Binary Tree

These three terms are often confused.

## Complete Binary Tree

Every level is full except possibly the last, and the last level is filled from left to right.

```text
        1
       / \
      2   3
     / \
    4   5
```

---

## Full Binary Tree

Every node has either:

```text
0 children
OR
2 children
```

A node cannot have exactly one child.

Example:

```text
        1
       / \
      2   3
     / \
    4   5
```

---

## Perfect Binary Tree

Every internal node has exactly two children **and all leaf nodes are at the same level**.

```text
                1
              /   \
             2     3
            / \   / \
           4   5 6   7
```

---

## 📊 Comparison

| Property                        | Complete | Full | Perfect |
| ------------------------------- | :------: | :--: | :-----: |
| Every level except last is full |     ✅    |   ❌  |    ✅    |
| Last level left aligned         |     ✅    |   ❌  |    ❌    |
| Every node has 0 or 2 children  |     ❌    |   ✅  |    ✅    |
| All leaves at same level        |     ❌    |   ❌  |    ✅    |

> **Heap requires the tree to be Complete, not Full or Perfect.**

---

# 🏔️ What is a Heap?

A **Heap** is a specialized tree-based data structure that satisfies two important conditions:

```text
Heap =
Complete Binary Tree
+
Heap Property
```

So:

```text
          HEAP
            │
      ┌─────┴─────┐
      ↓           ↓
 Complete       Heap
  Binary        Property
   Tree
```

There are two major types:

```text
Min Heap
Max Heap
```

---

# 🧩 Heap Properties

A valid Heap has **two fundamental properties**.

## 1. Shape Property

The Heap must be a:

> **Complete Binary Tree**

Example:

```text
                10
              /    \
             20     30
            / \    /
           40 50  60
```

---

## 2. Heap Property

The relationship between a parent and its children must satisfy a specific rule.

For a **Min Heap**:

```text
Parent ≤ Children
```

For a **Max Heap**:

```text
Parent ≥ Children
```

---

# ⬇️ Min Heap

A **Min Heap** is a Complete Binary Tree where:

> Every parent node is smaller than or equal to its children.

```text
Parent ≤ Left Child
Parent ≤ Right Child
```

Example:

```text
                10
              /    \
            20      30
           / \     / \
          40 50   60 70
```

Check:

```text
10 < 20
10 < 30

20 < 40
20 < 50

30 < 60
30 < 70
```

Therefore, this is a valid Min Heap.

---

# ⭐ Important Min Heap Property

The **smallest element is always at the root**.

```text
                10
              /    \
            20      30
           / \     / \
          40 50   60 70
```

Therefore:

```text
Minimum = 10
```

But notice:

```text
20 < 30
40 < 50
60 < 70
```

is not required.

Only the **parent-child relationship** matters.

---

# ⚠️ Important: Heap Is NOT a Sorted Tree

Consider:

```text
                10
              /    \
            30      20
           / \     / \
          50 40   60 70
```

This is still a valid Min Heap because:

```text
10 < 30
10 < 20

30 < 50
30 < 40

20 < 60
20 < 70
```

But the values are clearly not globally sorted.

Therefore:

> A Heap only guarantees the parent-child ordering, not complete sorting.

---

# ⬆️ Max Heap

A **Max Heap** is a Complete Binary Tree where:

> Every parent node is greater than or equal to its children.

```text
Parent ≥ Left Child
Parent ≥ Right Child
```

Example:

```text
                90
              /    \
            70      80
           / \     / \
          40 50   60 30
```

Therefore:

```text
90 > 70
90 > 80

70 > 40
70 > 50

80 > 60
80 > 30
```

This is a valid Max Heap.

---

# ⭐ Important Max Heap Property

The **largest element is always at the root**.

```text
                90
              /    \
            70      80
           / \     / \
          40 50   60 30
```

Therefore:

```text
Maximum = 90
```

---

# 🆚 Min Heap vs Max Heap

| Feature         | Min Heap           | Max Heap           |
| --------------- | ------------------ | ------------------ |
| Root            | Minimum            | Maximum            |
| Parent relation | Parent ≤ Children  | Parent ≥ Children  |
| `peek()`        | Smallest           | Largest            |
| `extract()`     | Removes minimum    | Removes maximum    |
| Common use      | Min Priority Queue | Max Priority Queue |

---

# 📦 Array Representation of Heap

One of the most important features of a Heap is that it can be efficiently represented using an **array**.

Consider:

```text
                10
              /    \
            20      30
           / \     / \
          40 50   60 70
```

Its array representation is:

```text
[10, 20, 30, 40, 50, 60, 70]
```

The mapping is:

```text
Tree:

                10
              /    \
            20      30
           / \     / \
          40 50   60 70

Array:

Index:  0   1   2   3   4   5   6
Value: 10  20  30  40  50  60  70
```

---

# 🔢 Parent and Child Index Formulas

For **0-based indexing**:

### Parent

For node at index `i`:

```text
parent = Math.floor((i - 1) / 2)
```

---

### Left Child

```text
left = 2 * i + 1
```

---

### Right Child

```text
right = 2 * i + 2
```

---

## Example

Consider:

```text
Array:

[10, 20, 30, 40, 50, 60, 70]
```

For node `20`:

```text
index = 1
```

Left child:

```text
2 × 1 + 1
= 3
```

Value:

```text
40
```

Right child:

```text
2 × 1 + 2
= 4
```

Value:

```text
50
```

Therefore:

```text
        20
       /  \
     40    50
```

---

# 📐 Why Does Array Representation Work?

Because a Complete Binary Tree has no arbitrary gaps.

Consider:

```text
                10
              /    \
            20      30
           / \     / \
          40 50   60 70
```

Nodes can be placed level-by-level:

```text
10
20 30
40 50 60 70
```

Therefore, the array naturally represents the tree structure.

This means we don't need:

```text
left pointer
right pointer
```

for every node.

Instead, indexes tell us where the children are.

---

# ➕ Insertion in Heap

When inserting into a Heap, two things must remain valid:

```text
1. Complete Binary Tree property
2. Heap property
```

### Example — Min Heap

Initial Heap:

```text
                10
              /    \
            20      30
           / \
          40 50
```

Array:

```text
[10, 20, 30, 40, 50]
```

Insert:

```text
5
```

---

## Step 1 — Add at the End

To maintain completeness, insert the new element at the next available position.

```text
                10
              /    \
            20      30
           / \     /
          40 50   5
```

Array:

```text
[10, 20, 30, 40, 50, 5]
```

But the Heap property is broken:

```text
5 < 30
5 < 10
```

---

## Step 2 — Heapify Up

Compare `5` with its parent.

```text
5 < 30
```

Swap:

```text
                10
              /    \
            20       5
           / \      /
          40 50    30
```

Now:

```text
5 < 10
```

Swap again:

```text
                 5
              /    \
            20      10
           / \     /
          40 50   30
```

Now the Min Heap property is restored.

---

# ⬆️ Heapify Up

**Heapify Up** is used when a new element is inserted.

Process:

```text
Insert at end
      ↓
Compare with parent
      ↓
If heap property violated
      ↓
Swap
      ↓
Continue upward
```

For Min Heap:

```text
if child < parent
    swap
```

For Max Heap:

```text
if child > parent
    swap
```

---

# ➖ Deletion in Heap

Typically, when we say **delete from a Heap**, we mean:

> Remove the root element.

For a Min Heap:

```text
Delete Minimum
```

For a Max Heap:

```text
Delete Maximum
```

---

## Example — Min Heap

Initial:

```text
                 10
              /      \
            20        30
           /  \      / \
          40   50   60  70
```

Remove `10`.

We cannot simply leave the root empty.

---

## Step 1 — Move Last Element to Root

Last element:

```text
70
```

Move it to the root:

```text
                 70
              /      \
            20        30
           /  \      /
          40   50   60
```

Now the Heap property is broken.

```text
70 > 20
70 > 30
```

---

## Step 2 — Heapify Down

Compare `70` with its children.

```text
20 < 30
```

Choose the smaller child:

```text
20
```

Swap:

```text
                 20
              /      \
            70        30
           /  \      /
          40   50   60
```

Continue.

For `70`:

```text
40 < 50
```

Swap with `40`:

```text
                 20
              /      \
            40        30
           /  \      /
          70   50   60
```

Heap property restored.

---

# ⬇️ Heapify Down

Heapify Down is used when:

* Removing the root
* Replacing a node with a smaller/larger value
* Restoring Heap property downward

For Min Heap:

```text
Choose smaller child
```

For Max Heap:

```text
Choose larger child
```

Then swap if the Heap property is violated.

---

# 🏗️ Build Heap

Suppose we have an unsorted array:

```text
[40, 10, 30, 50, 20, 60, 5]
```

We want to convert it into a Heap.

This process is called:

> **Build Heap**

The efficient approach is:

```text
Start from the last non-leaf node
        ↓
Heapify Down
        ↓
Move toward root
```

---

# 💡 Why Start From the Last Non-Leaf Node?

Leaf nodes already satisfy the Heap property because they have no children.

For:

```text
[40, 10, 30, 50, 20, 60, 5]
```

Tree:

```text
                40
              /    \
            10      30
           /  \    / \
          50  20  60  5
```

Leaf nodes:

```text
50, 20, 60, 5
```

There is nothing to heapify for them.

Therefore, we start from the last non-leaf node.

---

# ⏱️ Build Heap Complexity

A very important interview fact:

```text
Build Heap = O(n)
```

Not:

```text
O(n log n)
```

Although inserting `n` elements one by one would take:

```text
O(n log n)
```

the optimized bottom-up Build Heap algorithm runs in:

```text
O(n)
```

---

# 🔄 Heap Sort

Heap Sort uses a Heap to sort an array.

### Basic idea

For ascending order:

```text
Build Max Heap
      ↓
Move maximum to the end
      ↓
Reduce Heap size
      ↓
Heapify Down
      ↓
Repeat
```

Example:

```text
[4, 10, 3, 5, 1]
```

After building a Max Heap:

```text
                10
              /    \
             5      3
            / \
           4   1
```

Array:

```text
[10, 5, 3, 4, 1]
```

Move `10` to the end:

```text
[1, 5, 3, 4, 10]
```

Heapify remaining portion:

```text
[5, 4, 3, 1, 10]
```

Continue until sorted.

Final:

```text
[1, 3, 4, 5, 10]
```

---

# ⚡ Heap Sort Complexity

| Case        |   Complexity |
| ----------- | -----------: |
| Best        | `O(n log n)` |
| Average     | `O(n log n)` |
| Worst       | `O(n log n)` |
| Extra Space |       `O(1)` |
| Stable?     |         ❌ No |

Heap Sort provides guaranteed:

```text
O(n log n)
```

time complexity.

---

# 🎯 Priority Queue

A Heap is commonly used to implement a **Priority Queue**.

A Priority Queue removes elements according to their priority rather than insertion order.

---

## Min Priority Queue

The smallest priority comes first.

Example:

```text
Tasks:

5
2
8
1
3
```

Min Heap:

```text
        1
      /   \
     2     8
    / \
   5   3
```

Removal order:

```text
1 → 2 → 3 → 5 → 8
```

---

## Max Priority Queue

The largest priority comes first.

```text
8 → 5 → 3 → 2 → 1
```

---

# 🧠 Why Are Heaps Good for Priority Queues?

Because:

```text
Peek Root → O(1)
Insert     → O(log n)
Extract    → O(log n)
```

This gives an excellent balance between:

* Fast access to highest/lowest priority
* Efficient insertion
* Efficient removal

---

# ⚡ Time Complexity

Let:

```text
n = number of elements
h = height of Heap
```

Because a Heap is a Complete Binary Tree:

```text
h = O(log n)
```

Therefore:

| Operation                |   Complexity |
| ------------------------ | -----------: |
| Peek                     |       `O(1)` |
| Insert                   |   `O(log n)` |
| Extract Min              |   `O(log n)` |
| Extract Max              |   `O(log n)` |
| Delete                   |   `O(log n)` |
| Heapify Up               |   `O(log n)` |
| Heapify Down             |   `O(log n)` |
| Build Heap               |       `O(n)` |
| Heap Sort                | `O(n log n)` |
| Search arbitrary element |       `O(n)` |

---

# 🔍 Why Is Heap Search O(n)?

A common misconception is:

> "Heap has O(log n) operations, so searching must also be O(log n)."

Not true.

A Heap only guarantees:

```text
Parent ≤ Children
```

or:

```text
Parent ≥ Children
```

It does **not** tell us whether the target is in the left or right subtree.

Example:

```text
                10
              /    \
            30      20
           / \     / \
          50 40   60 70
```

If searching for `40`, we don't have enough ordering information to immediately eliminate the right subtree.

Therefore arbitrary search can require:

```text
O(n)
```

---

# 🌲 Heap vs BST

| Feature          | Heap                 | BST               |
| ---------------- | -------------------- | ----------------- |
| Structure        | Complete Binary Tree | Binary Tree       |
| Ordering         | Parent-child         | Left-root-right   |
| Minimum          | Root in Min Heap     | Leftmost          |
| Maximum          | Root in Max Heap     | Rightmost         |
| Search           | `O(n)`               | `O(h)`            |
| Insert           | `O(log n)`           | `O(h)`            |
| Delete root      | `O(log n)`           | Depends           |
| Peek min/max     | `O(1)`               | Usually `O(h)`    |
| Sorted traversal | ❌ No                 | ✅ Inorder         |
| Common use       | Priority Queue       | Ordered Searching |

---

# 🌳 Heap vs Binary Tree

A Heap is a **specialized Binary Tree**.

Every Heap:

```text
Complete Binary Tree
+
Heap Property
```

But a normal Binary Tree does not necessarily have either of these properties.

---

# 🧠 Important Heap Concepts

## 1. Heap Is Not a Binary Search Tree

A Min Heap:

```text
                10
              /    \
            30      20
```

is valid because:

```text
10 < 30
10 < 20
```

But this does not mean:

```text
30 < 20
```

Therefore, Heap ordering is different from BST ordering.

---

# 2. Root Has Special Meaning

### Min Heap

```text
Root = Minimum
```

### Max Heap

```text
Root = Maximum
```

This gives:

```text
Peek = O(1)
```

---

# 3. Heap Does Not Need Node Pointers

Unlike a typical Binary Tree:

```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

a Heap is usually represented using:

```js
const heap = [];
```

The indexes determine the relationships.

---

# 4. Leaf Nodes Are Already Heapified

Leaf nodes have no children.

Therefore, they automatically satisfy the Heap property.

This is why Build Heap starts from the last non-leaf node.

---

# 5. Last Non-Leaf Node

For an array of length `n` using 0-based indexing:

```text
lastNonLeaf = Math.floor(n / 2) - 1
```

Example:

```text
n = 7
```

```text
Math.floor(7 / 2) - 1
= 3 - 1
= 2
```

Therefore index `2` is the last non-leaf node.

---

# 6. Heap Height

Because a Heap is a Complete Binary Tree:

```text
Height = O(log n)
```

This is the reason insertion and extraction are:

```text
O(log n)
```

---

# 🎯 Common Heap Problem Patterns

| Problem                     | Common Technique |
| --------------------------- | ---------------- |
| Find minimum repeatedly     | Min Heap         |
| Find maximum repeatedly     | Max Heap         |
| Kth smallest                | Min/Max Heap     |
| Kth largest                 | Min/Max Heap     |
| Top K elements              | Heap             |
| Priority Queue              | Heap             |
| Merge K sorted arrays       | Min Heap         |
| Merge K sorted linked lists | Min Heap         |
| Running median              | Two Heaps        |
| Task scheduling             | Priority Queue   |
| CPU scheduling              | Heap             |
| Heap Sort                   | Heap             |
| Find largest K elements     | Min Heap         |
| Find smallest K elements    | Max Heap         |

---

# 🏆 Top K Pattern

Suppose:

```text
[10, 3, 5, 20, 8, 15]
```

We need:

```text
Top 3 largest elements
```

One common approach is a **Min Heap of size K**.

Keep only the largest `K` elements.

Concept:

```text
Insert element
      ↓
If heap size > K
      ↓
Remove minimum
```

At the end:

```text
Heap contains the K largest elements
```

Complexity:

```text
O(n log k)
```

This is much better than sorting the entire array when `k` is small relative to `n`.

---

# 🔢 Kth Largest Element

A common approach:

```text
Use Min Heap
Keep size = K
```

For each number:

```text
Add number
      ↓
If size > K
      ↓
Remove minimum
```

At the end:

```text
Heap root = Kth largest
```

Complexity:

```text
O(n log k)
```

---

# 🔢 Kth Smallest Element

Similarly, use a **Max Heap of size K**.

```text
Add element
      ↓
If size > K
      ↓
Remove maximum
```

At the end:

```text
Heap root = Kth smallest
```

Complexity:

```text
O(n log k)
```

---

# 🔀 Merge K Sorted Arrays

Suppose:

```text
A = [1, 4, 7]
B = [2, 5, 8]
C = [3, 6, 9]
```

Instead of comparing every element repeatedly, use a **Min Heap**.

Initially:

```text
1
2
3
```

The smallest element is always at the root.

Extract:

```text
1
```

Then add the next element from its array:

```text
4
```

Heap:

```text
2
3
4
```

Continue.

Final:

```text
1 2 3 4 5 6 7 8 9
```

Complexity:

```text
O(n log k)
```

where:

```text
n = total number of elements
k = number of arrays
```

---

# 💻 JavaScript Implementation

## Min Heap

```js
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    peek() {
        return this.heap.length > 0
            ? this.heap[0]
            : null;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const minimum = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return minimum;
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;

            let smallestIndex = index;

            if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) {
                break;
            }

            [this.heap[index], this.heap[smallestIndex]] =
                [this.heap[smallestIndex], this.heap[index]];

            index = smallestIndex;
        }
    }
}
```

---

# 🧪 Min Heap Example

```js
const minHeap = new MinHeap();

minHeap.insert(40);
minHeap.insert(20);
minHeap.insert(10);
minHeap.insert(30);
minHeap.insert(5);

console.log(minHeap.peek());
```

Output:

```text
5
```

Extract minimum:

```js
console.log(minHeap.extractMin());
```

Output:

```text
5
```

Next minimum:

```js
console.log(minHeap.extractMin());
```

Output:

```text
10
```

---

# ⬆️ Max Heap Implementation

The logic is the same, but comparisons are reversed.

```js
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap.length > 0
            ? this.heap[0]
            : null;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const maximum = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return maximum;
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;

            let largestIndex = index;

            if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex] > this.heap[largestIndex]
            ) {
                largestIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] > this.heap[largestIndex]
            ) {
                largestIndex = rightIndex;
            }

            if (largestIndex === index) {
                break;
            }

            [this.heap[index], this.heap[largestIndex]] =
                [this.heap[largestIndex], this.heap[index]];

            index = largestIndex;
        }
    }
}
```

---

# 🏗️ Build Min Heap From Array

Given:

```js
const arr = [40, 10, 30, 50, 20, 60, 5];
```

The efficient approach is **bottom-up heapification**.

```js
function buildMinHeap(arr) {
    const lastNonLeaf = Math.floor(arr.length / 2) - 1;

    for (let i = lastNonLeaf; i >= 0; i--) {
        heapifyDown(arr, i);
    }

    return arr;
}
```

The important idea:

```text
Last Non-Leaf
      ↓
Heapify Down
      ↓
Move backward
      ↓
Root
```

Time complexity:

```text
O(n)
```

---

# 🔄 Heap Sort Concept

For **ascending order**:

```text
1. Build Max Heap
2. Swap root with last element
3. Reduce heap size
4. Heapify Down
5. Repeat
```

For **descending order**:

```text
1. Build Min Heap
2. Swap root with last element
3. Reduce heap size
4. Heapify Down
5. Repeat
```

---

# 🎤 Interview Questions

## 🟢 Beginner

### 1. What is a Heap?

Expected answer:

> A Heap is a Complete Binary Tree that satisfies a Heap ordering property.

---

### 2. What is a Complete Binary Tree?

Expected answer:

> A Binary Tree where every level is completely filled except possibly the last, and the last level is filled from left to right.

---

### 3. What is a Min Heap?

```text
Parent ≤ Children
```

The minimum value is at the root.

---

### 4. What is a Max Heap?

```text
Parent ≥ Children
```

The maximum value is at the root.

---

### 5. What is the difference between Min Heap and Max Heap?

| Min Heap          | Max Heap          |
| ----------------- | ----------------- |
| Minimum at root   | Maximum at root   |
| Parent ≤ Children | Parent ≥ Children |

---

### 6. Is a Heap always a Complete Binary Tree?

**Yes.**

A Heap must satisfy the Complete Binary Tree shape property.

---

### 7. Is a Heap sorted?

**No.**

Only the parent-child relationship is guaranteed.

---

### 8. What is the time complexity of Heap insertion?

```text
O(log n)
```

because the element may move from the bottom to the root.

---

### 9. What is the complexity of extracting the root?

```text
O(log n)
```

because Heapify Down may travel the height of the tree.

---

### 10. What is the complexity of peeking at the root?

```text
O(1)
```

---

# 🟡 Intermediate Interview Questions

### 11. Why are Heaps usually represented using arrays?

Because a Heap is a Complete Binary Tree.

There are no arbitrary gaps, so indexes can represent parent-child relationships efficiently.

---

### 12. What are the formulas for a Heap using 0-based indexing?

```text
Parent      = Math.floor((i - 1) / 2)
Left Child  = 2 * i + 1
Right Child = 2 * i + 2
```

---

### 13. What is Heapify?

Heapify is the process of restoring the Heap property.

Two major forms:

```text
Heapify Up
Heapify Down
```

---

### 14. When is Heapify Up used?

Primarily after:

```text
Insertion
```

The newly inserted element starts at the bottom and may move upward.

---

### 15. When is Heapify Down used?

Primarily after:

```text
Removing the root
Building a Heap
```

A node may need to move downward.

---

### 16. Why does Heap insertion take O(log n)?

Because the Heap is Complete.

Therefore its height is:

```text
O(log n)
```

The inserted node can move upward at most one path from leaf to root.

---

### 17. Why does Build Heap take O(n)?

The bottom-up Build Heap algorithm performs heapification starting from the last non-leaf node.

Although an individual Heapify Down can take `O(log n)`, most nodes are close to the leaves and require very little work.

The total work is:

```text
O(n)
```

---

### 18. Why is searching an arbitrary value O(n) in a Heap?

Because a Heap does not provide enough ordering information to eliminate an entire subtree.

It only guarantees:

```text
Parent ≤ Children
```

or:

```text
Parent ≥ Children
```

---

### 19. What is the height of a Heap?

```text
O(log n)
```

because a Heap is a Complete Binary Tree.

---

### 20. What is the difference between Heapify Up and Heapify Down?

| Heapify Up              | Heapify Down           |
| ----------------------- | ---------------------- |
| Usually after insertion | Usually after deletion |
| Bottom → Root           | Root → Bottom          |
| Compare with parent     | Compare with children  |

---

# 🔴 Advanced Interview Questions

### 21. Why is Build Heap O(n) instead of O(n log n)?

This is one of the most frequently asked Heap questions.

The reason is that Build Heap uses a **bottom-up approach**.

Most nodes are leaves or near leaves and therefore cannot move very far.

The total work across all nodes is linear:

```text
O(n)
```

---

### 22. Why is Heap Sort O(n log n)?

Heap construction:

```text
O(n)
```

Then we perform approximately `n` extractions.

Each extraction requires:

```text
O(log n)
```

Therefore:

```text
O(n) + O(n log n)
```

which becomes:

```text
O(n log n)
```

---

### 23. Is Heap Sort stable?

No.

```text
Heap Sort → Not Stable
```

---

### 24. Is Heap Sort in-place?

Yes, the standard array-based Heap Sort uses:

```text
O(1)
```

auxiliary space.

---

### 25. Why is a Heap useful for Priority Queues?

Because it provides:

```text
Peek        → O(1)
Insert      → O(log n)
Extract     → O(log n)
```

This makes it highly efficient for priority-based processing.

---

### 26. How do you find the Kth largest element efficiently?

A common approach is:

```text
Min Heap of size K
```

Maintain only the largest `K` values.

Complexity:

```text
O(n log k)
```

---

### 27. How do you find the Kth smallest element efficiently?

Use:

```text
Max Heap of size K
```

Complexity:

```text
O(n log k)
```

---

### 28. How do you merge K sorted arrays?

Use a:

```text
Min Heap
```

Store the smallest current element from each array.

Complexity:

```text
O(n log k)
```

---

### 29. Can a Heap be used to implement a Priority Queue?

Yes.

This is one of the most common applications of a Heap.

---

### 30. What is the difference between a Heap and a BST?

A Heap is optimized for:

```text
Minimum / Maximum
Priority
```

A BST is optimized for:

```text
Ordered Searching
```

---

# 🧪 Common Interview Traps

## ❌ Trap 1

> "The smallest element in a Min Heap is the leftmost element."

Wrong.

The smallest element is:

```text
Root
```

---

## ❌ Trap 2

> "All elements in a Min Heap are sorted."

Wrong.

Only parent-child ordering is guaranteed.

---

## ❌ Trap 3

> "Searching in a Heap is O(log n)."

Wrong.

Arbitrary search is generally:

```text
O(n)
```

---

## ❌ Trap 4

> "Build Heap is O(n log n)."

Not with the optimized bottom-up algorithm.

```text
Build Heap = O(n)
```

---

## ❌ Trap 5

> "Every Complete Binary Tree is a Heap."

Wrong.

A Complete Binary Tree must also satisfy the Heap property.

```text
Heap =
Complete Binary Tree
+
Heap Property
```

---

# 📝 Heap Cheat Sheet

## Definition

```text
Heap
  =
Complete Binary Tree
+
Heap Property
```

---

## Complete Binary Tree

```text
Every level completely filled
except possibly the last.

Last level:
Filled from LEFT → RIGHT
```

---

## Min Heap

```text
Parent ≤ Children

Root = Minimum
```

---

## Max Heap

```text
Parent ≥ Children

Root = Maximum
```

---

## Array Formulas

For index `i`:

```text
Parent
= Math.floor((i - 1) / 2)

Left Child
= 2 * i + 1

Right Child
= 2 * i + 2
```

---

## Operations

```text
Peek
O(1)
```

```text
Insert
O(log n)
↓
Heapify Up
```

```text
Extract
O(log n)
↓
Heapify Down
```

```text
Build Heap
O(n)
```

```text
Heap Sort
O(n log n)
```

---

## Searching

```text
Search arbitrary element
        ↓
      O(n)
```

Because Heap ordering is only between:

```text
Parent ↔ Children
```

---

# 🎯 Most Important Heap Patterns

| Requirement            | Use                |
| ---------------------- | ------------------ |
| Get minimum repeatedly | Min Heap           |
| Get maximum repeatedly | Max Heap           |
| Priority Queue         | Heap               |
| Kth largest            | Min Heap of size K |
| Kth smallest           | Max Heap of size K |
| Top K largest          | Min Heap of size K |
| Top K smallest         | Max Heap of size K |
| Merge K sorted arrays  | Min Heap           |
| Merge K sorted lists   | Min Heap           |
| Running median         | Two Heaps          |
| Heap Sort              | Heap               |
| Task Scheduling        | Priority Queue     |

---

# 🧠 Final Mental Model

Think about a Heap in two layers:

```text
                    HEAP
                      │
            ┌─────────┴─────────┐
            │                   │
       SHAPE PROPERTY      ORDER PROPERTY
            │                   │
            ↓                   ↓
     Complete Binary        Min / Max
          Tree                Heap
```

### Min Heap

```text
                    10
                  /    \
                20      30
               /  \    /  \
              40  50  60  70

             Root = Minimum
```

### Max Heap

```text
                    70
                  /    \
                50      60
               /  \    /  \
              20  40  10  30

             Root = Maximum
```

---

# 🚀 Final Takeaways

Remember these **10 rules**:

1. **A Heap is a Complete Binary Tree.**
2. **The last level is filled from left to right.**
3. **Min Heap → Parent ≤ Children.**
4. **Max Heap → Parent ≥ Children.**
5. **Min Heap root = Minimum.**
6. **Max Heap root = Maximum.**
7. **Heap is not globally sorted.**
8. **Heap is usually represented using an array.**
9. **Insertion → Heapify Up → `O(log n)`.**
10. **Deletion → Heapify Down → `O(log n)`.**

And the most important complexity facts:

```text
┌──────────────────────────────┬───────────┐
│ Operation                    │ Complexity│
├──────────────────────────────┼───────────┤
│ Peek                         │ O(1)      │
│ Insert                       │ O(log n)  │
│ Extract Min / Max            │ O(log n)  │
│ Heapify Up                   │ O(log n)  │
│ Heapify Down                 │ O(log n)  │
│ Build Heap                   │ O(n)      │
│ Search                       │ O(n)      │
│ Heap Sort                    │ O(n log n)│
└──────────────────────────────┴───────────┘
```

> **Heap = Complete Binary Tree + Heap Property**
>
> **Min Heap → Minimum at Root**
>
> **Max Heap → Maximum at Root**
>
> **Insert → Heapify Up**
>
> **Extract → Heapify Down**
>
> **Build Heap → O(n)**
>
> **Heap Sort → O(n log n)**
>
> **Priority Queue → One of the most important applications of Heap**
