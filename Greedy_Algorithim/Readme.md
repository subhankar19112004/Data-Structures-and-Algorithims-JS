# Greedy Algorithms --- Complete Interview Notes

> **Core idea:** A greedy algorithm builds a solution step by step by
> choosing what looks best at the current moment, without reconsidering
> earlier choices. It aims to reach a good or optimal overall solution
> through a sequence of locally optimal choices.

## Table of Contents

1.  [What Is a Greedy Algorithm?](#what-is-a-greedy-algorithm)
2.  [Greedy Is Not a Data Structure](#greedy-is-not-a-data-structure)
3.  [The Intuition Behind Greedy](#the-intuition-behind-greedy)
4.  [Example 1: Coin Change](#example-1-coin-change)
5.  [Example 2: Fractional Knapsack](#example-2-fractional-knapsack)
6.  [When Does Greedy Work?](#when-does-greedy-work)
7.  [Greedy vs. Other Approaches](#greedy-vs-other-approaches)
8.  [Common Greedy Problem Patterns](#common-greedy-problem-patterns)
9.  [Hints That a Problem May Need
    Greedy](#hints-that-a-problem-may-need-greedy)
10. [A Practical Greedy Problem-Solving
    Checklist](#a-practical-greedy-problem-solving-checklist)
11. [Common Mistakes and Traps](#common-mistakes-and-traps)
12. [Interview Questions to Practise](#interview-questions-to-practise)
13. [Final Takeaways](#final-takeaways)

------------------------------------------------------------------------

## What Is a Greedy Algorithm?

A **greedy algorithm** is an algorithmic problem-solving strategy that
constructs a solution incrementally. At each step, it selects the option
that appears most beneficial according to a chosen rule, commits to that
choice, and continues until the solution is complete.

The important words are:

-   **Local optimum:** The best-looking choice at the current step.
-   **Global optimum:** The best possible solution across the entire
    problem.
-   **Greedy choice:** The locally best option selected by the
    algorithm.
-   **Commitment:** A choice is generally not undone later.

The goal is for a sequence of locally optimal choices to produce a
globally optimal solution. However, **a greedy choice does not
automatically guarantee an optimal answer**. The problem must have the
right mathematical properties for the strategy to work.

### Simple intuition

Imagine you are choosing tasks to finish before a deadline. If the
objective is to complete as many non-overlapping tasks as possible,
choosing the task that finishes earliest can leave more time for later
tasks. This is a greedy rule that works for the classic
activity-selection problem.

But choosing the task that looks easiest, pays the most, or takes the
least time is not automatically optimal. The choice rule must match the
problem's objective.

## Greedy Is Not a Data Structure

A **data structure** is a way to organize and store data so it can be
accessed or modified efficiently. Examples include:

-   Arrays
-   Linked lists
-   Stacks and queues
-   Hash maps and sets
-   Heaps
-   Trees and graphs

A **greedy algorithm is an algorithmic strategy**, not a data structure.
It describes how decisions are made while solving a problem.

A greedy solution may use a data structure to make its decisions
efficiently. For example:

-   A sorting algorithm can arrange activities by finishing time before
    a greedy selection process.
-   A priority queue can repeatedly expose the smallest or largest
    available item.
-   A graph representation can store the edges considered by a
    minimum-spanning-tree algorithm.

Remember this distinction:

> **Data structures organize the data; greedy strategy determines which
> choice to make next.**

Greedy is also not one particular algorithm. It is a family of
approaches that share the idea of making locally optimal choices.

## The Intuition Behind Greedy

Most greedy problems can be understood through four questions:

1.  **What am I optimizing?** For example, minimize the number of coins,
    maximize total value, or maximize the number of activities.
2.  **What choices are available at each step?** These are the possible
    next decisions.
3.  **What is the greedy rule?** For example, choose the largest usable
    coin, the activity that finishes earliest, or the item with the best
    value-to-weight ratio.
4.  **Why is that rule safe?** Explain why taking that choice can still
    lead to an optimal solution.

The fourth question is the most important. A convincing-looking rule is
only a hypothesis until you can justify it.

### Two properties that often justify greedy

#### 1. Greedy-choice property

There exists an optimal solution that begins with the greedy choice. In
other words, choosing the locally best option does not prevent the
existence of an optimal overall solution.

#### 2. Optimal substructure

After making a valid choice, the remaining part of the problem can be
solved optimally as a smaller problem of the same kind.

These properties are useful ways to reason about greedy algorithms. They
are not a shortcut that proves every proposed greedy rule correct; a
specific problem still needs a valid argument.

------------------------------------------------------------------------

## Example 1: Coin Change

### Problem statement

You are given coin denominations and a target amount. Choose coins whose
values add up to the target amount while using the **minimum possible
number of coins**.

For example, suppose the available denominations are:

`[1, 5, 10, 25]`

The target amount is `63`.

### Greedy intuition

A natural rule is:

> **At each step, choose the largest coin denomination that does not
> exceed the remaining amount.**

For the example:

  -----------------------------------------------------------------------
  Step             Remaining amount        Coin chosen   Remaining amount
                      before choice                          after choice
  -------------- ------------------ ------------------ ------------------
  1                              63                 25                 38

  2                              38                 25                 13

  3                              13                 10                  3

  4                               3                  1                  2

  5                               2                  1                  1

  6                               1                  1                  0
  -----------------------------------------------------------------------

The selected coins are `25 + 25 + 10 + 1 + 1 + 1 = 63`, using **6
coins**.

This example demonstrates the greedy decision process. It does not
establish that the rule is optimal for every coin system.

### Important limitation: Greedy does not always work for coin change

Suppose the available denominations are:

`[1, 3, 4]`

The target amount is `6`.

Using the largest coin first:

-   Choose `4`; remaining amount is `2`.
-   Choose `1`; remaining amount is `1`.
-   Choose `1`; remaining amount is `0`.

Greedy uses **3 coins**: `4 + 1 + 1`.

But the optimal solution is **2 coins**: `3 + 3`.

Therefore, the largest-coin-first strategy is not universally optimal.
It works for certain coin systems, including common canonical systems,
but arbitrary denominations can require a different approach, such as
dynamic programming.

### What should you learn from this example?

-   A greedy rule must be defined clearly.
-   The choice that seems largest or most valuable is not always
    globally best.
-   Test your rule against small counterexamples.
-   If greedy fails, dynamic programming may be appropriate when you
    need to compare alternative combinations and reuse results.

**Interview takeaway:** When asked to solve coin change, first clarify
whether the objective is minimum coins, maximum coins, counting
combinations, or determining whether an amount is reachable. Also check
whether the coin denominations guarantee that a greedy strategy is
valid.

------------------------------------------------------------------------

## Example 2: Knapsack --- Selecting the Most Valuable Items

### Problem statement

Imagine you are robbing a jewellery store. You have a knapsack that can
carry only a limited total weight. Each item has:

-   A **weight**
-   A **value**

You want to maximize the total value of the items placed in the knapsack
without exceeding its weight capacity.

For example:

  Item         Weight   Value   Value per unit of weight
  ---------- -------- ------- --------------------------
  Necklace         10      60                          6
  Ring             20     100                          5
  Bracelet         30     120                          4

Suppose the knapsack capacity is `50`.

The objective is to obtain the highest possible total value without
exceeding weight `50`.

### Why "choose the most valuable item first" can be wrong

The necklace has value `60`, the ring has value `100`, and the bracelet
has value `120`.

Choosing the item with the highest total value first sounds reasonable,
but the bracelet weighs `30`. The best decision depends on how value
relates to weight and on whether items can be divided.

For the classic **fractional knapsack** problem, a useful greedy rule
is:

> **Choose items in descending order of value per unit of weight. If the
> next item does not fit completely, take only the fraction that fits.**

In the example, the value-per-weight ratios are:

-   Necklace: `60 / 10 = 6`
-   Ring: `100 / 20 = 5`
-   Bracelet: `120 / 30 = 4`

Taking the necklace and ring uses weight `30` and gives value `160`. The
remaining capacity is `20`, so you can take `20/30` of the bracelet,
adding value `80`.

Total:

-   Weight used: `10 + 20 + 20 = 50`
-   Value obtained: `60 + 100 + 80 = 240`

For fractional knapsack, this greedy strategy is optimal.

### The critical distinction: Fractional vs. 0/1 knapsack

#### Fractional knapsack

You may take a fraction of an item. For example, you can take half a
bracelet if the weight and value scale proportionally.

-   Greedy by value-to-weight ratio is optimal.
-   Items can be partially selected.
-   Sorting by ratio helps determine the selection order.

#### 0/1 knapsack

Each item must be taken completely or not taken at all. You cannot take
half a necklace or a fraction of a ring.

-   Greedy by value, weight, or value-to-weight ratio is **not
    guaranteed** to be optimal.
-   Dynamic programming is a standard solution when the capacity is a
    manageable integer.
-   Other methods, such as branch and bound or approximation algorithms,
    may be appropriate depending on the constraints.

### Why the distinction matters

For 0/1 knapsack with capacity `50`, the ring and bracelet together
weigh `20 + 30 = 50` and give value `220`. That is better than taking
the necklace and ring, which gives value `160`, or the fractional
solution is not allowed at all.

The fractional solution achieves `240` only because taking part of the
bracelet is permitted.

**Interview takeaway:** Always ask whether items can be divided.
Fractional knapsack is a classic greedy problem; 0/1 knapsack is a
classic example where a simple greedy rule does not generally guarantee
the optimal answer.

------------------------------------------------------------------------

## When Does Greedy Work?

Greedy works when the choice rule is valid for the problem and can be
shown to preserve an optimal solution.

Common ways to establish correctness include:

### 1. Exchange argument

Show that if an optimal solution does not make the greedy choice, you
can replace its first choice with the greedy choice without making the
solution worse. Repeating this reasoning supports the greedy strategy.

### 2. Stays-ahead argument

Show that after each step, the greedy solution is at least as good as
any competing solution according to a useful measure. This is often used
for scheduling and interval problems.

### 3. Cut property for minimum spanning trees

In a graph, the cut property helps justify why a minimum-weight edge
crossing a suitable cut can safely be selected. This is central to
algorithms such as Prim's and Kruskal's.

### 4. A proven structural rule

Some problems have a known greedy rule---for example, selecting the
activity that finishes earliest in the classic activity-selection
problem. You still need to understand the assumptions under which the
rule is valid.

**Do not confuse a locally appealing decision with a proof.** Testing
examples is useful for finding mistakes, but passing a few examples does
not prove correctness.

------------------------------------------------------------------------

## Greedy vs. Other Approaches

  -----------------------------------------------------------------------
  Approach                Main idea               Typical use
  ----------------------- ----------------------- -----------------------
  Greedy                  Make a locally optimal  Activity selection,
                          choice and commit       fractional knapsack,
                                                  some graph algorithms

  Brute force             Enumerate possible      Small search spaces;
                          solutions               establishing a baseline

  Dynamic programming     Solve overlapping       0/1 knapsack, many
                          subproblems and combine coin-change variants
                          their results           

  Backtracking            Explore choices and     Subsets, permutations,
                          undo them when a path   constraint problems
                          cannot work             

  Divide and conquer      Split a problem into    Merge sort, binary
                          smaller parts and       search
                          combine results         

  Binary search on answer Search for the best     Capacity, allocation,
                          feasible value using a  and optimization
                          monotonic condition     problems with monotonic
                                                  feasibility
  -----------------------------------------------------------------------

A greedy approach is often simpler and faster than dynamic programming,
but only when its choices can be justified. Do not choose greedy merely
because it uses less code.

------------------------------------------------------------------------

## Common Greedy Problem Patterns

The following are common areas where greedy reasoning appears. Each
problem still requires the correct choice rule and proof.

### 1. Interval and activity scheduling

**Goal:** Select a maximum number of compatible activities or intervals.

Typical greedy rule for classic activity selection:

-   Sort by finishing time.
-   Select the activity that finishes earliest among those currently
    compatible.
-   Continue with the remaining compatible activities.

Examples: - Activity Selection - Non-overlapping Intervals - Minimum
Number of Arrows to Burst Balloons

### 2. Sorting followed by selection

Sometimes the key insight is to sort items by a meaningful property,
then scan and make safe choices.

Possible sorting keys: - Finishing time - Start time - Cost - Deadline -
Value-to-weight ratio - Difference or ratio between two quantities

Examples: - Assign Cookies - Minimum Number of Platforms (with a
suitable interval-based approach) - Job Sequencing with Deadlines

### 3. Resource allocation and matching

**Goal:** Assign limited resources to requests while maximizing the
number or quality of successful assignments.

Examples: - Assign Cookies - Matching tasks to workers under simple
constraints - Pairing problems where sorted order enables safe matching

### 4. Minimum-cost construction and merging

**Goal:** Repeatedly combine or connect elements at minimum cost.

Typical rule: - Repeatedly choose the two smallest available values when
the problem's structure supports this rule.

Examples: - Connect Ropes with Minimum Cost - Huffman Coding

A min-heap is often useful to efficiently retrieve the two smallest
values.

### 5. Graph algorithms

Greedy choices are fundamental to several graph algorithms.

Examples: - Kruskal's Minimum Spanning Tree - Prim's Minimum Spanning
Tree - Dijkstra's Shortest Path Algorithm, when edge weights are
non-negative

Important: Dijkstra's algorithm is not valid for general graphs with
negative edge weights. The correctness of each graph algorithm depends
on its assumptions.

### 6. Deadline and profit optimization

**Goal:** Schedule work under deadlines while maximizing profit or
completed tasks.

Examples: - Job Sequencing with Deadlines - Maximum Units on a Truck

The correct rule depends on the constraints. For job sequencing, sorting
by profit alone is not the complete strategy; placement within available
deadline slots matters too.

### 7. Greedy string and sequence construction

Some problems ask you to construct the best sequence by repeatedly
choosing the best currently valid character or element.

Examples: - Remove K Digits - Partition Labels - Reorganize String
(often combines greedy reasoning with a heap)

These problems may need a stack, heap, or other structure to support the
greedy strategy.

### 8. Reachability and jump problems

Some array problems can be solved by maintaining the farthest reachable
position or the current range of positions reachable with a limited
number of jumps.

Examples: - Jump Game - Jump Game II

The invariant---what the algorithm knows after each step---is more
important than simply choosing the largest number.

### 9. Coin and change-making problems

Greedy may work for particular coin systems, but arbitrary denominations
can defeat the largest-coin-first rule.

Always distinguish: - Minimum number of coins - Number of ways to make
an amount - Whether an amount can be formed - Whether the denomination
system is known to support greedy choices

------------------------------------------------------------------------

## Hints That a Problem May Need Greedy

These clues suggest investigating a greedy solution; they do not prove
one exists.

### Hint 1: You must maximize or minimize something

Look for objectives such as: - Maximum number of activities - Minimum
cost - Maximum profit - Minimum number of operations - Maximum value
within a capacity - Earliest completion or smallest resource use

Optimization problems are common places to look for greedy strategies,
but dynamic programming and other methods also solve optimization
problems.

### Hint 2: The problem asks you to choose repeatedly

If you can build the answer one decision at a time, ask whether the best
current choice can be made safely.

### Hint 3: A sorting order reveals the decision rule

If sorting by end time, cost, ratio, or deadline makes the process
straightforward, greedy may be a good candidate.

Ask: **Why this sorting key?** You should be able to connect it to the
objective and correctness argument.

### Hint 4: Choosing one option reduces the remaining problem

A decision may consume capacity, use a time slot, cover a range, or
remove an element. If the remaining problem retains the same useful
structure, greedy may be possible.

### Hint 5: You do not need to reconsider earlier choices

Greedy algorithms usually commit to choices. If a solution must
frequently undo earlier decisions to discover the answer, backtracking
or dynamic programming may be more suitable.

### Hint 6: There is a "safe choice" argument

You can explain why an optimal solution can be transformed to include
your proposed choice without becoming worse. This is one of the
strongest signs of a valid greedy strategy.

### Hint 7: The constraints suggest a linear or sorting-based solution

A problem with a large input may motivate looking for an `O(n)` or
`O(n log n)` strategy. This is only a performance clue---not evidence
that greedy is correct.

### A warning about common keywords

Words such as **maximum**, **minimum**, **best**, **largest**, and
**smallest** do not automatically mean greedy. Many dynamic programming
and graph problems use the same language.

------------------------------------------------------------------------

## A Practical Greedy Problem-Solving Checklist

Use this checklist during practice and interviews:

1.  **Define the objective.** What exactly must be minimized or
    maximized?
2.  **Identify the available choices.** What can be selected at each
    step?
3.  **Propose a greedy rule.** State it in one clear sentence.
4.  **Explain why it should work.** Use an exchange argument,
    stays-ahead argument, or another valid proof.
5.  **Test edge cases.** Try the smallest inputs, ties, duplicates,
    impossible cases, and counterexamples.
6.  **Check the assumptions.** Can items be divided? Are weights
    non-negative? Are intervals inclusive or exclusive? Are deadlines
    feasible?
7.  **Choose supporting data structures.** Sorting, a heap, a stack, or
    a set may help implement the strategy.
8.  **Analyze complexity.** Include sorting and data-structure
    operations, not only the final scan.
9.  **Compare alternatives.** If you cannot justify the greedy rule,
    consider dynamic programming, graph algorithms, or exhaustive search
    for small cases.
10. **State the limitation.** Explain when the rule is valid and when it
    fails.

### Complexity patterns to recognize

-   One pass after the input is ready: often `O(n)`
-   Sorting followed by a scan: often `O(n log n)`
-   Repeated minimum/maximum extraction with a heap: often `O(n log n)`
    overall, depending on the number of heap operations
-   Sorting plus a data structure such as a disjoint-set union: often
    close to `O(n log n)` for common graph applications

Space complexity depends on whether you copy data, use auxiliary arrays,
or maintain a heap or other structure.

------------------------------------------------------------------------

## Common Mistakes and Traps

1.  **Assuming greedy always gives the optimal answer.** It does not.
2.  **Choosing the largest value by default.** A large item may consume
    too much capacity or block better combinations.
3.  **Confusing fractional and 0/1 knapsack.** The ability to split
    items changes the problem.
4.  **Assuming largest-coin-first always minimizes coins.**
    Counterexamples exist.
5.  **Sorting by the wrong property.** The most intuitive sorting key
    may not preserve optimality.
6.  **Ignoring edge cases.** Empty input, equal values, duplicate
    intervals, and impossible targets can expose incorrect reasoning.
7.  **Proving with examples only.** Examples help test a rule but do not
    establish correctness.
8.  **Ignoring constraints.** A rule may depend on non-negative weights,
    non-negative edge costs, or a particular interval definition.
9.  **Forgetting the supporting data structure's cost.** A heap
    operation is not constant time, and sorting costs time.
10. **Using greedy when decisions interact globally.** If a choice can
    block a better combination, dynamic programming or another method
    may be necessary.

------------------------------------------------------------------------

## Interview Questions to Practise

These are useful questions for learning greedy intuition and preparing
for coding interviews. Solve them in order of difficulty, and for every
problem explain the greedy rule, why it is correct, and its complexity.

### Beginner: Build the intuition

1.  **Assign Cookies** --- How can sorting help maximize the number of
    satisfied children?
2.  **Lemonade Change** --- Why should you preserve certain
    denominations when giving change?
3.  **Best Time to Buy and Sell Stock II** --- Which positive price
    changes can contribute to the maximum profit?
4.  **Can Place Flowers** --- How can you place flowers without
    violating the adjacency rule?
5.  **Maximum Units on a Truck** --- Which box types should be loaded
    first, and why?
6.  **Minimum Cost to Connect Ropes** --- Why is repeatedly combining
    the two smallest ropes optimal?
7.  **Valid Parenthesis String** --- How can bounds on possible open
    parentheses help determine validity?

### Intermediate: Sorting and intervals

8.  **Activity Selection** --- Why does selecting the activity that
    finishes earliest maximize the number of compatible activities?
9.  **Non-overlapping Intervals** --- How can you remove the minimum
    number of intervals to eliminate overlaps?
10. **Minimum Number of Arrows to Burst Balloons** --- How can interval
    endpoints guide the greedy choice?
11. **Partition Labels** --- How can last-occurrence positions determine
    safe partition boundaries?
12. **Jump Game** --- How can the farthest reachable index determine
    whether the final index is reachable?
13. **Jump Game II** --- How can reachable ranges be used to minimize
    the number of jumps?
14. **Gas Station** --- Under what reasoning can you identify a valid
    starting station?
15. **Remove K Digits** --- Why can removing a larger preceding digit
    produce a smaller number?
16. **Task Scheduler** --- How do task frequencies and cooldown
    constraints influence the minimum schedule length?
17. **Job Sequencing with Deadlines** --- How do you maximize profit
    while assigning jobs to available time slots?

### Advanced: Proofs, heaps, and graphs

18. **Fractional Knapsack** --- Why is sorting by value-to-weight ratio
    optimal when items can be divided?
19. **Huffman Coding** --- Why should the two least-frequent nodes be
    combined first?
20. **Minimum Spanning Tree: Kruskal's Algorithm** --- Why can edges be
    processed in ascending weight while avoiding cycles?
21. **Minimum Spanning Tree: Prim's Algorithm** --- Why is it safe to
    repeatedly add a minimum-weight edge crossing the current tree's
    cut?
22. **Dijkstra's Algorithm** --- Why does finalizing the smallest
    tentative distance work only when edge weights are non-negative?
23. **Reorganize String** --- How can a greedy strategy with a max-heap
    avoid placing equal characters together?
24. **Candy** --- How can left-to-right and right-to-left constraints be
    combined to minimize candies?
25. **Minimum Number of Refueling Stops** --- Why can selecting the
    largest previously reachable fuel supply be optimal?

### Conceptual interview questions

26. What is a greedy algorithm, and how is it different from a data
    structure?
27. What is the difference between a local optimum and a global optimum?
28. What are the greedy-choice property and optimal substructure?
29. How would you prove a greedy algorithm correct?
30. What is an exchange argument? Give an example.
31. Why does greedy fail for some coin-change systems?
32. What is the difference between fractional knapsack and 0/1 knapsack?
33. When should you prefer dynamic programming over greedy?
34. Can sorting be part of a greedy algorithm? Why?
35. How do you construct a counterexample to test a greedy rule?
36. What is the role of a heap in greedy algorithms?
37. How do you analyze the time and space complexity of a greedy
    solution?
38. Is Dijkstra's algorithm greedy? What assumption does it require?
39. Does every optimization problem have a greedy solution? Explain.
40. How would you justify a greedy decision to an interviewer before
    writing code?

### How to practise each question

For every problem, write down these five things before coding:

-   **Objective:** What must be maximized or minimized?
-   **Greedy rule:** What choice will be made at each step?
-   **Correctness intuition:** Why is the choice safe?
-   **Counterexample check:** What input might make the rule fail?
-   **Complexity:** What are the time and auxiliary-space costs?

The goal is not just to recognize a familiar problem. It is to learn how
to discover and justify the decision rule.

------------------------------------------------------------------------

## Final Takeaways

-   **Greedy is an algorithmic strategy, not a data structure.**
-   It makes a locally optimal choice at each step and generally does
    not revisit earlier choices.
-   A locally optimal choice is useful only when the problem's structure
    makes it safe.
-   Coin change is greedy only for suitable denomination systems;
    largest-coin-first can fail.
-   Fractional knapsack is solved optimally by choosing items in
    descending value-to-weight ratio.
-   The same ratio-based rule does not guarantee an optimal solution for
    0/1 knapsack.
-   Sorting, heaps, stacks, and graph structures can support greedy
    decisions.
-   A convincing proof matters more than a rule that happens to pass
    sample inputs.
-   When greedy cannot be justified, investigate dynamic programming,
    backtracking, or another suitable technique.

> **The interview mindset:** Don't ask only, "What is the best choice
> right now?" Ask, "Why can I make this choice now without losing the
> possibility of an optimal final answer?"
