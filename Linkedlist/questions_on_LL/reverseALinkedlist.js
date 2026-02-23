const reverseALinkedlist = (head) => {
    let prev = null;
    let curr = head;
    while( curr ){
        let temp = curr.next;

        curr.next = prev;
        prev = curr;
        curr= temp;
    }
    return prev;
};

reverseALinkedlist(head);