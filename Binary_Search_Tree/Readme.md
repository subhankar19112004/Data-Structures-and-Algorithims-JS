# 🌳 Binary Search Tree (BST)

> A complete guide to **Binary Search Trees (BST)** covering fundamentals, properties, traversals, insertion, deletion, searching, complexity, important concepts, patterns, and interview questions.

---

## 📚 Table of Contents

* [🌳 What is a Binary Search Tree?](#-what-is-a-binary-search-tree)
* [🏗️ Structure of a BST](#️-structure-of-a-bst)
* [📌 BST Properties](#-bst-properties)
* [🔐 BST Ordering Rule](#-bst-ordering-rule)
* [🔄 Tree Traversals](#-tree-traversals)
* [⭐ Why Inorder Traversal Gives Sorted Order](#-why-inorder-traversal-gives-sorted-order)
* [🔎 Searching in BST](#-searching-in-bst)
* [➕ Insertion](#-insertion)
* [➖ Deletion](#-deletion)
* [⬅️ Inorder Predecessor](#️-inorder-predecessor)
* [➡️ Inorder Successor](#️-inorder-successor)
* [🔽 Minimum and Maximum](#-minimum-and-maximum)
* [📏 Height of BST](#-height-of-bst)
* [⚡ Time Complexity](#-time-complexity)
* [⚖️ Balanced vs Skewed BST](#️-balanced-vs-skewed-bst)
* [🌲 BST vs Binary Tree](#-bst-vs-binary-tree)
* [🏔️ BST vs Heap](#️-bst-vs-heap)
* [🧠 Important BST Concepts](#-important-bst-concepts)
* [🎯 Common BST Problem Patterns](#-common-bst-problem-patterns)
* [💻 JavaScript Implementation](#-javascript-implementation)
* [🎤 Interview Questions](#-interview-questions)
* [📝 BST Cheat Sheet](#-bst-cheat-sheet)

---

# 🌳 What is a Binary Search Tree?

A **Binary Search Tree (BST)** is a special type of **Binary Tree** in which every node follows an ordering rule.

For every node:

```text
All values in Left Subtree < Node Value < All values in Right Subtree
```

### Example

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

For the root `50`:

```text
Left Subtree  → 20, 30, 40
Right Subtree → 60, 70, 80
```

Therefore:

```text
20 < 30 < 40 < 50 < 60 < 70 < 80
```

The important point is that the BST property must be true **recursively for every node**.

---

# 🏗️ Structure of a BST

Each node generally contains three things:

```text
┌──────────────┐
│     Node     │
├──────────────┤
│    value     │
│    left      │
│    right     │
└──────────────┘
```

### JavaScript Node

```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

---

# 📌 BST Properties

A Binary Search Tree has the following important properties.

## 1. Each node has at most two children

A node can have:

* `0` children
* `1` child
* `2` children

But never more than two.

---

## 2. Left subtree contains smaller values

For every node:

```text
Left Subtree < Current Node
```

Example:

```text
        50
       /
      30
```

Since:

```text
30 < 50
```

the relationship is valid.

---

## 3. Right subtree contains greater values

```text
        50
          \
           70
```

Since:

```text
70 > 50
```

the relationship is valid.

---

## 4. The property applies recursively

Consider:

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

For `50`:

```text
20, 30, 40 < 50 < 60, 70, 80
```

For `30`:

```text
20 < 30 < 40
```

For `70`:

```text
60 < 70 < 80
```

Therefore, the entire tree is a valid BST.

---

## 5. Inorder traversal produces sorted order

For a valid BST:

```text
Inorder = Left → Root → Right
```

produces values in **ascending order**.

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

---

## 6. BST search depends on tree height

BST operations have complexity:

```text
O(h)
```

where `h` is the height of the tree.

Therefore:

```text
Balanced BST → O(log n)
Skewed BST   → O(n)
```

---

## 7. A BST does not have to be balanced

This is a valid BST:

```text
10
  \
   20
     \
      30
        \
         40
```

However, its performance becomes similar to a linked list.

---

# 🔐 BST Ordering Rule

The fundamental rule is:

```text
             Node
            /    \
           /      \
     Smaller     Greater
      Values       Values
```

Formally:

```text
All values in left subtree  < node
All values in right subtree > node
```

This rule must hold for the **entire subtree**, not only the immediate children.

---

# 🔄 Tree Traversals

There are four fundamental tree traversals.

| Traversal       | Order               |
| --------------- | ------------------- |
| Inorder         | Left → Root → Right |
| Preorder        | Root → Left → Right |
| Postorder       | Left → Right → Root |
| Reverse Inorder | Right → Root → Left |

For this BST:

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

### Inorder

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

### Preorder

```text
50 → 30 → 20 → 40 → 70 → 60 → 80
```

### Postorder

```text
20 → 40 → 30 → 60 → 80 → 70 → 50
```

### Reverse Inorder

```text
80 → 70 → 60 → 50 → 40 → 30 → 20
```

---

# ⭐ Why Inorder Traversal Gives Sorted Order

This is one of the **most important BST concepts**.

The two rules are:

### BST Rule

```text
Left < Root < Right
```

### Inorder Rule

```text
Left → Root → Right
```

These two rules perfectly match.

---

## Step-by-Step Example

Consider:

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

### Step 1 — Visit Left Subtree

The left subtree of `50` is:

```text
        30
       /  \
     20    40
```

Its inorder traversal is:

```text
20 → 30 → 40
```

---

### Step 2 — Visit Root

Now visit:

```text
50
```

Result:

```text
20 → 30 → 40 → 50
```

---

### Step 3 — Visit Right Subtree

The right subtree is:

```text
        70
       /  \
     60    80
```

Its inorder traversal is:

```text
60 → 70 → 80
```

Final result:

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

Therefore:

> **Inorder traversal of a valid BST always produces values in ascending sorted order.**

---

# 💡 Why This Works Recursively

For every node:

```text
Left Subtree < Node < Right Subtree
```

Inorder processes:

```text
Left Subtree
      ↓
Node
      ↓
Right Subtree
```

Therefore:

```text
Smaller values
      ↓
Current value
      ↓
Greater values
```

And because the same rule applies recursively to every subtree, the **entire traversal becomes sorted**.

---

# ⚠️ Important: Binary Tree ≠ BST

Not every Binary Tree is a BST.

Consider:

```text
        50
       /  \
      70   20
```

This is a Binary Tree.

But it is **not a BST** because:

```text
70 > 50
```

but `70` is in the left subtree.

Its inorder traversal is:

```text
70 → 50 → 20
```

which is not sorted.

### Therefore:

```text
Binary Tree
     +
BST Ordering Property
     ↓
Inorder = Sorted
```

---

# 🔎 Searching in BST

BST search works by comparing the target with the current node.

### Rules

```text
target < current
        ↓
      LEFT
```

```text
target > current
        ↓
      RIGHT
```

```text
target === current
        ↓
      FOUND
```

### Example

Search for `60`:

```text
                50
              /    \
            30      70
                   /  \
                  60   80
```

Start at `50`:

```text
60 > 50
```

Go right.

At `70`:

```text
60 < 70
```

Go left.

At `60`:

```text
60 === 60
```

Found.

Path:

```text
50 → 70 → 60
```

---

# ➕ Insertion

To insert a value:

1. Start at the root.
2. Compare the value with the current node.
3. If smaller, go left.
4. If greater, go right.
5. Continue until an empty position is found.
6. Insert the new node.

### Example: Insert `65`

```text
                50
              /    \
            30      70
                   /  \
                  60   80
```

Comparisons:

```text
65 > 50  → Right
65 < 70  → Left
65 > 60  → Right
```

Result:

```text
                50
              /    \
            30      70
                   /  \
                  60   80
                    \
                     65
```

---

# ➖ Deletion

Deletion has **three important cases**.

```text
Case 1 → Leaf Node
Case 2 → One Child
Case 3 → Two Children
```

---

## Case 1 — Delete a Leaf Node

A leaf has no children.

```text
        50
       /  \
     30    70
```

Delete `30`:

```text
        50
          \
           70
```

Simply remove the node.

---

## Case 2 — Delete Node With One Child

Example:

```text
        50
          \
           70
             \
              80
```

Delete `70`.

Its child replaces it:

```text
        50
          \
           80
```

---

## Case 3 — Delete Node With Two Children

Example:

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

Suppose we delete `50`.

We cannot simply remove it because it has two children.

We use either:

### Inorder Successor

The smallest value in the right subtree:

```text
60
```

or:

### Inorder Predecessor

The largest value in the left subtree:

```text
40
```

Using successor:

```text
                60
              /    \
            30      70
           /  \      \
         20   40      80
```

The BST property is preserved.

---

# ➡️ Inorder Successor

The **inorder successor** of a node is the smallest value that is greater than that node.

Given:

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

| Node | Successor |
| ---: | --------: |
|   20 |        30 |
|   30 |        40 |
|   40 |        50 |
|   50 |        60 |
|   60 |        70 |
|   70 |        80 |
|   80 |      None |

### Important Use

Inorder successor is commonly used when deleting a node with **two children**.

---

# ⬅️ Inorder Predecessor

The **inorder predecessor** is the largest value smaller than the current node.

| Node | Predecessor |
| ---: | ----------: |
|   20 |        None |
|   30 |          20 |
|   40 |          30 |
|   50 |          40 |
|   60 |          50 |
|   70 |          60 |
|   80 |          70 |

---

# 🔽 Minimum and Maximum

## Minimum

The minimum value is always the **leftmost node**.

```text
                50
               /
             30
            /
          20
         /
       10
```

Minimum:

```text
10
```

Algorithm:

```text
Start at root
     ↓
Keep moving LEFT
     ↓
Stop when left === null
```

---

## Maximum

The maximum value is always the **rightmost node**.

```text
50
  \
   70
     \
      80
        \
         100
```

Maximum:

```text
100
```

Algorithm:

```text
Start at root
     ↓
Keep moving RIGHT
     ↓
Stop when right === null
```

---

# 📏 Height of BST

The **height** is the number of edges on the longest path from the root to a leaf.

Example:

```text
        50
       /
     30
     /
   20
```

Longest path:

```text
50 → 30 → 20
```

Height:

```text
2
```

> Some implementations define height as the number of nodes instead of edges. Always check the convention used by the problem.

---

# ⚡ Time Complexity

BST operations depend on the tree height `h`.

| Operation | Balanced / Average | Worst Case |
| --------- | -----------------: | ---------: |
| Search    |         `O(log n)` |     `O(n)` |
| Insert    |         `O(log n)` |     `O(n)` |
| Delete    |         `O(log n)` |     `O(n)` |
| Minimum   |         `O(log n)` |     `O(n)` |
| Maximum   |         `O(log n)` |     `O(n)` |
| Traversal |             `O(n)` |     `O(n)` |

The fundamental relationship is:

```text
BST Operation
      ↓
   O(h)
```

Where:

```text
Balanced BST → h ≈ log n
Skewed BST   → h ≈ n
```

---

# ⚖️ Balanced vs Skewed BST

## Balanced BST

```text
                50
              /    \
            30      70
           /  \    /  \
         20   40  60   80
```

Height:

```text
O(log n)
```

Operations:

```text
Search    → O(log n)
Insertion → O(log n)
Deletion  → O(log n)
```

---

## Skewed BST

```text
10
  \
   20
     \
      30
        \
         40
           \
            50
```

Height:

```text
O(n)
```

Operations:

```text
Search    → O(n)
Insertion → O(n)
Deletion  → O(n)
```

A skewed BST behaves almost like a **Linked List**.

---

# 🌲 BST vs Binary Tree

| Feature           | Binary Tree      | BST        |
| ----------------- | ---------------- | ---------- |
| Maximum children  | 2                | 2          |
| Ordering          | ❌ Not required   | ✅ Required |
| Left < Root       | ❌ Not guaranteed | ✅ Yes      |
| Right > Root      | ❌ Not guaranteed | ✅ Yes      |
| Inorder sorted    | ❌ No             | ✅ Yes      |
| Efficient search  | ❌ Not guaranteed | ✅ Possible |
| Search complexity | `O(n)`           | `O(h)`     |

> Every BST is a Binary Tree, but every Binary Tree is **not** a BST.

---

# 🏔️ BST vs Heap

| Feature                | BST                      | Heap             |
| ---------------------- | ------------------------ | ---------------- |
| Main purpose           | Ordered searching        | Priority access  |
| Left/Right ordering    | Yes                      | No               |
| Root property          | Depends on values        | Min/Max          |
| Minimum access         | Leftmost                 | Root in Min Heap |
| Maximum access         | Rightmost                | Root in Max Heap |
| Search arbitrary value | Efficient                | `O(n)` generally |
| Typical use            | Searching / ordered data | Priority Queue   |

### BST

```text
Left < Root < Right
```

### Min Heap

```text
Parent ≤ Children
```

### Max Heap

```text
Parent ≥ Children
```

---

# 🧠 Important BST Concepts

## 1. Valid BST

A valid BST must satisfy the ordering constraint for the **entire subtree**.

Incorrect approach:

```text
left < root
right > root
```

only for immediate children.

Consider:

```text
                50
                  \
                   70
                  /
                 20
```

`20 < 70`, so it looks locally valid.

But `20` is in the right subtree of `50`.

Therefore:

```text
20 > 50
```

must be true.

It isn't.

So this is **not a valid BST**.

---

# 🔐 Validating a BST Using Bounds

A better approach is to maintain a valid range for every node.

For the root:

```text
(-∞, +∞)
```

For the left child of `50`:

```text
(-∞, 50)
```

For the right child of `50`:

```text
(50, +∞)
```

For the left child of `70`:

```text
(50, 70)
```

Therefore, `20` is invalid because:

```text
20 < 50
```

---

# 🔢 Duplicate Values

Different BST implementations may handle duplicates differently.

### Option 1 — No duplicates

```text
Left < Root < Right
```

### Option 2 — Duplicates on left

```text
Left ≤ Root < Right
```

### Option 3 — Duplicates on right

```text
Left < Root ≤ Right
```

There is no universal rule.

> Always check the duplicate-value convention used by the problem.

---

# 🥇 Kth Smallest Element

Because inorder traversal gives sorted order:

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

We can find:

```text
1st smallest → 20
2nd smallest → 30
3rd smallest → 40
```

Therefore:

> **Kth Smallest → Inorder Traversal**

---

# 🥈 Kth Largest Element

Use reverse inorder:

```text
Right → Root → Left
```

Result:

```text
80 → 70 → 60 → 50 → 40 → 30 → 20
```

Therefore:

> **Kth Largest → Reverse Inorder**

---

# 🔢 Floor

The **floor** of `x` is:

> The largest value in the BST that is less than or equal to `x`.

Example:

```text
BST values:

20  30  40  50  60  70  80
```

For:

```text
x = 55
```

Floor:

```text
50
```

---

# 🔢 Ceiling

The **ceiling** of `x` is:

> The smallest value in the BST that is greater than or equal to `x`.

For:

```text
x = 55
```

Ceiling:

```text
60
```

---

# 👥 Lowest Common Ancestor in BST

BST ordering makes LCA easier.

For nodes `p` and `q`:

```text
If p < root AND q < root
        ↓
    Go LEFT
```

```text
If p > root AND q > root
        ↓
    Go RIGHT
```

Otherwise:

```text
Root is the LCA
```

---

# 🎯 Common BST Problem Patterns

| Problem Type      | Pattern                        |
| ----------------- | ------------------------------ |
| Search            | Compare and move left/right    |
| Insert            | Compare and find null position |
| Delete            | Three deletion cases           |
| Minimum           | Keep moving left               |
| Maximum           | Keep moving right              |
| Kth Smallest      | Inorder                        |
| Kth Largest       | Reverse Inorder                |
| Sorted Values     | Inorder                        |
| Descending Values | Reverse Inorder                |
| Validate BST      | Bounds                         |
| LCA               | Compare node values            |
| Floor             | Track best smaller value       |
| Ceiling           | Track best greater value       |

---

# 💻 JavaScript Implementation

## Tree Node

```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

---

## Insert

```js
function insert(root, value) {
    if (root === null) {
        return new TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else if (value > root.value) {
        root.right = insert(root.right, value);
    }

    return root;
}
```

---

## Inorder Traversal

```js
function inorder(root, result = []) {
    if (root === null) {
        return result;
    }

    inorder(root.left, result);

    result.push(root.value);

    inorder(root.right, result);

    return result;
}
```

---

## Example

```js
let root = null;

root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 60);
root = insert(root, 80);

console.log(inorder(root));
```

Output:

```text
[20, 30, 40, 50, 60, 70, 80]
```

---

# 🎤 Interview Questions

## 🟢 Beginner

### 1. What is a Binary Search Tree?

### 2. What is the difference between a Binary Tree and BST?

### 3. What are the properties of a BST?

### 4. Why does inorder traversal of a BST produce sorted values?

### 5. What is the time complexity of searching in a BST?

### 6. What is the worst-case time complexity of a BST?

### 7. Can a BST be unbalanced?

### 8. How do you find the minimum value in a BST?

### 9. How do you find the maximum value in a BST?

### 10. What are the different types of tree traversal?

---

# 🟡 Intermediate

### 11. How do you insert a node into a BST?

### 12. Explain the three cases of BST deletion.

### 13. What is an inorder successor?

### 14. What is an inorder predecessor?

### 15. How do you find the Kth smallest element?

### 16. How do you find the Kth largest element?

### 17. How do you validate whether a tree is a BST?

### 18. Why is checking only immediate children insufficient for BST validation?

### 19. Can BST contain duplicate values?

### 20. What happens when a BST becomes skewed?

---

# 🔴 Advanced

### 21. Why does BST search have `O(log n)` average complexity?

### 22. Why can BST search become `O(n)`?

### 23. How can you convert a sorted array into a balanced BST?

### 24. How do you find the Lowest Common Ancestor in a BST?

### 25. How do you find the floor of a value in a BST?

### 26. How do you find the ceiling of a value in a BST?

### 27. How do you delete a node with two children?

### 28. Why are self-balancing BSTs needed?

### 29. What is the difference between an AVL Tree and a normal BST?

### 30. What is the difference between a BST and a Red-Black Tree?

### 31. Can you construct a BST from preorder traversal?

### 32. Can inorder traversal alone uniquely construct a BST?

### 33. How can a BST be used for sorting?

### 34. What is Tree Sort?

### 35. What is the relationship between BST height and operation complexity?

---

# 📝 BST Cheat Sheet

## Core Rule

```text
            ROOT
           /    \
      Smaller   Greater
```

```text
LEFT < ROOT < RIGHT
```

---

## Traversals

```text
Inorder
LEFT → ROOT → RIGHT
        ↓
   ASCENDING
```

```text
Reverse Inorder
RIGHT → ROOT → LEFT
        ↓
   DESCENDING
```

```text
Preorder
ROOT → LEFT → RIGHT
```

```text
Postorder
LEFT → RIGHT → ROOT
```

---

## Searching

```text
target < current
        ↓
      LEFT
```

```text
target > current
        ↓
      RIGHT
```

```text
target === current
        ↓
      FOUND
```

---

## Minimum & Maximum

```text
Minimum → Leftmost Node
Maximum → Rightmost Node
```

---

## Important Problems

```text
Kth Smallest  → Inorder
Kth Largest   → Reverse Inorder
Validate BST  → Bounds
LCA           → Compare Values
Floor         → Largest ≤ Target
Ceiling       → Smallest ≥ Target
```

---

## Complexity

```text
Balanced BST

Search    → O(log n)
Insert    → O(log n)
Delete    → O(log n)
```

```text
Skewed BST

Search    → O(n)
Insert    → O(n)
Delete    → O(n)
```

---

# 🚀 Final Takeaway

The most important BST relationship to remember is:

```text
                  BST
                   │
          ┌────────┴────────┐
          ↓                 ↓
        LEFT              RIGHT
          │                 │
       Smaller            Greater
          │                 │
          └───────┬─────────┘
                  ↓
               INORDER
                  ↓
          SORTED ASCENDING
```

### The 5 rules you should remember

1. **Left subtree contains smaller values.**
2. **Right subtree contains greater values.**
3. **The rule applies recursively to every subtree.**
4. **Inorder traversal of a valid BST gives sorted ascending order.**
5. **BST operations depend on height — balanced is `O(log n)`, skewed is `O(n)`.**

> **BST = Binary Tree + Ordering Property**
>
> **Left < Root < Right**
>
> **Inorder → Sorted**
>
> **Reverse Inorder → Descending**
>
> **Operations → O(height)**

---

## 📌 Quick Revision

```text
                    BST
                     │
        ┌────────────┼────────────┐
        │            │            │
      Search       Insert       Delete
        │            │            │
       O(h)         O(h)         O(h)
        │
   ┌────┴────┐
   │         │
Balanced   Skewed
   │         │
O(log n)    O(n)
```

**Master these concepts and most standard BST interview problems become pattern-recognition problems rather than memorization problems.**
