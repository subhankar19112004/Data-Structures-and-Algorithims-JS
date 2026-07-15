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


# 🌳 Trees - DFS & BFS Complete Guide

> A complete guide to **Depth First Search (DFS)** and **Breadth First
> Search (BFS)** in Trees.

------------------------------------------------------------------------

# Tree Used in Examples

``` text
        1
      /   \
     2     3
   /  \   / \
  4   5  6   7
```

## What is Tree Traversal?

Tree traversal means visiting every node exactly once.

There are two major traversal techniques:

-   **DFS (Depth First Search)**
-   **BFS (Breadth First Search)**

------------------------------------------------------------------------

# DFS (Depth First Search)

DFS explores one branch completely before moving to another branch.

It uses: - Recursion - Stack (explicit or implicit)

## Types of DFS

### 1. Preorder (Root → Left → Right)

**Order**

``` text
Root
Left
Right
```

**Output**

``` text
1 2 4 5 3 6 7
```

``` js
function preorder(root){
    if(!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
```

------------------------------------------------------------------------

### 2. Inorder (Left → Root → Right)

**Output**

``` text
4 2 5 1 6 3 7
```

``` js
function inorder(root){
    if(!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
```

------------------------------------------------------------------------

### 3. Postorder (Left → Right → Root)

**Output**

``` text
4 5 2 6 7 3 1
```

``` js
function postorder(root){
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
```

------------------------------------------------------------------------

# BFS (Breadth First Search)

BFS visits nodes level by level.

It uses a **Queue (FIFO)**.

**Traversal**

``` text
Level 0 : 1
Level 1 : 2 3
Level 2 : 4 5 6 7
```

**Output**

``` text
1 2 3 4 5 6 7
```

``` js
function bfs(root){
    if(!root) return;

    const queue=[root];

    while(queue.length){
        const node=queue.shift();

        console.log(node.val);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}
```

------------------------------------------------------------------------

# Level Order Traversal

``` js
function levelOrder(root){
    if(!root) return [];

    const result=[];
    const queue=[root];

    while(queue.length){
        const size=queue.length;
        const level=[];

        for(let i=0;i<size;i++){
            const node=queue.shift();

            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}
```

Output

``` text
[
 [1],
 [2,3],
 [4,5,6,7]
]
```

------------------------------------------------------------------------

# DFS vs BFS

  Feature            DFS                       BFS
  ------------------ ------------------------- ----------------------------
  Full Form          Depth First Search        Breadth First Search
  Uses               Stack / Recursion         Queue
  Traversal          Goes Deep                 Level by Level
  Time Complexity    O(n)                      O(n)
  Space Complexity   O(h)                      O(n)
  Best For           Recursion, Backtracking   Level Order, Shortest Path

------------------------------------------------------------------------

# Time Complexity

  Traversal   Time   Space
  ----------- ------ -------
  DFS         O(n)   O(h)
  BFS         O(n)   O(n)

Where: - **n** = Number of nodes - **h** = Height of tree

------------------------------------------------------------------------

# When to Use DFS

-   Height of Tree
-   Diameter
-   LCA
-   Path Sum
-   Tree Traversals
-   Backtracking

# When to Use BFS

-   Level Order Traversal
-   Minimum Depth
-   Shortest Path (Unweighted)
-   Right Side View
-   Zigzag Traversal

------------------------------------------------------------------------

# Interview Cheat Sheet

### DFS

-   Preorder → Root Left Right
-   Inorder → Left Root Right
-   Postorder → Left Right Root

### BFS

-   Queue
-   Level by Level

------------------------------------------------------------------------

## Key Takeaways

-   DFS explores deeply before backtracking.
-   BFS explores one level at a time.
-   DFS uses recursion/stack.
-   BFS uses a queue.
-   Inorder traversal of a BST returns sorted values.
