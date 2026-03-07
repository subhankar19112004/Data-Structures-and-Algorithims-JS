// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

// This solution is using the iterative approach to merge two sorted linked lists. It compares the values of the current nodes of both lists and appends the smaller one to the merged list. It continues this process until one of the lists is fully traversed, at which point it appends the remaining nodes of the other list to the merged list. Finally, it returns the head of the merged linked list.
// Time Complexity: O(n + m), where n and m are the lengths of the two linked lists.
// Space Complexity: O(1), as we are using only a constant amount of extra space for the pointers.
// Describe the approach: The approach is to use two pointers to traverse both linked lists simultaneously.
//  We compare the values of the current nodes of both lists and append the smaller one to the merged list. 
// We continue this process until one of the lists is fully traversed, at which point we append the remaining nodes of the other list to the merged list. 
// Finally, we return the head of the merged linked list.


// The main difference between this solution and the previous one is that in this solution, we create a dummy node at the beginning of the merged list to simplify the logic for appending nodes. This way, we don't have to handle the case where the merged list is empty separately. We can simply return start.next at the end, which will be the head of the merged linked list.
const sol1 = (l1, l2) => {
    if(!l1 || !l2) return l1 || l2;

    let curr = new ListNode();
    let start = curr;

    while ( l1 && l2 ){
        if( l1.val <= l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return start.next;
}