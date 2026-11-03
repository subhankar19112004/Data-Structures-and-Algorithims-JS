# 🔍 Binary Search — Complete DSA Guide (JavaScript)

A comprehensive guide to understanding, implementing, and mastering **Binary Search** in Data Structures and Algorithms using JavaScript.

This README covers everything from basic binary search to advanced variations, including boundary search, binary search on answer space, common interview patterns, complexity analysis, and LeetCode practice problems.

---

## 📚 Table of Contents

1. [Introduction](#1-introduction)
2. [Why Do We Need Binary Search?](#2-why-do-we-need-binary-search)
3. [Prerequisites](#3-prerequisites)
4. [How Binary Search Works](#4-how-binary-search-works)
5. [Binary Search Algorithm](#5-binary-search-algorithm)
6. [Understanding Loop Conditions](#6-understanding-loop-conditions)
7. [Understanding Pointer Updates](#7-understanding-pointer-updates)
8. [Calculating the Middle Index](#8-calculating-the-middle-index)
9. [Binary Search Implementation in JavaScript](#9-binary-search-implementation-in-javascript)
10. [Types and Patterns of Binary Search](#10-types-and-patterns-of-binary-search)
11. [Binary Search on Answer Space](#11-binary-search-on-answer-space)
12. [Time and Space Complexity](#12-time-and-space-complexity)
13. [Common Mistakes and Edge Cases](#13-common-mistakes-and-edge-cases)
14. [How to Identify Binary Search Problems](#14-how-to-identify-binary-search-problems)
15. [Important Interview Questions](#15-important-interview-questions)
16. [LeetCode Practice Roadmap](#16-leetcode-practice-roadmap)
17. [Interview Tips](#17-interview-tips)
18. [Final Takeaways](#18-final-takeaways)

---

# 1. Introduction

**Binary Search** is an efficient searching algorithm that repeatedly divides a sorted search space into two halves to locate a target element or determine an optimal answer.

Instead of checking every element one by one, Binary Search eliminates approximately half of the remaining search space in every iteration.

### Key Characteristics

- Works on sorted arrays or search spaces with a suitable monotonic property.
- Uses the Divide and Conquer approach.
- Reduces the search space by approximately 50% per iteration.
- Has a time complexity of `O(log n)`.
- Can be implemented iteratively or recursively.

### Linear Search vs Binary Search

Consider the following sorted array:

```javascript
const arr = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 70;
```

| Criteria | Linear Search | Binary Search |
|---|---|---|
| Approach | Sequential search | Divide and conquer |
| Requirement | No sorting required | Sorted or monotonic search space |
| Best Case | O(1) | O(1) |
| Average Case | O(n) | O(log n) |
| Worst Case | O(n) | O(log n) |
| Space (iterative) | O(1) | O(1) |

**Conclusion:** Binary Search is significantly more efficient for large sorted datasets.

---

# 2. Why Do We Need Binary Search?

Imagine searching for a number in an array containing 1,000,000 sorted elements.

### Using Linear Search

In the worst case, you may need to check all 1,000,000 elements.

### Using Binary Search

You eliminate half of the search space after every iteration.

For example:

```text
1,000,000
   500,000
      250,000
         125,000
            62,500
               ...
                  1
```

It takes approximately 20 iterations to reduce 1,000,000 elements to one candidate.

This is why Binary Search is preferred when its prerequisites are satisfied.

---

# 3. Prerequisites

Before applying Binary Search, understand these important conditions.

### 1. Sorted Search Space

For traditional Binary Search, the array must be sorted.

Example:

```javascript
const arr = [10, 20, 30, 40, 50];
```

### 2. Monotonic Property

For advanced Binary Search problems, the search space does not necessarily need to be an array.

Instead, the answer space must have a monotonic property.

Example:

```text
Input:  1  2  3  4  5  6  7  8
Output: F  F  F  T  T  T  T  T
```

Once the condition becomes true, it remains true.

We can use Binary Search to find the first position where the condition becomes true.

### 3. Search Space

Always identify what you are searching for:

- An exact element?
- First occurrence?
- Last occurrence?
- Minimum possible answer?
- Maximum possible answer?
- A boundary between two conditions?

Identifying the search space is one of the most important steps.

---

# 4. How Binary Search Works

Let's understand Binary Search with a dry run.

### Example

```javascript
const arr = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 70;
```

Initially:

```text
left = 0
right = 7
```

Calculate the middle index:

```javascript
mid = left + Math.floor((right - left) / 2);
```

### Iteration 1

```text
left = 0
right = 7
mid = 3

arr[mid] = 40
target = 70
```

Since `40 < 70`, the target must be on the right side.

```javascript
left = mid + 1;
```

### Iteration 2

```text
left = 4
right = 7
mid = 5

arr[mid] = 60
target = 70
```

Since `60 < 70`, move right again.

```javascript
left = mid + 1;
```

### Iteration 3

```text
left = 6
right = 7
mid = 6

arr[mid] = 70
target = 70
```

Target found!

```javascript
return mid;
```

### Complete Dry Run

| Iteration | Left | Right | Mid | arr[mid] | Decision |
|---|---:|---:|---:|---:|---|
| 1 | 0 | 7 | 3 | 40 | Search right |
| 2 | 4 | 7 | 5 | 60 | Search right |
| 3 | 6 | 7 | 6 | 70 | Target found |

Result: `6`

---

# 5. Binary Search Algorithm

The general steps are:

1. Initialize `left` and `right`.
2. Calculate `mid`.
3. Compare the middle element with the target.
4. If equal, return the result.
5. If the middle element is smaller, eliminate the left half.
6. If the middle element is greater, eliminate the right half.
7. Repeat until the target is found or the search space becomes empty.

### Pseudocode

```text
left = 0
right = array.length - 1

WHILE left <= right:

    mid = left + floor((right - left) / 2)

    IF arr[mid] == target:
        RETURN mid

    ELSE IF arr[mid] < target:
        left = mid + 1

    ELSE:
        right = mid - 1

RETURN -1
```

---

# 6. Understanding Loop Conditions

One of the most important concepts in Binary Search is deciding when to use:

- `while (left <= right)`
- `while (left < right)`

The choice depends on the interval definition and pointer updates.

## A. while (left <= right)

Use this for the classic exact-search pattern with an inclusive search interval.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

### Why `<=`?

Consider:

```javascript
left = 3;
right = 3;
```

There is still one element remaining.

We must check that element before terminating.

If we use `left < right`, the loop will terminate without checking it.

## B. while (left < right)

Commonly used in boundary-search problems where both pointers converge on the answer.

Example: Finding the first bad version.

```javascript
function solution(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
}
```

### Why `<`?

When:

```javascript
left = 4;
right = 4;
```

Both pointers have converged.

The remaining candidate is the answer, so the loop terminates.

## Comparison

| Condition | Typical Purpose | Termination |
|---|---|---|
| `left <= right` | Exact element search | `left > right` |
| `left < right` | Boundary/convergence search | `left === right` |

**Important:** These are common patterns, not rigid rules. Other valid Binary Search implementations exist. The loop condition, interval definition, and pointer updates must always be consistent.

---

# 7. Understanding Pointer Updates

Pointer updates determine which part of the search space gets eliminated.

### Case 1: left = mid + 1

Use when `mid` is confirmed not to be the answer and everything on its left can be eliminated.

```javascript
if (arr[mid] < target) {
    left = mid + 1;
}
```

### Case 2: right = mid - 1

Use when `mid` is confirmed not to be the answer and everything on its right can be eliminated.

```javascript
if (arr[mid] > target) {
    right = mid - 1;
}
```

### Case 3: right = mid

Use when `mid` might still be the answer.

Example:

```javascript
if (arr[mid] >= target) {
    right = mid;
}
```

### Case 4: left = mid

Use when `mid` might still be the answer and the search interval is designed to make progress with a suitable midpoint.

For example, finding the last true position often requires an upper midpoint:

```javascript
let mid = left + Math.floor((right - left + 1) / 2);

if (condition(mid)) {
    left = mid;
} else {
    right = mid - 1;
}
```

**Important:** When using `left = mid`, use an upper midpoint in this pattern. Otherwise, the algorithm can get stuck in an infinite loop.

---

# 8. Calculating the Middle Index

There are two common ways to calculate `mid`.

### Standard Formula

```javascript
let mid = Math.floor((left + right) / 2);
```

### Overflow-Safe Formula

```javascript
let mid = left + Math.floor((right - left) / 2);
```

The second formula is generally preferred because it avoids potential integer overflow in languages with fixed-width integer types.

JavaScript uses Number values for ordinary array indices, but the second formula is still a good standard practice.

### Lower Midpoint vs Upper Midpoint

Lower midpoint:

```javascript
let mid = left + Math.floor((right - left) / 2);
```

Upper midpoint:

```javascript
let mid = left + Math.floor((right - left + 1) / 2);
```

Use the upper midpoint when an update such as `left = mid` needs guaranteed progress.

---

# 9. Binary Search Implementation in JavaScript

## A. Iterative Binary Search

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

Advantages:

- O(log n) time complexity.
- O(1) auxiliary space.
- No recursion overhead.
- Suitable for production and competitive programming.

## B. Recursive Binary Search

```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    }

    return binarySearch(arr, target, left, mid - 1);
}
```

Advantages:

- Easy to understand.
- Naturally represents divide and conquer.
- Useful for understanding recursion.

Disadvantages:

- Uses O(log n) call-stack space.
- Can introduce function-call overhead.

**Recommendation:** Prefer iterative Binary Search for most JavaScript interview problems unless recursion is specifically required.

---

# 10. Types and Patterns of Binary Search

Binary Search has several variations. Understanding these patterns is essential for solving advanced DSA problems.

## Pattern 1: Standard Binary Search

**Objective:** Find an exact target in a sorted array.

Example:

```javascript
const arr = [1, 3, 5, 7, 9];
const target = 7;
```

Expected result:

```text
3
```

Template:

```javascript
function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

## Pattern 2: First Occurrence / Lower Bound

**Objective:** Find the first index where an element is greater than or equal to the target.

Example:

```javascript
const arr = [1, 2, 2, 2, 3, 4];
const target = 2;
```

Expected result:

```text
1
```

Template:

```javascript
function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

Notice that `right = arr.length`, not `arr.length - 1`.

This is a half-open interval: `[left, right)`.

The returned index can equal `arr.length`, meaning no element is greater than or equal to the target.

## Pattern 3: Upper Bound

**Objective:** Find the first index where an element is strictly greater than the target.

Example:

```javascript
const arr = [1, 2, 2, 2, 3, 4];
const target = 2;
```

Expected result:

```text
4
```

Template:

```javascript
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

## Pattern 4: First and Last Occurrence

**Objective:** Find the first and last positions of a target in a sorted array containing duplicates.

Example:

```javascript
const arr = [5, 7, 7, 8, 8, 10];
const target = 8;
```

Expected result:

```javascript
[3, 4]
```

Implementation:

```javascript
function searchRange(arr, target) {
    function findFirst() {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === target) {
                answer = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }

    function findLast() {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === target) {
                answer = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }

    return [findFirst(), findLast()];
}
```

## Pattern 5: Search Insert Position

**Objective:** Find the index where the target exists or should be inserted to maintain sorted order.

Example:

```javascript
const arr = [1, 3, 5, 6];
const target = 2;
```

Expected result:

```text
1
```

Implementation:

```javascript
function searchInsert(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

This is essentially the Lower Bound pattern.

## Pattern 6: Binary Search on Rotated Sorted Array

**Objective:** Search for an element in a sorted array that has been rotated.

Example:

```javascript
const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
```

Expected result:

```text
4
```

Implementation:

```javascript
function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
```

The key idea is to identify which half is sorted and determine whether the target belongs to that half.

## Pattern 7: Find Minimum in Rotated Sorted Array

**Objective:** Find the minimum element in a rotated sorted array without duplicates.

Example:

```javascript
const arr = [3, 4, 5, 1, 2];
```

Expected result:

```text
1
```

Implementation:

```javascript
function findMin(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}
```

## Pattern 8: Find Peak Element

**Objective:** Find an element that is greater than its neighboring elements.

Example:

```javascript
const arr = [1, 2, 3, 1];
```

Expected result:

```text
2
```

Implementation:

```javascript
function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

The algorithm moves towards a rising or descending slope until it reaches a peak.

---

# 11. Binary Search on Answer Space

This is one of the most important advanced Binary Search concepts.

Traditional Binary Search searches for an element in an array.

Binary Search on Answer Space searches for the optimal answer within a range of possible answers.

### When should we use it?

Look for problems involving:

- Minimum possible maximum.
- Maximum possible minimum.
- Minimum time required.
- Minimum capacity required.
- Maximum achievable distance.
- Smallest feasible value.
- Largest feasible value.

The key requirement is a monotonic feasibility condition.

### Example: Koko Eating Bananas

Problem: Koko has several piles of bananas and `h` hours to eat them.

Find the minimum eating speed required to finish all bananas within `h` hours.

```javascript
const piles = [3, 6, 7, 11];
const h = 8;
```

Possible eating speeds:

```text
Speed:       1  2  3  4  5  6 ...
Can finish:  F  F  F  T  T  T ...
```

Once a speed is sufficient, every higher speed is also sufficient.

Therefore, we can find the minimum feasible speed using Binary Search.

Implementation:

```javascript
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        let hours = 0;

        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }

        if (hours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

### Understanding the feasibility function

```javascript
if (hours <= h) {
    right = mid;
} else {
    left = mid + 1;
}
```

- If the current speed is sufficient, try a smaller speed.
- If the current speed is insufficient, increase the speed.

The objective is to find the smallest valid speed.

### General Binary Search on Answer Template

```javascript
function binarySearchOnAnswer() {
    let left = minimumPossibleAnswer;
    let right = maximumPossibleAnswer;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (isFeasible(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
```

For finding the maximum feasible answer, a common alternative is:

```javascript
function binarySearchMaximum() {
    let left = minimumPossibleAnswer;
    let right = maximumPossibleAnswer;

    while (left < right) {
        let mid = left + Math.floor((right - left + 1) / 2);

        if (isFeasible(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
```

Remember: the feasibility function and pointer updates depend on whether you are finding the minimum or maximum valid answer.

---

# 12. Time and Space Complexity

Binary Search eliminates approximately half of the remaining search space in each iteration.

The recurrence is:

```text
T(n) = T(n / 2) + O(1)
```

Therefore:

```text
T(n) = O(log n)
```

### Complexity Analysis

| Operation | Time Complexity |
|---|---|
| Best Case | O(1) |
| Average Case | O(log n) |
| Worst Case | O(log n) |

| Implementation | Auxiliary Space |
|---|---|
| Iterative | O(1) |
| Recursive | O(log n) |

### Why O(log n)?

Suppose the array has 16 elements.

```text
16 → 8 → 4 → 2 → 1
```

It takes 4 reductions to reach one candidate.

Mathematically:

```text
16 / 2⁴ = 1
```

Therefore:

```text
log₂(16) = 4
```

For `n` elements, the number of iterations is proportional to `log₂(n)`.

---

# 13. Common Mistakes and Edge Cases

Understanding mistakes is just as important as understanding the algorithm.

### 1. Incorrect Loop Condition

```javascript
while (left < right)
```

Using this in a classic exact-search implementation can skip the final remaining element.

Use the appropriate interval pattern.

### 2. Incorrect Pointer Updates

Incorrect:

```javascript
left = mid;
```

This can cause an infinite loop when `mid === left`.

Correct for standard exact search:

```javascript
left = mid + 1;
```

### 3. Forgetting to Return the Answer

Incorrect:

```javascript
while (left < right) {
    // Binary Search logic
}
```

Correct:

```javascript
while (left < right) {
    // Binary Search logic
}

return left;
```

### 4. Integer Overflow

In languages such as C++ and Java, this can overflow:

```javascript
let mid = Math.floor((left + right) / 2);
```

Prefer:

```javascript
let mid = left + Math.floor((right - left) / 2);
```

### 5. Handling Duplicates

Standard Binary Search may return any matching occurrence.

If the problem asks for the first or last occurrence, continue searching after finding a match.

### 6. Empty Array

```javascript
const arr = [];
```

Initialize:

```javascript
let left = 0;
let right = arr.length - 1;
```

The loop will not execute, and the function should return `-1` for exact search.

### 7. Single Element

```javascript
const arr = [10];
```

For classic exact search, `left <= right` ensures that the single element is checked.

### 8. Unsorted Array

Traditional Binary Search cannot be directly applied to an unsorted array.

Sorting first may change the original indices and introduce additional time complexity.

---

# 14. How to Identify Binary Search Problems

When reading a DSA problem, ask yourself these questions:

1. Is the array sorted?
2. Is the search space monotonic?
3. Can I eliminate half of the search space based on a condition?
4. Am I searching for a boundary?
5. Does the problem ask for a minimum or maximum feasible answer?
6. Can I efficiently verify whether a candidate answer is valid?

### Common Problem Keywords

| Keyword | Possible Pattern |
|---|---|
| Find an element | Standard Binary Search |
| First occurrence | Lower Bound |
| Last occurrence | Last True / Upper Bound variation |
| Insertion position | Lower Bound |
| Minimum feasible | First True |
| Maximum feasible | Last True |
| Rotated sorted array | Modified Binary Search |
| Peak element | Slope-based Binary Search |
| Minimum capacity | Binary Search on Answer |
| Minimum time | Binary Search on Answer |

These keywords are hints, not guarantees. Always verify the monotonic property and search-space boundaries.

---

# 15. Important Interview Questions

Here are important questions to master before moving to advanced DSA topics.

### Beginner Level

1. What is Binary Search?
2. Why must traditional Binary Search use a sorted array?
3. What is the time complexity of Binary Search?
4. What is the difference between Linear Search and Binary Search?
5. Why do we calculate `mid` using `left + Math.floor((right - left) / 2)`?
6. What is the difference between iterative and recursive Binary Search?
7. Why do we use `left <= right` in standard Binary Search?
8. What happens when `left === right`?

### Intermediate Level

1. What is Lower Bound?
2. What is Upper Bound?
3. How do you find the first occurrence of a duplicate element?
4. How do you find the last occurrence of a duplicate element?
5. How do you find the insertion position of an element?
6. How do you search in a rotated sorted array?
7. How do you find the minimum element in a rotated sorted array?
8. How do you find a peak element?
9. What is the difference between `right = mid` and `right = mid - 1`?
10. Why can `left = mid` cause an infinite loop?

### Advanced Level

1. What is Binary Search on Answer Space?
2. What is a monotonic predicate?
3. How do you find the minimum feasible answer?
4. How do you find the maximum feasible answer?
5. How do you solve Koko Eating Bananas?
6. How do you solve Capacity to Ship Packages Within D Days?
7. How do you find the median of two sorted arrays?
8. How can Binary Search be applied to a 2D matrix?
9. How do you identify a suitable search-space boundary?
10. How do you avoid infinite loops in boundary-search implementations?

---

# 16. LeetCode Practice Roadmap

Practice these problems in order. Try to understand the pattern instead of memorizing individual solutions.

## Level 1: Fundamentals

| # | Problem | LeetCode |
|---|---|---|
| 1 | Binary Search | [704](https://leetcode.com/problems/binary-search/) |
| 2 | Search Insert Position | [35](https://leetcode.com/problems/search-insert-position/) |
| 3 | Guess Number Higher or Lower | [374](https://leetcode.com/problems/guess-number-higher-or-lower/) |
| 4 | Sqrt(x) | [69](https://leetcode.com/problems/sqrtx/) |
| 5 | Valid Perfect Square | [367](https://leetcode.com/problems/valid-perfect-square/) |

## Level 2: Boundary Search

| # | Problem | LeetCode |
|---|---|---|
| 1 | Find First and Last Position of Element in Sorted Array | [34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |
| 2 | First Bad Version | [278](https://leetcode.com/problems/first-bad-version/) |
| 3 | Find Smallest Letter Greater Than Target | [744](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |
| 4 | Search a 2D Matrix | [74](https://leetcode.com/problems/search-a-2d-matrix/) |
| 5 | Find Peak Element | [162](https://leetcode.com/problems/find-peak-element/) |

## Level 3: Rotated Arrays

| # | Problem | LeetCode |
|---|---|---|
| 1 | Find Minimum in Rotated Sorted Array | [153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |
| 2 | Search in Rotated Sorted Array | [33](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 3 | Search in Rotated Sorted Array II | [81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) |
| 4 | Find Minimum in Rotated Sorted Array II | [154](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) |

## Level 4: Binary Search on Answer Space

| # | Problem | LeetCode |
|---|---|---|
| 1 | Koko Eating Bananas | [875](https://leetcode.com/problems/koko-eating-bananas/) |
| 2 | Capacity to Ship Packages Within D Days | [1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) |
| 3 | Minimum Number of Days to Make m Bouquets | [1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) |
| 4 | Split Array Largest Sum | [410](https://leetcode.com/problems/split-array-largest-sum/) |
| 5 | Magnetic Force Between Two Balls | [1552](https://leetcode.com/problems/magnetic-force-between-two-balls/) |
| 6 | Find the Smallest Divisor Given a Threshold | [1283](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) |

## Level 5: Advanced

| # | Problem | LeetCode |
|---|---|---|
| 1 | Median of Two Sorted Arrays | [4](https://leetcode.com/problems/median-of-two-sorted-arrays/) |
| 2 | Time Based Key-Value Store | [981](https://leetcode.com/problems/time-based-key-value-store/) |
| 3 | Find in Mountain Array | [1095](https://leetcode.com/problems/find-in-mountain-array/) |
| 4 | Kth Smallest Element in a Sorted Matrix | [378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |
| 5 | Maximum Value at a Given Index in a Bounded Array | [1802](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) |

---

# 17. Interview Tips

Before implementing Binary Search in an interview, follow this checklist:

- [ ] Identify the search space.
- [ ] Confirm whether it is sorted or monotonic.
- [ ] Decide whether you need an exact match or a boundary.
- [ ] Define whether the interval is inclusive or half-open.
- [ ] Choose the correct loop condition.
- [ ] Calculate the midpoint safely.
- [ ] Ensure every pointer update makes progress.
- [ ] Handle duplicates if required.
- [ ] Consider empty and single-element inputs.
- [ ] Verify termination and return the correct result.
- [ ] Explain the time and space complexity.

### A useful problem-solving approach

Do not immediately start writing code.

First, understand:

1. What is the answer?
2. What is the possible range of answers?
3. What condition tells me whether a candidate is valid?
4. Is that condition monotonic?
5. Am I looking for the first valid or last valid answer?

These questions help you select the correct Binary Search pattern.

---

# 18. Final Takeaways

Binary Search is much more than a searching algorithm. It is a powerful technique for reducing search spaces and solving optimization problems efficiently.

### Remember These Core Concepts

| Concept | Remember |
|---|---|
| Standard Binary Search | `left <= right` |
| Boundary Search | Often `left < right` |
| Lower Bound | First element `>= target` |
| Upper Bound | First element `> target` |
| First Bad Version | Move `right = mid` when bad |
| Last True | Often use an upper midpoint |
| Minimum Feasible Answer | Search for the first valid answer |
| Maximum Feasible Answer | Search for the last valid answer |
| Iterative Complexity | O(log n) time, O(1) space |
| Recursive Complexity | O(log n) time, O(log n) stack space |

### Most Important Lesson

**Never memorize Binary Search templates blindly. Understand the search-space invariant.**

Once you understand:

- Why the pointers move.
- Why the loop terminates.
- Why a particular midpoint is selected.
- Why the answer is returned from a particular position.

You can solve a wide variety of Binary Search problems without memorizing separate solutions.

---

## 🎯 Learning Goal

Master Binary Search progressively:

```text
Basic Binary Search
        ↓
Loop Conditions
        ↓
Lower Bound & Upper Bound
        ↓
First & Last Occurrence
        ↓
Rotated Sorted Arrays
        ↓
Peak Element
        ↓
Binary Search on Answer
        ↓
Advanced Interview Problems
```

**Happy Coding! Keep practicing and keep improving. 🚀**

*Language: JavaScript (ES6+)*  
*Topic: Data Structures and Algorithms*  
*Category: Searching Algorithms*