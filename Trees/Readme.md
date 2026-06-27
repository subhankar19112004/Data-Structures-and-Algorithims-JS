# 🌳 Trees

## Introduction to Trees

A **Tree** is a hierarchical, non-linear data structure used to represent
relationships between objects or elements.

A tree consists of a **root node**, which can have **zero or more child nodes**.
Each child node can further have zero or more child nodes.

### Basic Structure

```text
          Root
           ●
         /   \
       ●       ●
              / \
            ●     ●
                 / \
               ●     ●
```

### Properties

- Non-linear Data Structure
- Hierarchical Structure

### Node Properties

- A node can have **0 or more children**
- Every node (except the root) has exactly **one parent**
- A tree **cannot contain cycles**
- There is **exactly one path** between any two nodes
- Two parents **cannot share the same child**

# Types of Trees

## 1. General Tree

A node can have **any number of children**.

```text
        A
      / | \
     B  C  D
       / \
      E   F
```

---

## 2. Binary Tree

A node can have **at most two children**.

```text
        A
       / \
      B   C
     / \
    D   E
```

---

## 3. Binary Search Tree (BST)

Property:

```text
Left Subtree < Root < Right Subtree
```

Example:

```text
        4
       / \
      3   5
```

---

## 4. Complete Binary Tree

Every level is completely filled except possibly the last level.

```text
          A
        /   \
       B     C
      / \   / \
     D   E F   G
```

---

## 5. Full Binary Tree

Every node has either **0 or 2 children**.

```text
      A
     / \
    B   C
```

---

## 6. Perfect Binary Tree

A tree is perfect if:

- Every internal node has exactly two children.
- All leaf nodes are at the same level.

```text
          A
        /   \
       B     C
      / \   / \
     D  E  F  G
```

---

## 7. Balanced Binary Tree

A binary tree whose height remains approximately

```
O(log n)
```

                1 (Root)
              /   \
            2       3
           / \
          4   5
             / \
            6   7

            | Term    | Meaning                                |
| ------- | -------------------------------------- |
| Root    | Top-most node                          |
| Parent  | Node having one or more children       |
| Child   | Node having a parent                   |
| Leaf    | Node having no children                |
| Sibling | Nodes sharing the same parent          |
| Height  | Longest path from root to deepest leaf |
| Level   | Distance from root                     |

## Tree Representation
        1
       / \
      2   3
         / \
        4   5

        root = 1

root.val = 1
root.left = 2
root.right = 3

root.right.left = 4
root.right.right = 5