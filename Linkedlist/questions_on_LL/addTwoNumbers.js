function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


  // Adding two numbers represented by two linked lists. the digits are stored in reverse order and each of their nodes contains a single digit. we will add the two numbers and return the sum as a linked list.
  const addTwoNumbers = (l1, l2) => {
    // we will use a dummy node to store the result of the addition of the two linked lists. we will also use a carry variable to store the carry of the addition of the two digits.
    let ans = new ListNode();
    // we will also use a pointer to traverse the result linked list and add the digits to it.
    let ansHead = ans;
    let carry= 0;
    // we will traverse both linked lists until we reach the end of both linked lists and there is no carry left. at each step we will add the digits of the two linked lists and the carry and store the result in the result linked list.
    while(l1 || l2 || carry){
        // we will calculate the sum of the two digits and the carry. if one of the linked lists has reached the end, we will consider its digit as 0.
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        // we will calculate the carry for the next step and the digit to be stored in the result linked list. the carry will be the quotient of the sum divided by 10 and the digit will be the remainder of the sum divided by 10.
        carry = Math.floor(sum / 10);
        // we will create a new node with the digit and add it to the result linked list. we will also move the pointer of the result linked list to the next node.
        let digit = sum % 10;

        // we will also move the pointers of the two linked lists to the next nodes if they have not reached the end of the linked lists.
        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;

        // we will also move the pointers of the two linked lists to the next nodes if they have not reached the end of the linked lists.
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    // finally we will return the head of the result linked list. we will return ansHead.next because ansHead is a dummy node and the actual result starts from the next node.
    return ansHead.next;
}

addTwoNumbers(l1, l2);
