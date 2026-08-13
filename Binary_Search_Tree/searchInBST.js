// Leetcode 700. Search in a Binary Search Tree
// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// Tree structure for Example 1:
//     4
//    / \
//   2   7
//  / \
// 1   3

// Tree structure for Example 2:
//     4
//    / \
//   2   7
//  / \
// 1   3

// Tree representation in JavaScript:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const searchInBST = (root, val) => {
  let ans = null;
  function traversal(curr) {
    if (curr.val == val) {
      ans = curr;
    } else {
      if (curr.val < val) {
        curr.right && traversal(curr.right);
      } else {
        curr.left && traversal(curr.left);
      }
    }
  }
  traversal(root);
  return ans;
};

// Test cases for all examples
const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val1 = 2;
console.log(searchInBST(root1, val1)); // Output: [2,1,3]
const root2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val2 = 5;
console.log(searchInBST(root2, val2)); // Output: null
