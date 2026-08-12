 # Binary Search Tree

This folder contains Binary Search Tree (BST) notes and implementations.

## Overview

A Binary Search Tree is a binary tree where:

- all values in the left subtree are smaller than the node value
- all values in the right subtree are greater than the node value
- both subtrees are BSTs

## Common Operations

- Insert
- Search
- Delete
- Find min / max
- Traversals: inorder, preorder, postorder

## Key Property

An inorder traversal of a BST returns values in sorted order.

## Typical Time Complexity

- Search: `O(h)`
- Insert: `O(h)`
- Delete: `O(h)`

where `h` is the height of the tree.

## Notes

For a balanced BST, operations are usually `O(log n)`.
For a skewed BST, operations can degrade to `O(n)`.
