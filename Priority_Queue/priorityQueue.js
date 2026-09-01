// Priority Queue Implementation in JavaScript
// Time Complexity: O(n log n) for enqueue operation due to sorting
// Space Complexity: O(n) for storing the elements in the queue
// This implementation uses an array to maintain the priority order of the elements.

class priorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });

    // Sort the queue based on priority (higher priority first)
    // this is normal sorting and this is taking O(n log n) time complexity
    // which is not efficient so we can use a better approach to insert the element in the correct position
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

let pq = new priorityQueue();

pq.enqueue("Fever", 2);
pq.enqueue("Cough", 1);
pq.enqueue("Headache", 3);
pq.enqueue("Accident", 5);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

// Acces the queue full array
console.log(pq.queue);
