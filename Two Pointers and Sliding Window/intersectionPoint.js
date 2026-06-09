// LeetCode: 160. Intersection of Two Linked Lists
// Solved by Two Pointers

const intersectionPoint = (headA, headB) => {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}

// Time Complexity: O(m + n) where m and n are the lengths of the two linked lists.
// Space Complexity: O(1) since we are using only a constant amount of extra space.

// Example usage:
// Define the linked list nodes
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// Create two linked lists that intersect
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
let headB = new ListNode(4);
headB.next = headA.next; // Intersection at node with value 2
// Find the intersection point
// This will return the node with value 2
console.log(intersectionPoint(headA, headB).val); // Output: 2