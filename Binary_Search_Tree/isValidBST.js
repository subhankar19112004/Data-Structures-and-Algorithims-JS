// Leetcode 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Tree Structure for Example 1:
//     2
//    / \
//   1   3

// Tree Structure for Example 2:
//     5
//    / \
//   1   4
//      / \
//     3   6

// Tree representation in JavaScript:
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};

const isValidBST = (root) => {
    let ans = true;

    function traversal(curr, low, high) {
        if ((low !== null && curr.val <= low) || (high !== null && curr.val >= high)) {
            ans = false;
            return;
        }
        curr.left && traversal(curr.left, low, curr.val);
        curr.right && traversal(curr.right, curr.val, high);
    }
    traversal(root, null, null);
    return ans;
}

// Test cases for all examples
const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));

console.log(isValidBST(root1)); // Output: true
console.log(isValidBST(root2)); // Output: false