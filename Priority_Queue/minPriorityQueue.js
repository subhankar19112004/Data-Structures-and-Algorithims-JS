// Min Priority Queue Implementation in JavaScript
// Time Complexity: O(log n) for enqueue and dequeue operations
// Space Complexity: O(n) for storing the elements in the queue
// This implementation uses a min heap to maintain the priority order of the elements.

class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Enqueue an item
    enqueue(priority) {
        this.heap.push(priority);
        this.heapifyUp();
    }

    // Move new node up
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parent]) break;

            this.swap(index, parent);
            index = parent;
        }
    }

    // Dequeue lowest-priority item
    dequeue() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }

        return min;
    }

    // Restore heap downwards
    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (
                left < length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    // View front item
    front() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Get queue size
    size() {
        return this.heap.length;
    }

    // Is Empty?
    isEmpty() {
        return this.heap.length === 0;
    }

    // Swap Helper
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

module.exports = MinPriorityQueue;