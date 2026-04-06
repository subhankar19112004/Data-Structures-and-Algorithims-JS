//Common operations - Queue
let q = [];

// Enqueue
q.push(1);
q.push(2);
q.push(3);
console.log(q); // [1, 2, 3]

// Dequeue: Remove from front of the Queue
q.shift(); // Removes 1

// Peek: Get first element of queue.
let front = q[0];
console.log(front); // 2

// Invalid Syntax:
q.pop(); // This works because it's an array method, but it removes from the end and breaks queue logic.
// Queue should only remove from the front.