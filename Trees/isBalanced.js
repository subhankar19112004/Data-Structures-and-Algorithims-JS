// Leetcode 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
// Input: root = []
// Output: true

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isBalanced = function (root) {
  let ans = true;

  function calculateHeight(curr) {
    if (!curr) return 0;

    let leftHeight = calculateHeight(curr.left);
    let rightHeight = calculateHeight(curr.right);

    if (Math.abs(leftHeight - rightHeight) > 1) ans = ans && false;

    return 1 + Math.max(leftHeight, rightHeight);
  }
  calculateHeight(root);
  return ans;
};

// Test cases for all examples
const root1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
const root2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    new TreeNode(3),
  ),
  new TreeNode(2),
);
const root3 = null;

console.log(isBalanced(root1)); // Output: true
console.log(isBalanced(root2)); // Output: false
console.log(isBalanced(root3)); // Output: true
