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


// Explanation:
// We use two pointers, pA and pB, to traverse the two linked lists. 
// Initially, pA points to the head of list A and pB points to the head of list B.
// We move both pointers one step at a time. If pA reaches the end of list A, we redirect it to the head of list B. 
// Similarly, if pB reaches the end of list B, we redirect it to the head of list A.
// If the two linked lists intersect, pA and pB will eventually meet at the intersection node after at most m + n steps.
// If they do not intersect, both pointers will eventually become null, and the loop will terminate, returning null.
// This approach ensures that both pointers traverse the same number of nodes, which allows them to meet at the intersection point if it exists.
// The key insight is that by switching heads when reaching the end of a list, we effectively synchronize the traversal of both pointers, allowing them to meet at the intersection point without needing to calculate the lengths of the lists or use extra space for a hash set.
// The code is efficient and straightforward, making it a popular solution for this problem.
// Note: The function returns the node where the intersection occurs, or null if there is no intersection.
// The example usage demonstrates how to create two linked lists that intersect and how to call the intersectionPoint function to find the intersection node. In this case, the output will be the value of the intersecting node, which is 2.


// Approach 2: Again using two pointers but with a different logic. 
// We can calculate the lengths of both linked lists and then align the pointers to the same 
// starting point before traversing them together to find the intersection point. However, 
// the first approach is more elegant and does not require calculating the lengths of the lists, 
// making it more efficient in terms of code simplicity and readability.


var getIntersectionNode = function (headA, headB) {
    let m = 0;
    let n = 0;

    let pA = headA;
    let pB = headB;

    while (pA) {
        ++m;
        pA = pA.next;
    }

    while (pB) {
        ++n;
        pB = pB.next;
    }

    // Making the list B larger
    if(m > n){
        let temp = headA;
        headA = headB;
        headB = temp;
    }

    // Now listB is larger
    let diff = Math.abs(m - n);

    for(let i = 0; i < diff; i++){
        headB = headB.next;
    }

    pA = headA;
    pB = headB;

    while(pA !== pB){
        pA = pA.next;
        pB = pB.next;
    }
    return pA;
};



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