
//Removing a node from a a given singly linked list from the end of the list.( this solution is two pass solution)
const reomveNodeFromEnd1 = (head, n) => {

    //creating a sentinel node to handle edge cases like removing the head node
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;

    //first we will calculate the length of the linked list
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }

    //then we will calculate the position of the node to be removed from the start of the list
    let prevPos = length - n;
    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;

    //finally we will return the head of the modified linked list
    return sentinel.next;
}