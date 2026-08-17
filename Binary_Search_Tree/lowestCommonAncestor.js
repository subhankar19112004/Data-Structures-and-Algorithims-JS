// Leetcode 235. Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Tree Structure for Example 1:
//         6
//        / \
//       2   8
//      / \ / \
//     0  4 7  9
//       / \
//      3   5

// Tree Structure for Example 2:
//         6
//        / \
//       2   8
//      / \ / \
//     0  4 7  9
//       / \
//      3   5

// Tree representation in JavaScript:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// This can also be solved as the normal Binary tree LCA problem, but since this is a BST,
// we can take advantage of the properties of BST to find the LCA in O(h) time complexity,
// where h is the height of the tree.
// But I recommend solving the normal Binary tree LCA problem first, and then come back to this problem to see how we can optimize it using the properties of BST.

var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

// Test cases for all examples
const root1 = new TreeNode(
  6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4)),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
const p1 = root1.left; // Node with value 2
const q1 = root1.right; // Node with value 8

const root2 = new TreeNode(
  6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4)),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
const p2 = root2.left; // Node with value 2
const q2 = root2.left.right; // Node with value 4

console.log(lowestCommonAncestor(root1, p1, q1)); // Output: 6  
console.log(lowestCommonAncestor(root2, p2, q2)); // Output: 2