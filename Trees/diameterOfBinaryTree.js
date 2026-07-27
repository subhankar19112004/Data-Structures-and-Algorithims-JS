// Leetcode 543. Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:
// Input: root = [1,2]
// Output: 1

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  function calculateDepth(curr) {
    if (!curr) return 0;

    let leftDepth = calculateDepth(curr.left);
    let rightDepth = calculateDepth(curr.right);

    let currDiameter = leftDepth + rightDepth;
    maxDiameter = Math.max(maxDiameter, currDiameter);

    return 1 + Math.max(leftDepth, rightDepth);
  }
  calculateDepth(root);
  return maxDiameter;
};

// Test cases for all examples
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
const root2 = new TreeNode(1, new TreeNode(2), null);

console.log(diameterOfBinaryTree(root1)); // Output: 3
console.log(diameterOfBinaryTree(root2)); // Output: 1
