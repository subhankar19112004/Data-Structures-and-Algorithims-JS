// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes. Only nodes itself may be changed.
// Recursive solution
const swapNodesRecursive = (head) => {
  if (!head || !head.next) return head;

  let l = head;
  let r = head.next;

  l.next = swapNodesRecursive(r.next);
  r.next = l;

  return r;
};
