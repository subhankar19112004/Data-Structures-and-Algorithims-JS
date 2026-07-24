// Leetcode 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Explanation: The above binary tree is inverted to the right.
// Representation of the above tree is as follows:
//         4
//        / \
//       2   7
//      / \ / \
//     1  3 6  9

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const invertTree = (root) => {
  if (!root) return root;

  let temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Test cases
const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);

console.log(invertTree(root));
