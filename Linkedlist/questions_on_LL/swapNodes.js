function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const swapNodes = (head) => {
    if (!head || !head.next) return head;
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    let curr = head;
    let n = curr.next;

    while(curr && n){
        prev.next = n;
        curr.next =- n.next;
        n.next = curr;

        prev = curr;
        curr = prev.next;
        n = curr && curr.next;
    }
  return sentinel.next;
};
