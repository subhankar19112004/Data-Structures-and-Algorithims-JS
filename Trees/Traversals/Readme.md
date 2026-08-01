# 🌳 Tree Traversals (Binary Tree)

> **Definition**
>
> A **Tree Traversal** is the process of visiting every node of a tree **exactly once** in a specific order.
>
> Different traversal techniques are used depending on the problem we want to solve.

---

# 📚 Types of Tree Traversals

| Traversal | Order | Technique | Common Uses |
|-----------|--------|-----------|-------------|
| 🌱 Preorder | Root → Left → Right | DFS | Copying a tree, Serialization |
| 🌿 Inorder | Left → Root → Right | DFS | Produces sorted order in BST |
| 🍂 Postorder | Left → Right → Root | DFS | Delete Tree, Expression Evaluation |
| 🌊 Level Order | Level by Level | BFS | Level-wise processing |

---

# 🌳 Example Tree

The following tree will be used throughout all traversal examples.

```text
                    1
                  /   \
                 2     3
                / \     \
               4   5     8
                  / \   /
                 6   7 9
```

---

# 🌱 1. Preorder Traversal

## Rule

```text
Root
 ↓
Left
 ↓
Right
```

Visit the **Root first**, then recursively traverse the **Left Subtree**, followed by the **Right Subtree**.

---

## Visual Flow

```text
                    [1]
                  /     \
               [2]       [3]
              /   \         \
           [4]   [5]        [8]
                /   \      /
             [6]   [7]   [9]
```

---

## Step-by-Step Traversal

| Step | Current Node | Output |
|------|--------------|--------|
| 1 | Visit Root | **1** |
| 2 | Go Left | **2** |
| 3 | Go Left | **4** |
| 4 | Backtrack → Right | **5** |
| 5 | Go Left | **6** |
| 6 | Go Right | **7** |
| 7 | Return to Root → Right | **3** |
| 8 | Go Right | **8** |
| 9 | Go Left | **9** |

---

## Final Output

```text
1 → 2 → 4 → 5 → 6 → 7 → 3 → 8 → 9
```

---

## Memory Trick

```text
Preorder

Visit yourself first.

        Root
          ↓
        Left
          ↓
        Right
```

---

# 🌿 2. Inorder Traversal

## Rule

```text
Left
 ↓
Root
 ↓
Right
```

Always complete the **entire Left Subtree first**, then visit the **Root**, and finally traverse the **Right Subtree**.

---

## Important Concept

Every subtree is itself another tree.

```text
              Root
             /    \
      Left Tree   Right Tree
```

The same rule (**Left → Root → Right**) is applied recursively to every subtree.

---

## Visual Flow

```text
                    1
                  /   \
                 2     3
                / \     \
               4   5     8
                  / \   /
                 6   7 9
```

---

## Step-by-Step Traversal

| Step | Current Node | Output |
|------|--------------|--------|
|1|Go Left| |
|2|Visit 4|4|
|3|Backtrack → Visit 2|2|
|4|Visit Left of 5|6|
|5|Visit 5|5|
|6|Visit Right of 5|7|
|7|Return → Visit Root|1|
|8|Visit 3|3|
|9|Visit Left of 8|9|
|10|Visit 8|8|

---

## Final Output

```text
4 → 2 → 6 → 5 → 7 → 1 → 3 → 9 → 8
```

---

## 💡 Important Observation

> **For a Binary Search Tree (BST), Inorder Traversal always produces the elements in sorted order.**

---

## Memory Trick

```text
Inorder

Finish the left work first.

        Left
          ↓
        Root
          ↓
        Right
```

---

# 🍂 3. Postorder Traversal

## Rule

```text
Left
 ↓
Right
 ↓
Root
```

Never visit the root until **both left and right subtrees are completely processed**.

---

## Visual Flow

```text
                    1
                  /   \
                 2     3
                / \     \
               4   5     8
                  / \   /
                 6   7 9
```

---

## Step-by-Step Traversal

| Step | Current Node | Output |
|------|--------------|--------|
|1|Visit Leftmost|4|
|2|Visit Left of 5|6|
|3|Visit Right of 5|7|
|4|Visit 5|5|
|5|Visit 2|2|
|6|Visit Left of 8|9|
|7|Visit 8|8|
|8|Visit 3|3|
|9|Visit Root|1|

---

## Final Output

```text
4 → 6 → 7 → 5 → 2 → 9 → 8 → 3 → 1
```

---

## Memory Trick

```text
Postorder

Complete everyone else's work first.

        Left
          ↓
        Right
          ↓
         Root
```

---

# 🌊 4. Level Order Traversal (Breadth First Search)

## Rule

Traverse the tree **level by level** from top to bottom.

This traversal uses a **Queue (FIFO)**.

---

## Example Tree

```text
                    1
                  /   \
                 2     3
                / \     \
               4   5     8
                  / \   /
                 6   7 9
```

---

## Level-wise Traversal

### Level 1

```text
        1
```

Output

```text
1
```

---

### Level 2

```text
      2     3
```

Output

```text
2 → 3
```

---

### Level 3

```text
    4   5     8
```

Output

```text
4 → 5 → 8
```

---

### Level 4

```text
      6   7   9
```

Output

```text
6 → 7 → 9
```

---

## Final Output

```text
1 → 2 → 3 → 4 → 5 → 8 → 6 → 7 → 9
```

---

---

# 🔀 5. Zig-Zag Level Order Traversal (Spiral Traversal)

## Definition

**Zig-Zag Level Order Traversal** is a variation of **Level Order Traversal (BFS)** where the direction of traversal changes after every level.

- First Level → **Left → Right**
- Second Level → **Right → Left**
- Third Level → **Left → Right**
- Fourth Level → **Right → Left**
- ...and so on.

It is also known as:

- Spiral Traversal
- Zig-Zag Traversal
- Alternate Level Order Traversal

Like normal Level Order Traversal, it uses **Breadth First Search (BFS)** with a **Queue**, but the order of storing each level is reversed on alternate levels.

---

## Example Tree

```text
                    1
                  /   \
                 2     3
                / \     \
               4   5     8
                  / \   /
                 6   7 9
```

---

## Traversal Direction

```text
Level 1 : Left → Right
Level 2 : Right → Left
Level 3 : Left → Right
Level 4 : Right → Left
```

---

## Step-by-Step Traversal

### Level 1 (Left → Right)

```text
        1
```

Output

```text
1
```

---

### Level 2 (Right → Left)

```text
      2     3
```

Normally we visit:

```text
2 → 3
```

But Zig-Zag reverses it:

```text
3 → 2
```

---

### Level 3 (Left → Right)

```text
    4   5     8
```

Output

```text
4 → 5 → 8
```

---

### Level 4 (Right → Left)

```text
      6   7   9
```

Normally:

```text
6 → 7 → 9
```

Reverse it:

```text
9 → 7 → 6
```

---

## Final Output

```text
1 → 3 → 2 → 4 → 5 → 8 → 9 → 7 → 6
```

Or as level-wise arrays:

```text
[
  [1],
  [3,2],
  [4,5,8],
  [9,7,6]
]
```

---

## Visual Representation

```text
                1
              ↙   ↘

           2       3
             ↖   ↗

        4    5     8
          ↙       ↘

          6   7    9
```

Traversal

```text
→ Level 1 : 1
← Level 2 : 3 2
→ Level 3 : 4 5 8
← Level 4 : 9 7 6
```

---

## Memory Trick

```text
Think of a Snake 🐍

Level 1 →
Level 2 ←
Level 3 →
Level 4 ←
```

The direction changes after every level.

---

## Time Complexity

```text
O(N)
```

Every node is visited exactly once.

---

## Space Complexity

```text
O(N)
```

Queue may contain an entire level in the worst case.

---

## Common Interview Uses

- Binary Tree Zigzag Level Order Traversal (LeetCode 103)
- Printing tree in spiral form
- Alternate level processing
- BFS variations

---

## Difference from Normal Level Order

| Level | Normal Level Order | Zig-Zag |
|-------|--------------------|---------|
| 1 | 1 | 1 |
| 2 | 2 → 3 | 3 → 2 |
| 3 | 4 → 5 → 8 | 4 → 5 → 8 |
| 4 | 6 → 7 → 9 | 9 → 7 → 6 |

---

## Key Observation

> **The tree is traversed exactly like Level Order (BFS).**
>
> The only difference is that **every alternate level is reversed before storing or printing the result.**

---


# 🎯 Comparison of All Traversals

| Traversal | Formula | Final Output |
|-----------|---------|--------------|
| 🌱 Preorder | Root → Left → Right | **1, 2, 4, 5, 6, 7, 3, 8, 9** |
| 🌿 Inorder | Left → Root → Right | **4, 2, 6, 5, 7, 1, 3, 9, 8** |
| 🍂 Postorder | Left → Right → Root | **4, 6, 7, 5, 2, 9, 8, 3, 1** |
| 🌊 Level Order | Level by Level | **1, 2, 3, 4, 5, 8, 6, 7, 9** |

---

# 📝 Quick Revision

## 🌱 Preorder

```text
Root
 ↓
Left
 ↓
Right
```

---

## 🌿 Inorder

```text
Left
 ↓
Root
 ↓
Right
```

---

## 🍂 Postorder

```text
Left
 ↓
Right
 ↓
Root
```

---

## 🌊 Level Order

```text
Level 1
   ↓
Level 2
   ↓
Level 3
   ↓
Level 4
```

Uses **Queue (FIFO)**.

---

# 📌 Key Takeaways

- Every traversal visits **every node exactly once**.
- **Preorder** starts from the Root.
- **Inorder** visits the Root between Left and Right.
- **Postorder** visits the Root last.
- **Level Order** processes nodes level by level using a Queue.
- **Inorder Traversal of a BST always returns elements in sorted order.**

---

# 🧠 Interview Cheat Sheet

| Question | Answer |
|----------|--------|
| Which traversal uses Queue? | Level Order (BFS) |
| Which traversals use Recursion naturally? | Preorder, Inorder, Postorder |
| Which traversal gives sorted order in BST? | Inorder |
| Which traversal is useful for deleting a tree? | Postorder |
| Which traversal is used for copying a tree? | Preorder |
| Which traversal processes nodes level-wise? | Level Order |
| Which traversal alternates direction every level? | Zig-Zag (Spiral) Level Order |