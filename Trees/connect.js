// Leetcode 116. Populating Next Right Pointers in Each Node
// Given a perfect binary tree, populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.
// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:
// Input: root = []
// Output: []

// Tree structure for the above examples: (with answers)
// Example 1:
//         1 -> NULL
//        / \
//       2 -> 3 -> NULL
//      / \   / \
//     4->5->6->7 -> NULL

// Example 2:
//        (empty tree)


// Tree representation in JS
function TreeNode(val, left, right, next) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};



const connect = (root) => {
    if (!root) return root;

    function traversal (curr) {
        if(curr.left) {
            curr.left.next = curr.right;
        }
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left;
        }

        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return root;
}

// Test cases for all examples
const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const root2 = null;

console.log(connect(root1)); // Output: [1,#,2,3,#,4,5,6,7,#]
console.log(connect(root2)); // Output: []