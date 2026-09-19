# Backtracking  🧠 🔙

> **Goal:** Understand Backtracking so well that you can recognize the
> pattern, build the recursion, and solve interview questions without
> memorizing solutions.

Backtracking looks difficult at first because recursion is involved. But
the core idea is actually very simple:

> **Try → Explore → Undo → Try another choice**

Think of yourself standing at a decision point. You choose one option,
go deeper, and if that path does not work, you come back and choose
another option.

------------------------------------------------------------------------

# 1. What is Backtracking?

Backtracking is a problem-solving technique where we:

1.  Make a choice.
2.  Move forward with that choice.
3.  Recursively solve the smaller problem.
4.  If the choice does not lead to a solution, **undo the choice**.
5.  Try the next choice.

The most important word is:

> **UNDO**

That is why it is called **backtracking**.

### Simple real-life example

Imagine a maze:

``` text
Start → → ↓ → ?
             ↓
             ❌ Dead end
```

You reach a dead end.

What do you do?

You:

-   go back,
-   undo the previous decision,
-   try another direction.

That is backtracking.

------------------------------------------------------------------------

# 2. Backtracking vs Normal Recursion

Backtracking is not a completely different thing from recursion.

Usually:

``` text
Backtracking = Recursion + Choices + Undo
```

For example, normal recursion might look like:

``` js
function solve(n) {
    if (n === 0) return;

    solve(n - 1);
}
```

There may be only one recursive path.

Backtracking usually has multiple choices:

``` js
function solve(state) {
    if (isComplete(state)) {
        return;
    }

    for (const choice of choices) {
        make(choice);

        solve(state);

        undo(choice);
    }
}
```

The important part is:

``` text
make choice
    ↓
recursive call
    ↓
undo choice
```

------------------------------------------------------------------------

# 3. The Most Important Mental Model

Whenever you see a backtracking problem, think:

> **"At this position, what choices do I have?"**

Then:

> **"What happens if I choose one of them?"**

Then:

> **"After exploring it, how do I return the state to what it was
> before?"**

This gives us the basic structure.

``` text
                    Start
                      |
              -----------------
              |       |       |
             C1      C2      C3
              |       |       |
            ...     ...     ...
```

Every branch represents one possible decision.

------------------------------------------------------------------------

# 4. The Backtracking Template

A very common template is:

``` js
function backtrack(state) {
    if (baseCondition) {
        // process/store answer
        return;
    }

    for (let choice of choices) {
        // 1. Make the choice

        // 2. Explore
        backtrack(state);

        // 3. Undo the choice
    }
}
```

In JavaScript:

``` js
function backtrack(start, path) {
    if (condition) {
        result.push([...path]);
        return;
    }

    for (let i = start; i < nums.length; i++) {
        path.push(nums[i]);

        backtrack(i + 1, path);

        path.pop();
    }
}
```

Remember this sequence:

``` text
PUSH
  ↓
RECURSE
  ↓
POP
```

This is one of the most important patterns in backtracking.

------------------------------------------------------------------------

# 5. Why Do We Need `pop()`?

Suppose:

``` js
path = [1, 2]
```

We choose:

``` js
3
```

Now:

``` js
path = [1, 2, 3]
```

We recursively explore everything possible after choosing `3`.

When we return:

``` js
path = [1, 2, 3]
```

But we now want to try another option, say `4`.

We must remove `3` first:

``` js
path.pop();

path = [1, 2]
```

Then:

``` js
path.push(4);

path = [1, 2, 4]
```

So:

``` text
Choose 3
   ↓
Explore 3
   ↓
Undo 3
   ↓
Choose 4
   ↓
Explore 4
```

Without the undo step, old choices remain inside the current path and
corrupt the answer.

------------------------------------------------------------------------

# 6. The Three Questions You Should Ask

For almost every backtracking problem, ask these three questions:

### Question 1: What is my choice?

Example:

``` text
For [1,2,3], which number should I choose next?
```

### Question 2: What is my state?

The state could contain:

``` text
current index
current path
remaining target
visited elements
current board
current string
```

### Question 3: How do I undo?

Examples:

``` js
path.pop();
visited[i] = false;
board[row][col] = '.';
currentString = currentString.slice(0, -1);
```

If you can answer these three questions, you are already halfway through
the problem.

------------------------------------------------------------------------

# 7. Base Case

Every recursive backtracking solution needs a stopping condition.

For example, while generating subsets:

``` js
if (index === nums.length) {
    result.push([...path]);
    return;
}
```

This means:

> We have processed all elements.

For N-Queens:

``` js
if (row === n) {
    // One complete solution
}
```

For a target sum:

``` js
if (remaining === 0) {
    // Found a valid combination
}
```

The base case answers:

> **"When have I completed one possible solution?"**

------------------------------------------------------------------------

# 8. Decision Tree

Backtracking becomes much easier when you draw the recursion tree.

For subsets of:

``` text
[1, 2]
```

At every element we have two choices:

``` text
                 []
              /      \
            [1]       []
           /   \     /   \
       [1,2]  [1]  [2]   []
```

Answers:

``` text
[]
[1]
[2]
[1,2]
```

The important observation:

> Every element gives us a **choice**.

------------------------------------------------------------------------

# 9. The Include / Exclude Pattern

This is one of the most important backtracking patterns.

For every element:

``` text
Include it
OR
Exclude it
```

Example:

``` js
function subsets(nums) {
    const result = [];
    const path = [];

    function solve(index) {
        if (index === nums.length) {
            result.push([...path]);
            return;
        }

        // Include
        path.push(nums[index]);
        solve(index + 1);
        path.pop();

        // Exclude
        solve(index + 1);
    }

    solve(0);

    return result;
}
```

The recursion tree has approximately:

``` text
2 choices per element

Total = 2^n
```

So the time complexity is generally:

``` text
O(n × 2^n)
```

because we may copy an `n`-length path for each subset.

------------------------------------------------------------------------

# 10. Backtracking With a Loop

Another major pattern is:

``` js
for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);

    backtrack(i + 1);

    path.pop();
}
```

This is commonly used for:

-   Subsets
-   Combinations
-   Combination Sum
-   Permutations (with modifications)
-   Letter combinations
-   Partitioning problems

The loop represents:

> **"Which choice should I make at this level?"**

------------------------------------------------------------------------

# 11. Subsets

Given:

``` text
[1, 2, 3]
```

Find all subsets.

Answer:

``` text
[]
[1]
[2]
[3]
[1,2]
[1,3]
[2,3]
[1,2,3]
```

There are:

``` text
2^n
```

subsets.

### JavaScript

``` js
function subsets(nums) {
    const result = [];
    const path = [];

    function backtrack(start) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);

            backtrack(i + 1);

            path.pop();
        }
    }

    backtrack(0);

    return result;
}
```

### Important observation

We add the current `path` **before** the loop.

Why?

Because every intermediate path is itself a valid subset.

------------------------------------------------------------------------

# 12. Subsets With Duplicates

Input:

``` text
[1,2,2]
```

We do not want duplicate subsets.

First sort:

``` js
nums.sort((a, b) => a - b);
```

Then skip duplicate choices at the same recursion level:

``` js
if (i > start && nums[i] === nums[i - 1]) {
    continue;
}
```

Complete pattern:

``` js
function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    const path = [];

    function backtrack(start) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            path.push(nums[i]);

            backtrack(i + 1);

            path.pop();
        }
    }

    backtrack(0);

    return result;
}
```

### Critical interview concept

This:

``` js
i > start
```

means:

> Skip duplicates only when they are siblings at the same recursion
> level.

We still allow:

``` text
2
  |
  2
```

when the problem allows using another occurrence.

------------------------------------------------------------------------

# 13. Combinations

Suppose:

``` text
n = 4
k = 2
```

Find all combinations of 2 numbers:

``` text
[1,2]
[1,3]
[1,4]
[2,3]
[2,4]
[3,4]
```

### Code

``` js
function combine(n, k) {
    const result = [];
    const path = [];

    function backtrack(start) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);

            backtrack(i + 1);

            path.pop();
        }
    }

    backtrack(1);

    return result;
}
```

### Why `i + 1`?

Because we cannot reuse the same number.

If we choose:

``` text
2
```

next choices start from:

``` text
3
```

------------------------------------------------------------------------

# 14. Combination Sum

Example:

``` text
candidates = [2,3,6,7]
target = 7
```

Possible answers:

``` text
[2,2,3]
[7]
```

Here a number can be reused.

Therefore:

``` js
backtrack(i)
```

instead of:

``` js
backtrack(i + 1)
```

### Code

``` js
function combinationSum(candidates, target) {
    const result = [];
    const path = [];

    function backtrack(start, remaining) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);

            backtrack(i, remaining - candidates[i]);

            path.pop();
        }
    }

    backtrack(0, target);

    return result;
}
```

### Key difference

``` text
Can reuse?
    ↓
YES → backtrack(i)
NO  → backtrack(i + 1)
```

This is an extremely useful interview rule.

------------------------------------------------------------------------

# 15. Permutations

Combinations care about:

``` text
{1,2} = {2,1}
```

Permutations care about order:

``` text
[1,2] ≠ [2,1]
```

For:

``` text
[1,2,3]
```

there are:

``` text
3! = 6
```

permutations.

``` text
[1,2,3]
[1,3,2]
[2,1,3]
[2,3,1]
[3,1,2]
[3,2,1]
```

### Code

``` js
function permute(nums) {
    const result = [];
    const path = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            used[i] = true;
            path.push(nums[i]);

            backtrack();

            path.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
}
```

### Important

Here we do not use `start`.

Why?

Because at every position we can choose **any unused element**.

------------------------------------------------------------------------

# 16. Combination vs Permutation

This distinction is extremely important.

### Combination

Order does not matter:

``` text
[1,2] = [2,1]
```

Typical approach:

``` js
for (let i = start; i < nums.length; i++) {
    ...
    backtrack(i + 1);
}
```

### Permutation

Order matters:

``` text
[1,2] ≠ [2,1]
```

Typical approach:

``` js
for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    ...
}
```

### Quick memory trick

``` text
Combination → start index
Permutation → used array
```

------------------------------------------------------------------------

# 17. Permutations With Duplicates

Input:

``` text
[1,1,2]
```

Naive permutation generation produces duplicate answers.

Sort first:

``` js
nums.sort((a, b) => a - b);
```

Then:

``` js
if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
    continue;
}
```

Why?

At the same recursion level, we should not start another branch with the
same value.

------------------------------------------------------------------------

# 18. String Backtracking

Backtracking is not limited to arrays.

It is heavily used with strings.

Examples:

-   Letter combinations of a phone number
-   Palindrome partitioning
-   Restore IP addresses
-   Word Break variations
-   Generate parentheses
-   Expression generation

For strings, your state may be:

``` text
current string
current index
remaining characters
```

------------------------------------------------------------------------

# 19. Generate Parentheses

For:

``` text
n = 3
```

Generate:

``` text
((()))
(()())
(())()
()(())
()()()
```

The important constraint is:

``` text
open < n
close < open
```

Why?

We cannot put a closing parenthesis if there is no unmatched opening
parenthesis.

### Code

``` js
function generateParenthesis(n) {
    const result = [];
    const path = [];

    function backtrack(open, close) {
        if (path.length === 2 * n) {
            result.push(path.join(''));
            return;
        }

        if (open < n) {
            path.push('(');

            backtrack(open + 1, close);

            path.pop();
        }

        if (close < open) {
            path.push(')');

            backtrack(open, close + 1);

            path.pop();
        }
    }

    backtrack(0, 0);

    return result;
}
```

### Key idea

Backtracking does not mean:

> "Generate everything and check later."

A better approach is:

> **Never create an invalid branch if you already know it is invalid.**

This is called **pruning**.

------------------------------------------------------------------------

# 20. What is Pruning?

Pruning means:

> Stop exploring a branch as soon as we know it cannot produce a valid
> answer.

Example:

``` js
if (remaining < 0) {
    return;
}
```

There is no point continuing.

Think of it like cutting useless branches from a tree.

``` text
              Start
            /       \
         Valid     Invalid
          /           \
        ...            ✂
```

Pruning can dramatically reduce the search space.

------------------------------------------------------------------------

# 21. Backtracking Search Space

Many backtracking problems have exponential or factorial complexity.

Common growth rates:

``` text
Subsets              → 2^n
Permutations         → n!
Binary decisions     → 2^n
N-Queens             → roughly exponential
Combination problems → often exponential
```

This is why backtracking is generally used when:

-   input size is relatively small,
-   exhaustive search is required,
-   constraints allow pruning,
-   or no obvious polynomial solution exists.

------------------------------------------------------------------------

# 22. N-Queens

One of the most famous backtracking problems.

Place:

``` text
N queens
```

on an:

``` text
N × N
```

chessboard such that no two queens attack each other.

Queens cannot share:

``` text
same row
same column
same diagonal
```

### Basic idea

Place exactly one queen per row.

For each row:

``` text
Try every column
     ↓
Is it safe?
     ↓
YES → place queen
     ↓
go to next row
     ↓
undo queen
```

------------------------------------------------------------------------

# 23. N-Queens Safety Check

A position:

``` text
(row, col)
```

is unsafe if another queen exists in:

### Same column

``` text
col
```

### Same main diagonal

``` text
row - col
```

### Same anti-diagonal

``` text
row + col
```

This is a very useful mathematical trick.

Instead of checking the entire board repeatedly, maintain sets:

``` js
const cols = new Set();
const diag1 = new Set();
const diag2 = new Set();
```

------------------------------------------------------------------------

# 24. N-Queens Optimized Pattern

``` js
function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () =>
        Array(n).fill('.')
    );

    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col;
            const d2 = row + col;

            if (
                cols.has(col) ||
                diag1.has(d1) ||
                diag2.has(d2)
            ) {
                continue;
            }

            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);

            backtrack(row + 1);

            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    }

    backtrack(0);

    return result;
}
```

This demonstrates the complete pattern:

``` text
choose
check
place
recurse
undo
```

------------------------------------------------------------------------

# 25. Sudoku Solver

Sudoku is another classic backtracking problem.

For every empty cell:

``` text
Try 1
Try 2
Try 3
...
Try 9
```

For each number:

``` text
Is it valid?
```

If yes:

``` text
place number
↓
solve remaining board
↓
if successful → done
↓
otherwise undo
```

### Core pattern

``` js
function solve(board) {
    const cell = findEmptyCell();

    if (!cell) {
        return true;
    }

    const [row, col] = cell;

    for (let num = 1; num <= 9; num++) {
        if (!isValid(board, row, col, num)) {
            continue;
        }

        board[row][col] = num;

        if (solve(board)) {
            return true;
        }

        board[row][col] = 0;
    }

    return false;
}
```

### Very important concept

Unlike subset-generation problems, Sudoku usually asks:

> **Does a valid solution exist?**

Therefore recursion often returns a boolean.

------------------------------------------------------------------------

# 26. Backtracking That Returns `true/false`

There are two major styles.

### Style 1: Generate all answers

``` js
result.push([...path]);
```

Then continue searching.

Examples:

``` text
Subsets
Permutations
Combinations
N-Queens all solutions
```

### Style 2: Find one valid answer

``` js
if (solve()) {
    return true;
}
```

Then stop immediately after finding one.

Examples:

``` text
Sudoku
Maze path
Word search
Constraint satisfaction
```

This distinction is important.

------------------------------------------------------------------------

# 27. Maze / Rat in a Maze

Suppose:

``` text
1 = open
0 = blocked
```

You need to reach:

``` text
top-left → bottom-right
```

At every cell, you may have choices:

``` text
Up
Down
Left
Right
```

We must avoid revisiting cells.

So maintain:

``` js
visited[row][col]
```

Pattern:

``` text
mark visited
   ↓
move
   ↓
recurse
   ↓
unmark visited
```

That final unmark is backtracking.

------------------------------------------------------------------------

# 28. Word Search

Given a grid:

``` text
A B C E
S F C S
A D E E
```

and a word:

``` text
ABCCED
```

Find whether the word exists.

At each cell:

``` text
Up
Down
Left
Right
```

We temporarily mark the cell as visited.

For example:

``` js
const temp = board[row][col];
board[row][col] = '#';

const found =
    dfs(row + 1, col, index + 1) ||
    dfs(row - 1, col, index + 1) ||
    dfs(row, col + 1, index + 1) ||
    dfs(row, col - 1, index + 1);

board[row][col] = temp;
```

Notice:

``` text
modify
↓
explore
↓
restore
```

Again:

> **That is backtracking.**

------------------------------------------------------------------------

# 29. Palindrome Partitioning

Given:

``` text
"aab"
```

Possible palindrome partitions:

``` text
["a","a","b"]
["aa","b"]
```

At every index:

``` text
Try every possible substring
```

If substring is a palindrome:

``` text
choose it
↓
recurse from next index
↓
undo it
```

Typical structure:

``` js
for (let end = start; end < s.length; end++) {
    const part = s.slice(start, end + 1);

    if (!isPalindrome(part)) {
        continue;
    }

    path.push(part);

    backtrack(end + 1);

    path.pop();
}
```

------------------------------------------------------------------------

# 30. Letter Combinations of a Phone Number

Input:

``` text
"23"
```

Mapping:

``` text
2 → abc
3 → def
```

Answers:

``` text
ad
ae
af
bd
be
bf
cd
ce
cf
```

At each digit:

``` text
choose one character
```

Then move to the next digit.

This is a classic:

``` text
choices at every level
```

problem.

------------------------------------------------------------------------

# 31. State in Backtracking

A good way to design a solution is to identify the minimum state
required.

Examples:

### Subsets

``` text
start
path
```

### Permutations

``` text
path
used
```

### Combination Sum

``` text
start
remaining
path
```

### N-Queens

``` text
row
board
columns
diagonals
```

### Sudoku

``` text
board
```

### Word Search

``` text
row
col
index
visited/current board state
```

Ask:

> **What information must the next recursive call know?**

That information becomes your function parameters or maintained state.

------------------------------------------------------------------------

# 32. `start` vs `index`

This causes a lot of confusion.

### `index`

Usually means:

> Where am I currently processing?

Example:

``` js
solve(index + 1)
```

### `start`

Usually means:

> From which position am I allowed to make my next choice?

Example:

``` js
for (let i = start; i < nums.length; i++) {
    ...
    backtrack(i + 1);
}
```

There is no universal law that says one word must be used. What matters
is the meaning of the state.

------------------------------------------------------------------------

# 33. When Do We Use `i + 1`?

Use:

``` js
backtrack(i + 1)
```

when the current element cannot be selected again.

Example:

``` text
Combinations
Subsets
```

### Example

``` text
Choose 2
```

Next choices:

``` text
3, 4, 5...
```

Not `2` again.

------------------------------------------------------------------------

# 34. When Do We Use `i`?

Use:

``` js
backtrack(i)
```

when the current element can be reused.

Example:

``` text
Combination Sum
```

If we choose:

``` text
2
```

we may choose:

``` text
2
```

again.

Therefore:

``` js
backtrack(i, remaining - nums[i]);
```

------------------------------------------------------------------------

# 35. When Do We Reset `used[i]`?

For permutations:

``` js
used[i] = true;

path.push(nums[i]);

backtrack();

path.pop();

used[i] = false;
```

Why reset?

Because:

``` text
used[i] = true
```

means:

> This element is used in the current path.

After returning:

``` text
used[i] = false
```

means:

> This element is available for another branch.

------------------------------------------------------------------------

# 36. Why Do We Copy the Path?

This is a very important JavaScript concept.

Do:

``` js
result.push([...path]);
```

Not:

``` js
result.push(path);
```

Because arrays are reference types.

If we push the same `path` object and later mutate it:

``` js
path.pop();
```

the stored result may also appear changed.

Therefore:

``` js
[...path]
```

creates a shallow copy.

For nested structures, use an appropriate deep-copy strategy.

------------------------------------------------------------------------

# 37. Backtracking and JavaScript References

This is an extremely common bug.

Wrong:

``` js
const result = [];

result.push(path);

path.push(10);
```

`result[0]` and `path` point to the same array.

Correct:

``` js
result.push([...path]);
```

This is why you will frequently see:

``` js
result.push([...path]);
```

in backtracking solutions.

------------------------------------------------------------------------

# 38. Duplicate Handling

There are two different duplicate situations.

### Duplicate values in input

Example:

``` text
[1,2,2,3]
```

Sort:

``` js
nums.sort((a, b) => a - b);
```

Then skip duplicates at the same level:

``` js
if (i > start && nums[i] === nums[i - 1]) {
    continue;
}
```

### Duplicate permutation problem

Use:

``` js
if (
    i > 0 &&
    nums[i] === nums[i - 1] &&
    !used[i - 1]
) {
    continue;
}
```

These conditions look similar but solve different problems.

------------------------------------------------------------------------

# 39. The Meaning of "Same Level"

Consider:

``` text
             []
          /      \
         1        2
        /          \
       2            ...
```

Two equal values at the same depth are sibling choices.

We usually want:

``` text
Do not start duplicate branches from the same level.
```

But choosing the same value deeper in the tree may still be valid.

This is the foundation behind duplicate-skipping techniques.

------------------------------------------------------------------------

# 40. Backtracking vs Brute Force

Backtracking is technically a form of exhaustive search, but it is
smarter than blindly generating every possibility.

### Brute force

``` text
Generate everything
↓
Check everything
```

### Backtracking

``` text
Make a choice
↓
Check constraints early
↓
Stop invalid branch
↓
Continue only when useful
```

That early stopping is:

> **Pruning**

------------------------------------------------------------------------

# 41. Backtracking + Constraint Checking

A powerful pattern is:

``` js
if (!isValid(choice)) {
    continue;
}
```

Then:

``` js
makeChoice(choice);
backtrack();
undoChoice(choice);
```

This is especially useful in:

-   Sudoku
-   N-Queens
-   Word Search
-   Graph coloring
-   Rat in a Maze
-   Combination problems

------------------------------------------------------------------------

# 42. A Universal Backtracking Framework

When solving a new problem, write this first:

``` text
function backtrack(state):

    if complete:
        save/return answer

    for every possible choice:

        if choice is invalid:
            continue

        make choice

        backtrack(next state)

        undo choice
```

Then fill in:

``` text
state
choices
validity
base case
undo
```

This is far better than trying to memorize 20 separate solutions.

------------------------------------------------------------------------

# 43. How to Identify a Backtracking Problem

Look for phrases such as:

-   "Generate all..."
-   "Find all possible..."
-   "Return all combinations..."
-   "Return all permutations..."
-   "Choose..."
-   "Place..."
-   "Partition..."
-   "Can you form..."
-   "Find a path..."
-   "Try every possibility..."
-   "Arrange..."
-   "Fill the board..."
-   "Generate valid strings..."
-   "Use each element..."
-   "Find all ways..."

These are strong signals.

But not every "all" problem requires backtracking.

Ask:

> **Do I have a sequence of choices where a decision can later be
> undone?**

If yes, backtracking is a strong candidate.

------------------------------------------------------------------------

# 44. Backtracking Decision Checklist

Before coding, answer:

``` text
1. What is the decision at each level?
2. What are all possible choices?
3. What is the current state?
4. What is the base case?
5. Is the current choice valid?
6. Can I prune invalid branches?
7. Can I reuse the same element?
8. Does order matter?
9. Do I need a visited/used array?
10. What exactly must I undo?
```

If you cannot answer #10:

> You probably have not completely understood the recursion yet.

------------------------------------------------------------------------

# 45. Common Mistakes

## Mistake 1 --- Forgetting `pop()`

Wrong:

``` js
path.push(nums[i]);
backtrack(i + 1);
```

Correct:

``` js
path.push(nums[i]);

backtrack(i + 1);

path.pop();
```

------------------------------------------------------------------------

## Mistake 2 --- Saving the same array reference

Wrong:

``` js
result.push(path);
```

Correct:

``` js
result.push([...path]);
```

------------------------------------------------------------------------

## Mistake 3 --- Wrong base case

For example:

``` js
if (index > nums.length)
```

instead of:

``` js
if (index === nums.length)
```

Always carefully define what "complete" means.

------------------------------------------------------------------------

## Mistake 4 --- Using `i + 1` when reuse is allowed

Combination Sum commonly requires:

``` js
backtrack(i, ...)
```

not:

``` js
backtrack(i + 1, ...)
```

------------------------------------------------------------------------

## Mistake 5 --- Using `i` when reuse is not allowed

For combinations/subsets where each element can be used once:

``` js
backtrack(i + 1)
```

------------------------------------------------------------------------

## Mistake 6 --- Not sorting when duplicate skipping requires it

For duplicate-handling problems:

``` js
nums.sort((a, b) => a - b);
```

is often necessary.

------------------------------------------------------------------------

## Mistake 7 --- Confusing combinations and permutations

Ask:

``` text
Does order matter?
```

If no:

``` text
Combination
```

If yes:

``` text
Permutation
```

------------------------------------------------------------------------

# 46. Complexity Cheat Sheet

  Problem                      Typical Number of States
  -------------------------- --------------------------
  Subsets                                         `2^n`
  Binary decision problems                        `2^n`
  Combinations                                 `C(n,k)`
  Permutations                                     `n!`
  Generate Parentheses            Catalan-number growth
  N-Queens                           Exponential search
  Sudoku                         Exponential worst case

Remember:

> Backtracking complexity is usually about the **size of the search
> tree**.

Do not blindly say "O(2\^n)" for every backtracking problem.

Analyze:

``` text
number of branches
×
depth
×
work performed at each node
```

------------------------------------------------------------------------

# 47. Backtracking Tree Complexity

Suppose every level has approximately `n` choices and depth is `n`.

The tree may look like:

``` text
                n
             /  |  \
            n   n   n
           /|\ /|\ /|\
          ... ...
```

This can become:

``` text
O(n^n)
```

If choices reduce after every level:

``` text
n × (n-1) × (n-2) × ...
```

we get:

``` text
O(n!)
```

That is why permutations are factorial.

------------------------------------------------------------------------

# 48. Backtracking With Memoization

Sometimes different recursion paths reach the same state.

Then you may be able to use:

``` text
Backtracking + Memoization
```

But be careful.

If the problem asks for **all actual paths/arrangements**, memoization
is not always directly useful because the path itself matters.

Memoization is more natural when the question is:

``` text
Can I solve this state?
How many ways are there?
What is the best result from this state?
```

This moves the problem toward:

``` text
Dynamic Programming
```

------------------------------------------------------------------------

# 49. Backtracking vs Dynamic Programming

### Backtracking

Usually explores:

``` text
choice → choice → choice
```

and may enumerate possibilities.

### DP

Usually recognizes:

``` text
overlapping subproblems
+
optimal substructure
```

and stores results.

A problem can sometimes have both approaches.

Example:

``` text
Word Break
```

can be approached using recursion/backtracking, but DP is often used to
avoid recomputing the same suffix states.

------------------------------------------------------------------------

# 50. Backtracking vs DFS

They are related but not identical.

### DFS

DFS means:

> Explore deeply before moving to the next option.

It is commonly used for:

``` text
Graphs
Trees
Grids
```

### Backtracking

Backtracking uses the same depth-first exploration idea but emphasizes:

``` text
choose
explore
undo
```

So:

> **Backtracking is often implemented using DFS, but DFS is not
> automatically backtracking.**

------------------------------------------------------------------------

# 51. A Very Important Pattern: Path + Choice

Most backtracking problems can be reduced to:

``` text
Path = decisions made so far
Choice = what can I choose next?
```

Example:

``` text
nums = [1,2,3]

path = [1,3]

next choices = none
```

When we return:

``` text
path = [1]
```

Now:

``` text
next choice = 2
```

This mental model makes recursion much easier to visualize.

------------------------------------------------------------------------

# 52. How to Dry Run Backtracking

Never dry-run only line by line.

Draw the tree.

Example:

``` text
nums = [1,2]
```

Subsets:

``` text
                 []
              /      \
            [1]       []
           /   \       \
       [1,2]  [1]      [2]
```

At every node ask:

``` text
What is path?
What is start?
What choices are available?
What happens after return?
```

Especially track the value of:

``` text
path
start/index
remaining
used
board
```

------------------------------------------------------------------------

# 53. The "Undo" Can Be Different

Undo is not always:

``` js
path.pop();
```

It depends on what you changed.

### Array

``` js
path.pop();
```

### Visited array

``` js
visited[i] = false;
```

### Set

``` js
used.delete(value);
```

### Board

``` js
board[row][col] = '.';
```

### String builder

``` js
current.pop();
```

The rule is:

> **Undo exactly what you changed before recursion.**

------------------------------------------------------------------------

# 54. Choosing Between Copying and Mutating

For performance, it is common to mutate one `path`:

``` js
path.push(value);
backtrack();
path.pop();
```

instead of creating a new array every time:

``` js
backtrack([...path, value]);
```

The mutate-and-undo approach can reduce allocations.

But when storing a final answer:

``` js
result.push([...path]);
```

because the stored answer needs its own copy.

------------------------------------------------------------------------

# 55. Interview Explanation Template

If an interviewer asks you to explain your solution, use:

### Step 1 --- Explain choices

> "At each level, I try every valid choice."

### Step 2 --- Explain state

> "I maintain the current path and the position from which the next
> choice can be made."

### Step 3 --- Explain base case

> "When the path reaches the required condition, I store the answer."

### Step 4 --- Explain recursion

> "I recursively explore the result of making that choice."

### Step 5 --- Explain backtracking

> "After returning, I remove the choice so that the next branch starts
> from the previous state."

### Step 6 --- Explain pruning

> "I stop exploring a branch as soon as the constraints show that it
> cannot produce a valid answer."

### Step 7 --- Complexity

Explain the search-tree size and the cost of processing/storing each
result.

------------------------------------------------------------------------

# 56. Most Important Backtracking Patterns to Master

Learn these patterns in this order:

``` text
1. Basic recursion
2. Subsets
3. Subsets with duplicates
4. Combinations
5. Combination Sum
6. Combination Sum with duplicates
7. Permutations
8. Permutations with duplicates
9. Generate Parentheses
10. Letter Combinations
11. Palindrome Partitioning
12. Word Search
13. Rat in a Maze
14. N-Queens
15. Sudoku
16. Graph Coloring
17. Restore IP Addresses
18. Expression Add Operators
```

Once these patterns become familiar, many new questions become
variations of the same idea.

------------------------------------------------------------------------

# 57. Interview Questions --- Must Practice

## 🟢 Level 1 --- Foundation

1.  Generate all subsets of an array.
2.  Generate all subsequences of a string.
3.  Generate all binary strings of length `n`.
4.  Generate all combinations of `k` elements from `n`.
5.  Generate all permutations of an array.
6.  Generate all valid parentheses.
7.  Generate all strings of length `n` using given characters.
8.  Count all possible paths in a grid.
9.  Find all paths from source to destination in a maze.
10. Generate all possible phone keypad combinations.

------------------------------------------------------------------------

# 58. 🟡 Level 2 --- Interview Core

11. Subsets II --- duplicates allowed in input.
12. Combination Sum.
13. Combination Sum II.
14. Permutations II.
15. Letter Combinations of a Phone Number.
16. Palindrome Partitioning.
17. Word Search.
18. Rat in a Maze.
19. Restore IP Addresses.
20. Combination Sum III.
21. Letter Case Permutation.
22. Matchsticks to Square.
23. Partition to K Equal Sum Subsets.
24. Beautiful Arrangement.
25. Path with Maximum Gold.
26. Binary Watch.
27. Tile Possibilities.
28. Split a String Into the Max Number of Unique Substrings.

------------------------------------------------------------------------

# 59. 🔴 Level 3 --- Hard / Tricky

29. N-Queens.
30. N-Queens II.
31. Sudoku Solver.
32. Graph Coloring.
33. Word Search II.
34. Expression Add Operators.
35. Remove Invalid Parentheses.
36. Scramble String.
37. Partition to K Equal Sum Subsets.
38. Matchsticks to Square.
39. Maximum Compatibility Score Sum.
40. Optimal Account Balancing.
41. Android Unlock Patterns.
42. Verbal Arithmetic / Cryptarithmetic.
43. Unique Paths with obstacles and constraints.
44. Hamiltonian Path / Cycle.
45. Generate all valid IP addresses with strict constraints.

------------------------------------------------------------------------

# 60. Tricky Interview Questions

These are especially useful because interviewers can use them to check
whether you actually understand backtracking.

### 1. Why do we need `path.pop()`?

Expected idea:

> Because recursion explores one branch using the current choice. After
> returning, we must restore the previous state before trying another
> branch.

------------------------------------------------------------------------

### 2. Why do we use `result.push([...path])` instead of `result.push(path)`?

Expected idea:

> `path` is mutable and reused. We need to store a snapshot of its
> current state.

------------------------------------------------------------------------

### 3. What is the difference between `backtrack(i)` and `backtrack(i + 1)`?

Expected idea:

``` text
i     → current choice can be reused
i + 1 → move past current choice
```

------------------------------------------------------------------------

### 4. Why is sorting necessary for duplicate-handling problems?

Expected idea:

> Sorting places equal values next to each other, allowing us to detect
> and skip duplicate branches efficiently.

------------------------------------------------------------------------

### 5. Why is the condition `i > start` used while skipping duplicates?

Expected idea:

> We skip duplicates only among choices made at the same recursion
> level, while still allowing valid repeated values at deeper levels.

------------------------------------------------------------------------

### 6. Combination vs permutation?

Ask:

> Does order matter?

``` text
No → Combination
Yes → Permutation
```

------------------------------------------------------------------------

### 7. Why do permutations need a `used` array?

Because at every position we can choose any element that has not already
been used in the current permutation.

------------------------------------------------------------------------

### 8. Why don't subsets usually need a `used` array?

Because the `start` index itself prevents us from going backward and
selecting previous elements again.

------------------------------------------------------------------------

### 9. What is pruning?

> Stopping a branch early when it cannot produce a valid solution.

------------------------------------------------------------------------

### 10. Why is backtracking usually exponential?

Because each level may have multiple choices, creating a large decision
tree.

------------------------------------------------------------------------

### 11. Can backtracking be iterative?

Yes, but recursion naturally represents the decision tree and is usually
much simpler.

------------------------------------------------------------------------

### 12. Is backtracking the same as DFS?

No.

DFS is a traversal strategy.

Backtracking is a search technique based on:

``` text
choose → explore → undo
```

Backtracking is commonly implemented with DFS.

------------------------------------------------------------------------

### 13. Can backtracking use BFS?

The classic backtracking pattern is depth-first because we make a
decision and explore it deeply before undoing it. BFS can solve some
search problems, but it is not the usual backtracking structure.

------------------------------------------------------------------------

### 14. When should you use backtracking?

When the problem requires exploring a set of possible
decisions/arrangements and constraints allow invalid branches to be
abandoned early.

------------------------------------------------------------------------

### 15. Can backtracking be optimized?

Yes:

``` text
Pruning
Sorting
Constraint propagation
Using Sets
Using frequency arrays
Bitmasks
Memoization where states overlap
Choosing the most constrained variable first
```

------------------------------------------------------------------------

# 61. Advanced Tricky Concepts

## 1. Same-Level vs Same-Path Duplicates

This is one of the most confusing concepts.

Suppose:

``` text
[1,1,2]
```

You usually want to avoid:

``` text
1 → ...
1 → ...
```

as duplicate sibling branches.

But after choosing the first `1`, choosing the second `1` deeper in the
path can be valid.

So:

``` text
Same level → avoid duplicate branch
Same path/deeper level → may allow it
```

------------------------------------------------------------------------

## 2. The State Must Be Restored

The recursion function assumes:

> "When I return, the state is exactly how it was before I entered."

This is the hidden contract of backtracking.

If you modify:

``` text
path
visited
board
set
counters
```

you must restore the modification before returning.

------------------------------------------------------------------------

## 3. Mutable vs Immutable State

Two approaches:

### Mutating state

``` js
path.push(x);
backtrack();
path.pop();
```

### Creating new state

``` js
backtrack([...path, x]);
```

Mutating + undoing is usually memory-efficient, but requires careful
restoration.

------------------------------------------------------------------------

# 62. A Practical Problem-Solving Workflow

When you see a new problem:

### Step 1

Write a brute-force thought:

``` text
What are all possible choices?
```

### Step 2

Draw the decision tree.

### Step 3

Identify the state.

### Step 4

Write the base case.

### Step 5

Write the choice loop.

### Step 6

Add validity checks.

### Step 7

Make the choice.

### Step 8

Recurse.

### Step 9

Undo.

### Step 10

Add pruning.

### Step 11

Calculate complexity.

This workflow is more valuable than memorizing individual solutions.

------------------------------------------------------------------------

# 63. One Formula to Remember

When confused, come back to:

``` text
              CHOOSE
                 ↓
             EXPLORE
                 ↓
               UNDO
```

In code:

``` js
makeChoice();

backtrack();

undoChoice();
```

And with pruning:

``` js
for (const choice of choices) {

    if (!isValid(choice)) {
        continue;
    }

    makeChoice(choice);

    backtrack();

    undoChoice(choice);
}
```

That is the heart of backtracking.

------------------------------------------------------------------------

# 64. Final Backtracking Cheat Sheet 🚀

``` text
BACKTRACKING
│
├── Recursion
│
├── Decision Tree
│
├── Choice
│
├── State
│
├── Base Case
│
├── Constraint Check
│
├── Pruning
│
└── Undo
```

### Subsets

``` text
2 choices:
include / exclude

or

loop + start
```

### Combinations

``` text
start index
```

### Reuse allowed

``` text
backtrack(i)
```

### Reuse not allowed

``` text
backtrack(i + 1)
```

### Permutations

``` text
used[]
```

### Duplicates

``` text
sort first
+
skip duplicate choices at same level
```

### Grid / Board

``` text
modify
→ recurse
→ restore
```

### One solution

``` text
return true
```

### All solutions

``` text
result.push(...)
```

### Main mantra

``` text
TRY
 ↓
EXPLORE
 ↓
UNDO
 ↓
TRY NEXT
```

------------------------------------------------------------------------

# 65. Final Interview Preparation Checklist

Before saying "I know Backtracking", make sure you can solve and
explain:

-   [ ] Subsets
-   [ ] Subsets II
-   [ ] Subsequences
-   [ ] Combinations
-   [ ] Combination Sum
-   [ ] Combination Sum II
-   [ ] Combination Sum III
-   [ ] Permutations
-   [ ] Permutations II
-   [ ] Generate Parentheses
-   [ ] Letter Combinations of Phone Number
-   [ ] Palindrome Partitioning
-   [ ] Word Search
-   [ ] Rat in a Maze
-   [ ] Restore IP Addresses
-   [ ] Letter Case Permutation
-   [ ] N-Queens
-   [ ] Sudoku Solver
-   [ ] Graph Coloring
-   [ ] Matchsticks to Square
-   [ ] Partition to K Equal Sum Subsets
-   [ ] Expression Add Operators
-   [ ] Word Search II
-   [ ] Remove Invalid Parentheses

And, more importantly, be able to explain:

``` text
What is my choice?
What is my state?
What is my base case?
What makes a choice invalid?
Where can I prune?
What exactly do I undo?
Why is my complexity what it is?
```

If you can answer those questions, you are not just memorizing
backtracking solutions --- **you understand the pattern.**

------------------------------------------------------------------------

# ⭐ One Last Thing

Do not try to memorize every backtracking code template.

Instead, memorize the **thinking process**:

``` text
                    PROBLEM
                       ↓
                What are my choices?
                       ↓
                 Draw decision tree
                       ↓
                  Define the state
                       ↓
                  Define base case
                       ↓
                Check constraints
                       ↓
                    CHOOSE
                       ↓
                    RECURSE
                       ↓
                     UNDO
                       ↓
                  Try next choice
```

That is the real Backtracking pattern.

> **Backtracking is basically teaching the computer: "Try this way. If
> it doesn't work, come back and try another way."**
