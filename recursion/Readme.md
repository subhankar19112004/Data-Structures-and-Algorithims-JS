# Recursion in JavaScript

> Mastering the art of solving complex problems by breaking them into smaller, manageable subproblems.

Recursion is one of the most fundamental concepts in computer science and algorithmic problem-solving. It provides a powerful way to approach problems that can be divided into smaller instances of the same problem.

This directory contains my structured learning and implementation of recursion concepts, problem-solving techniques, and important interview questions using **JavaScript (ES6+)**.

---

## 📌 Table of Contents

1. [Introduction to Recursion](#-1-introduction-to-recursion)
2. [How Recursion Works](#-2-how-recursion-works)
3. [Anatomy of a Recursive Function](#-3-anatomy-of-a-recursive-function)
4. [Call Stack and Execution Flow](#-4-call-stack-and-execution-flow)
5. [Types of Recursion](#-5-types-of-recursion)
6. [Recursion Tree](#-6-recursion-tree)
7. [Recursion vs Iteration](#-7-recursion-vs-iteration)
8. [Time and Space Complexity](#-8-time-and-space-complexity)
9. [How to Approach Recursive Problems](#-9-how-to-approach-recursive-problems)
10. [Important Recursion Patterns](#-10-important-recursion-patterns)
11. [Advantages and Limitations](#-11-advantages-and-limitations)
12. [Common Mistakes](#-12-common-mistakes)
13. [Interview Questions](#-13-interview-questions)
14. [Key Takeaways](#-14-key-takeaways)

---

## 1. Introduction to Recursion

### What is Recursion?

Recursion is a programming technique in which a function calls itself, directly or indirectly, to solve a problem by breaking it into smaller instances of the same problem.

Instead of solving the entire problem in one execution, recursion repeatedly reduces the problem until it reaches a condition where the solution is straightforward.

That stopping condition is called the **Base Case**.

### Why Do We Need Recursion?

Consider a problem where we need to calculate the factorial of a number.

Mathematically:

\[
5! = 5 \times 4 \times 3 \times 2 \times 1
\]

We can express this problem recursively:

\[
n! = n \times (n-1)!
\]

The problem becomes smaller with every function call until we reach:

\[
0! = 1
\]

This is the fundamental idea behind recursion.

### Example: Factorial

```javascript
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

**Understanding the execution:**

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1 * factorial(0)
                        1
```

The function keeps calling itself until the base case is reached. Then the pending function calls return their results.

---

## 2. How Recursion Works

Every recursive function follows a repeated execution process:

1. A function receives an input.
2. It checks whether the base case is satisfied.
3. If not, it calls itself with a smaller or modified input.
4. The process continues until the base case is reached.
5. The function calls return their results in reverse order.

### Example: Sum of First N Natural Numbers

```javascript
function sum(n) {
    if (n === 0) return 0;

    return n + sum(n - 1);
}

console.log(sum(5)); // 15
```

**Execution:**

```text
sum(5) = 5 + sum(4)
       = 5 + 4 + sum(3)
       = 5 + 4 + 3 + sum(2)
       = 5 + 4 + 3 + 2 + sum(1)
       = 5 + 4 + 3 + 2 + 1 + sum(0)
       = 15
```

There are two important phases:

- **Calling Phase:** Recursive calls are continuously created.
- **Returning Phase:** Results are calculated as calls return.

Understanding these two phases is essential for mastering recursion.

---

## 3. Anatomy of a Recursive Function

A correctly designed recursive function generally consists of three components.

### 1. Base Case

The condition that terminates recursion.

Without a valid base case, the function may continue calling itself indefinitely until the call stack overflows.

### 2. Recursive Case

The part where the function calls itself with a modified input.

The input must move toward the base case.

### 3. Return Relationship

The expression that combines the current result with the result of the smaller subproblem.

### General Structure

```javascript
function recursiveFunction(input) {

    // Base Case
    if (baseCondition) {
        return result;
    }

    // Recursive Case
    return recursiveFunction(smallerInput);
}
```

### Example: Power of a Number

```javascript
function power(x, n) {
    if (n === 0) return 1;

    return x * power(x, n - 1);
}

console.log(power(2, 4)); // 16
```

**Important:** Always ensure that recursive calls make progress toward the base case.

---

## 4. Call Stack and Execution Flow

The Call Stack is a fundamental part of how recursion works.

JavaScript uses a call stack to manage function execution. Every function invocation creates an execution context, which is pushed onto the stack.

When a function finishes executing, its execution context is removed from the stack.

The stack follows the **LIFO (Last In, First Out)** principle.

### Example

```javascript
function print(n) {
    if (n === 0) return;

    console.log(n);

    print(n - 1);
}

print(3);
```

### Stack Building Phase

```text
| print(1) |  ← Top
| print(2) |
| print(3) |
| Global   |
```

### Stack Unwinding Phase

```text
print(0) → returns
print(1) → returns
print(2) → returns
print(3) → returns
```

**Output:**

```text
3
2
1
```

### Important Terminology

| Term | Meaning |
|---|---|
| Call Stack | Manages active function executions |
| Push | Adds a function execution to the stack |
| Pop | Removes a completed function execution |
| Stack Frame | Represents one function invocation |
| Stack Overflow | Occurs when the call stack limit is exceeded |
| Stack Unwinding | The process of returning from recursive calls |

---

## 5. Types of Recursion

Recursion can be classified based on how and where recursive calls occur.

### 5.1 Direct Recursion

A function directly calls itself.

```javascript
function directRecursion(n) {
    if (n === 0) return;

    directRecursion(n - 1);
}
```

### 5.2 Indirect Recursion

Two or more functions call one another in a recursive cycle.

```javascript
function functionA(n) {
    if (n <= 0) return;

    functionB(n - 1);
}

function functionB(n) {
    if (n <= 0) return;

    functionA(n - 1);
}
```

### 5.3 Tail Recursion

A recursive function is tail-recursive when its recursive call is the final operation performed by that function.

```javascript
function factorial(n, result = 1) {
    if (n === 0) return result;

    return factorial(n - 1, result * n);
}
```

### 5.4 Non-Tail Recursion

The function performs additional operations after the recursive call returns.

```javascript
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}
```

**Note:** JavaScript does not provide reliable proper tail-call optimization across common production runtimes. Do not assume tail recursion eliminates stack usage.

---

## 6. Recursion Tree

A recursion tree is a visual representation of recursive function calls.

It helps us understand how a problem divides into smaller subproblems and how many recursive calls are generated.

### Example: Fibonacci

```javascript
function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4)); // 3
```

### Recursion Tree

```text
                  fib(4)
                 /      \
             fib(3)     fib(2)
             /   \       /   \
         fib(2) fib(1) fib(1) fib(0)
         /   \
      fib(1) fib(0)
```

Notice that `fib(2)` is calculated more than once.

This introduces an important algorithmic concept:

**Overlapping Subproblems:** The same smaller subproblems are solved repeatedly.

This is one of the reasons why basic recursive Fibonacci has exponential time complexity and why Dynamic Programming can optimize it.

---

## 7. Recursion vs Iteration

Both recursion and iteration are techniques for repeating computations, but their execution mechanisms are different.

| Parameter | Recursion | Iteration |
|---|---|---|
| Mechanism | Function calls itself | Loops |
| Termination | Base Case | Loop Condition |
| Memory | Uses Call Stack | Usually uses less auxiliary stack memory |
| Code Structure | Often concise | Often straightforward |
| Debugging | Can be harder | Generally easier |
| Stack Overflow | Possible | Generally not from loop iterations |
| Best Use Cases | Trees, backtracking, divide and conquer | Traversal, counting, repeated operations |

### Example: Factorial Using Iteration

```javascript
function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
```

### Example: Factorial Using Recursion

```javascript
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}
```

Both have O(n) time complexity.

However:

- Recursive factorial uses O(n) call stack space.
- Iterative factorial uses O(1) auxiliary space.

Recursion is not automatically more efficient than iteration. Choose the approach based on the problem structure.

---

## 8. Time and Space Complexity

Understanding complexity is essential when implementing recursive algorithms.

### Time Complexity

Time complexity depends on the number of recursive calls and the work performed during each call.

| Problem | Time Complexity |
|---|---|
| Factorial | O(n) |
| Sum of N Numbers | O(n) |
| Linear Recursive Search | O(n) |
| Binary Search | O(log n) |
| Fibonacci (Naive) | O(2ⁿ) |

### Space Complexity

Recursive functions consume memory through their active call stack.

| Problem | Auxiliary Space |
|---|---|
| Factorial | O(n) |
| Sum of N Numbers | O(n) |
| Binary Search (Recursive) | O(log n) |
| Fibonacci (Naive) | O(n) |

**Important distinction:**

For recursive Fibonacci:

- Time complexity: O(2ⁿ)
- Auxiliary stack space: O(n)

The number of function calls and maximum recursion depth are not the same thing.

---

## 9. How to Approach Recursive Problems

Developing recursive intuition is more important than memorizing recursive solutions.

Follow this systematic approach whenever you encounter a recursive problem.

### Step 1: Identify the Smaller Problem

Ask yourself:

Can the current problem be expressed using a smaller version of the same problem?

### Step 2: Define the Base Case

Identify the smallest possible input for which the answer is already known.

### Step 3: Define the Recursive Relationship

Determine how the current problem depends on the smaller problem.

### Step 4: Trust the Recursive Call

Assume that the recursive function correctly solves the smaller subproblem.

Use its result to solve the current problem.

### Step 5: Check the Return Phase

Understand what happens when recursive calls start returning.

### Step 6: Analyze Complexity

Calculate the number of calls, work per call, and maximum recursion depth.

### A Useful Mental Model

When solving recursion problems, ask these three questions:

1. What is my base case?
2. What is my smaller problem?
3. How will I use the smaller problem's answer?

If you can answer these questions, you are already moving toward a recursive solution.

---

## 10. Important Recursion Patterns

These patterns form the foundation for solving more advanced problems.

| Pattern | Description | Common Applications |
|---|---|---|
| Linear Recursion | One recursive call per invocation | Factorial, Sum |
| Multiple Recursion | Multiple recursive calls | Fibonacci |
| Tree Recursion | Recursive branching structure | Binary Trees |
| Divide and Conquer | Divide a problem into smaller parts | Merge Sort |
| Backtracking | Explore choices and undo them | N-Queens, Subsets |
| Recursive Traversal | Visit hierarchical structures | Tree and Graph DFS |

### Recursion as a Foundation for Advanced Topics

Recursion is an important building block for understanding:

- Backtracking
- Tree Traversal
- Graph DFS
- Divide and Conquer
- Dynamic Programming
- Combinatorial Problems

It is not a prerequisite for every implementation of these techniques, but understanding recursion makes their underlying logic much easier to grasp.

---

## 11. Advantages and Limitations

### Advantages

- Simplifies problems with repetitive substructures.
- Makes tree and graph traversal intuitive.
- Provides a natural approach to divide-and-conquer algorithms.
- Helps implement backtracking solutions.
- Reduces the need for manually managing certain execution states.

### Limitations

- Function calls introduce execution overhead.
- Recursive calls consume call stack memory.
- Deep recursion can cause stack overflow.
- Repeated subproblems can lead to inefficient execution.
- Debugging complex recursive flows can be challenging.

---

## 12. Common Mistakes

| Mistake | Why It Is a Problem |
|---|---|
| Missing Base Case | Recursion may never terminate |
| Incorrect Base Case | Produces incorrect results |
| No Progress Toward Base Case | Can cause infinite recursion |
| Incorrect Return Statement | Breaks result propagation |
| Ignoring Stack Space | Can lead to stack overflow |
| Repeated Computation | Can cause exponential time complexity |
| Misunderstanding Call Stack | Makes execution difficult to trace |

---

## 13. Interview Questions

Practice these problems to strengthen recursive thinking and prepare for technical interviews.

### Beginner Level

- Print numbers from 1 to N.
- Print numbers from N to 1.
- Find the sum of first N natural numbers.
- Calculate factorial of a number.
- Calculate the power of a number.
- Reverse a string using recursion.
- Check whether a string is a palindrome.
- Find the sum of digits of a number.

### Intermediate Level

- Fibonacci Number.
- Check whether an array is sorted.
- Find the first occurrence of an element.
- Find the last occurrence of an element.
- Recursive Binary Search.
- Generate all subsets of an array.
- Generate all subsequences of a string.
- Generate all permutations of an array.
- Tower of Hanoi.

### Advanced Level

- Combination Sum.
- Generate Parentheses.
- Word Search.
- Rat in a Maze.
- N-Queens Problem.
- Sudoku Solver.
- Palindrome Partitioning.
- Subset Sum.
- Recursive problems on binary trees.

---

## 14. Key Takeaways

- Recursion is a problem-solving technique, not a data structure.
- Every recursive function needs a well-defined base case.
- Each recursive call should move toward termination.
- The Call Stack manages recursive function execution.
- Recursive calls follow the LIFO execution principle.
- The calling phase and returning phase are equally important.
- Recursion can simplify complex algorithmic problems.
- Understanding recursion is essential for mastering backtracking, tree traversal, and many Dynamic Programming problems.

---

## 🎯 Final Thought

Recursion is not about making a function call itself repeatedly.

It is about learning how to trust a smaller problem to solve a bigger problem.

Once you understand the relationship between the base case, recursive case, and call stack, recursion becomes much less intimidating.

**Don't memorize the recursion tree. Learn how to build it.**

*One recursive call at a time. One problem at a time.* 🚀