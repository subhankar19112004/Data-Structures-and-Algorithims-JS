//Removing a node from a a given singly linked list from the end of the list.( this solution is one pass solution)
const reomveNodeFromEnd2 = (head, n) => {
    let sentinel = new ListNode();
    sentinel.next = head;

    // we will use two pointers to traverse the linked list. the first pointer will be n nodes ahead of the second pointer. when the first pointer reaches the end of the list, the second pointer will be at the node to be removed.
    let first = sentinel;
    let second = sentinel;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    // then we will move both pointers until the first pointer reaches the end of the list
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }
    // then we will remove the node by changing the next pointer of the second pointer to skip the node to be removed
    second.next = second.next.next;

    return sentinel.next;
};

reomveNodeFromEnd2(head, n);