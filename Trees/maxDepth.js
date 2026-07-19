// Leetcode : 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Top-down approach for finding maximum depth of a binary tree
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 0;
  function traversal(curr, depth) {
    maxDepth = Math.max(maxDepth, depth);

    curr.left && traversal(curr.left, depth + 1);
    curr.right && traversal(curr.right, depth + 1);
  }

  traversal(root, 1);
  return maxDepth;
};

// Bottom-up approach for finding maximum depth of a binary tree
var MaxDepth = function (root) {
  let curr = root;
  if (!curr) return 0;

  let leftMax = maxDepth(curr.left);
  let rightMax = maxDepth(curr.right);

  let maxDepthAtNode = Math.max(leftMax, rightMax);

  return 1 + maxDepthAtNode;
};

// Test cases
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6)),
);
console.log(maxDepth(root)); // Output: 3
console.log(MaxDepth(root)); // Output: 3
