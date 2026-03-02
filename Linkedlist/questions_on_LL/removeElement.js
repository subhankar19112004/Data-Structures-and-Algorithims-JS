function removeElement(head, val){
    let sentinel = new ListNode();

    sentinel.next = head;
    let prev = sentinel;
    while( prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
}