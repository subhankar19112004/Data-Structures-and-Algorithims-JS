// Leetcode 230. Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Tree Structure for Example 1:
//     3
//    / \
//   1   4
//    \
//     2
// Tree Structure for Example 2:
//         5
//        / \
//       3   6
//      / \
//     2   4
//    /
//   1

// Tree representation in JavaScript:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var kthSmallest = function (root, k) {
  let ans = [];
  function traversal(curr) {
    curr.left && traversal(curr.left);
    ans.push(curr.val);
    curr.right && traversal(curr.right);
  }
  traversal(root);
  console.log(ans);
  return ans[k - 1]; // return k - 1 because the array is 0-indexed
};

// Test cases for all examples
const root1 = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4),
);
const k1 = 1;
console.log(kthSmallest(root1, k1)); // Output: 1

const root2 = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6),
);
const k2 = 3;
console.log(kthSmallest(root2, k2)); // Output: 3
