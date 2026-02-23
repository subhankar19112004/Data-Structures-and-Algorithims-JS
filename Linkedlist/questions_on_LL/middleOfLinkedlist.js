function middleOfLinkedlist(head){
    let slow = head;
    let fast = head;

    while( fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

middleOfLinkedlist(head);   
