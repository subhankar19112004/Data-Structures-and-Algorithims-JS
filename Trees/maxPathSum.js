// Leetcode 124. Binary Tree Maximum Path Sum
// Given a non-empty binary tree, find the maximum path sum.
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Example 2:
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42

// Tree structure for the above examples:
// Example 1:
//         1
//        / \
//       2   3
// Example 2:
//         -10
//         / \
//        9   20
//           /  \
//          15   7



// Representation of a binary tree node
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const maxPathSum = (root) => {
    let maxSum = -Infinity;

    function traversal(curr) {
        if (!curr) return 0;

        let leftmax = Math.max(0, traversal(curr.left));
        let rightmax = Math.max(0, traversal(curr.right));

        let currMax = leftmax + rightmax + curr.val;
        maxSum = Math.max(maxSum, currMax);

        return Math.max(leftmax, rightmax) + curr.val;
    }
    traversal(root);
    return maxSum;
}

// Test case for all the examples
const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root1)); // Output: 6

const root2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxPathSum(root2)); // Output: 42