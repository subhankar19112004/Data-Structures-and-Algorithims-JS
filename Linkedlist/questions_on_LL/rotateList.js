/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //base
    if( !head || k == 0) return head;

    let sentinel = new ListNode();
    sentinel.next = head;
    let fast = sentinel;
    let slow = sentinel;
    let length = 0;

    // finding length
    let curr = head;
    while( head ){
        head = head.next;
        length++
    }

    //finding kth position
    let n = k % length;
    if( n == length || n == 0) return head;

    //moving fast pos to rotate position
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    //moving both pointers
    while( fast.next ){
        fast = fast.next;
        slow = slow.next;
    }

    //rotating
    let newHead = slow.next;
    fast.next = sentinel.next;
    slow.next = null;

    // returning newHead
    return newHead;
};