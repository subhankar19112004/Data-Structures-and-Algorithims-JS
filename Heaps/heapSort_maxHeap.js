// Heap Sort using Max Heap
// Time Complexity: O(n log n)

function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }
  console.log(arr);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

// HeapifyDown
function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

let arr = [1, 10, 9, 45, 26, 78, 34, 12, 67];
console.log(heapSort(arr));
