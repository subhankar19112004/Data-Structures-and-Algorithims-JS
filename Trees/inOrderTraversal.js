// Leetcode 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Tree structure:
//     1
//   /   \
// null   2
//      /
//     3

// Process : Left -> Root -> Right


//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inOrderTraversal = (root) => {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;

    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);
  return ans;
};

// Test case
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inOrderTraversal(root)); // Output: [1, 3, 2]
