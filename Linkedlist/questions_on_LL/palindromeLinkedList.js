const palindromeLinkedList = (head) => {
    //Finfing the middle of the linked list

    let slow = fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    //reversing the linked list from slow(mi9ddle) pointer to end of the linked list
    let prev = null;
    let curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //Checking the first half and the second half of the linked list for palindrome
    let fl = head;
    let sl = prev;

    while(sl){
        if(fl.val !== sl.val){
            return false;
        }
        fl = fl.next;
        sl = sl.next;
    }
    return true;
}

palindromeLinkedList(head);
