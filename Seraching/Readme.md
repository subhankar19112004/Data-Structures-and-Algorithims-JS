# Searching Algorithms

Searching algorithms are used to find a specific element from a collection of data.

There are two commonly used searching algorithms:

1. Linear Search
2. Binary Search

## 1. Linear Search

**Definition:** Linear Search is a searching algorithm that checks each element of an array sequentially until the target element is found or the array ends.

**Example:**

```javascript
const arr = [10, 20, 30, 40, 50];
const target = 30;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Element found at index:", i);
        break;
    }
}
```

**Output:**
```text
Element found at index: 2
```

**Time Complexity:**
- Best Case: O(1) – Element found at the first position.
- Average Case: O(n) – Element found somewhere in the middle.
- Worst Case: O(n) – Element found at the last position or not found.

**Space Complexity:** O(1)

## 2. Binary Search

**Definition:** Binary Search is an efficient searching algorithm that repeatedly divides a sorted array into two halves to find the target element.

**Note:** Binary Search works on sorted arrays.

**Example:**

```javascript
const arr = [10, 20, 30, 40, 50];
const target = 30;

let left = 0;
let right = arr.length - 1;

while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
        console.log("Element found at index:", mid);
        break;
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
```

**Output:**
```text
Element found at index: 2
```

**Time Complexity:**
- Best Case: O(1) – Element found at the middle position.
- Average Case: O(log n)
- Worst Case: O(log n) – Element found after repeatedly dividing the search space or not found.

**Space Complexity:** O(1) for iterative implementation.

## 3. Difference Between Linear Search and Binary Search

| Parameter | Linear Search | Binary Search |
|---|---|---|
| Approach | Sequential checking | Divide and conquer |
| Data Requirement | Sorted or unsorted | Sorted |
| Best Case | O(1) | O(1) |
| Average Case | O(n) | O(log n) |
| Worst Case | O(n) | O(log n) |
| Space Complexity | O(1) | O(1) (iterative) |
| Efficiency | Slower for large datasets | Faster for large datasets |

## 4. Time Complexity Comparison

| Complexity | Linear Search | Binary Search |
|---|---|---|
| Best Case | O(1) | O(1) |
| Average Case | O(n) | O(log n) |
| Worst Case | O(n) | O(log n) |



**Conclusion:**
- Linear Search is suitable for small datasets and unsorted arrays.
- Binary Search is more efficient for large datasets when the data is sorted.
- Binary Search reduces the search space by half in every iteration, making it significantly faster than Linear Search for large datasets.