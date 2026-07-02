// Leetcode 145. Binary Tree Postorder Traversal
// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Tree structure:
//     1
//   /   \
// null   2
//      /
//     3

// Process : Left -> Right -> Root

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

const postOrderTraversl = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};

// Test case
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postOrderTraversl(root)); // Output: [3, 2, 1]
