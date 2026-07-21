// Leetcode 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Representation of the above tree is as follows:
//         5
//        / \
//       4   8
//      /   / \
//     11  13  4
//    /  \      \
//   7    2      1



// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


// Top-down approach for finding if a path sum exists in a binary tree
const hasPathSum = (root, targetSum) => {
    if(!root) return false;
    let ans = false;

    const traversal = (curr, currSum) => {
        let newSum = curr.val + currSum;

        if (!curr.left && !curr.right) {
            if (newSum === targetSum) {
                ans = ans || true;
            }
        }

        curr.left && traversal(curr.left, newSum);
        curr.right && traversal(curr.right, newSum);
    }
    traversal(root, 0);
    return ans;
}

// Bottom-up approach for finding if a path sum exists in a binary tree
const hasPathSumBottomUp = (root, targetSum) => {
    if (!root) return false;

    if (!root.left && !root.right) {
        if(targetSum == root.val) {
            return true;
        }
    }

    let leftSum = hasPathSumBottomUp(root.left, targetSum - root.val);
    let rightSum = hasPathSumBottomUp(root.right, targetSum - root.val);

    return leftSum || rightSum;
}    

// Test cases
const root1 = new TreeNode(5, 
    new TreeNode(4,
        new TreeNode(11, new TreeNode(7), new TreeNode(2)), 
        null
    ), 
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
const targetSum1 = 22;

console.log(hasPathSum(root1, targetSum1)); // Output: true
console.log(hasPathSumBottomUp(root1, targetSum1)); // Output: true