// Leetcode : 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Representation of the above tree is as follows:
//         3
//        / \
//       9  20
//         /  \
//        15   7


// How the recursion works in the above example:
// 1. Start with the root node (3) and depth 1.
// 2. Recursively call the function on the left child (9) with depth 2.
// 3. Recursively call the function on the right child (20) with depth 2.
// 4. For each node, update the maximum depth if the current depth is greater.
// 5. Continue this process until all nodes are visited.

// Visual representation of the recursion tree for the above example:
// maxDepth(3, 1)
// ├── maxDepth(9, 2)
// └── maxDepth(20, 2)
//    ├── maxDepth(15, 3)
//    └── maxDepth(7, 3)
// The maximum depth is 3, which is the longest path from the root to a leaf node (3 -> 20 -> 15 or 3 -> 20 -> 7).
// The time complexity of this solution is O(n), where n is the number of nodes in the binary tree, as we visit each node once. The space complexity is O(h), where h is the height of the tree, due to the recursion stack.

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
