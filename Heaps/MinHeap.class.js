class MinHeap {
  constructor() {
    this.heap = [5, 10, 20, 30];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);

      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    if (this.heap.length < 1) return null;

    let lastIndex = this.heap.length - 1;
    let min = this.heap[0];
    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(i) {
    let n = this.heap.length;
    let leftChildIndex = this.getLeftChildIndex(i);
    let rightChildIndex = this.getRightChildIndex(i);
    let smallest = i;

    if (leftChildIndex < n && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < n &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }
}

let newHeap = new MinHeap();
newHeap.insert(1);
console.log(newHeap.heap);
console.log(newHeap.extract());
console.log(newHeap.extract());
console.log(newHeap.heap);
