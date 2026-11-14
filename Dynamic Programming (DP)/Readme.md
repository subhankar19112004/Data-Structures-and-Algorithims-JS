# Dynamic Programming (DP)

> **Dynamic Programming is not a data structure. It is an algorithmic
> optimization technique.**\
> It helps solve problems by breaking them into smaller subproblems,
> solving each distinct subproblem once, and reusing the result instead
> of repeatedly doing the same work.

Dynamic Programming (DP) is one of the most important problem-solving
techniques in Data Structures and Algorithms (DSA). It often turns an
exponential-time recursive solution into a much more efficient solution
by avoiding repeated computation.

------------------------------------------------------------------------

## 1. What Is Dynamic Programming?

Dynamic Programming is a method for solving a problem by:

1.  Identifying smaller subproblems that contribute to the original
    problem.
2.  Solving each distinct subproblem.
3.  Storing its result.
4.  Reusing that result whenever the same subproblem appears again.

The central idea is simple:

**Do not solve the same subproblem repeatedly. Compute it once and
remember the result.**

DP is especially useful when a problem has *overlapping subproblems* and
*optimal substructure*.

### Is DP a data structure?

No. DP is **not** a data structure like an array, stack, queue, linked
list, tree, graph, or hash map.

It is an **algorithmic technique**. Arrays, objects, maps, or other
structures may be used to store previously computed results, but those
structures are only the storage mechanism---not Dynamic Programming
itself.

### Is there anything "dynamic" about it?

The word *dynamic* can be misleading. In many DP problems, nothing is
dynamically changing in the everyday sense of the word. The name is
historical; it does not mean that DP is a special kind of dynamic data
structure.

The important idea is **systematically managing and reusing the results
of subproblems**.

------------------------------------------------------------------------

## 2. A Short History: Where Did the Name Come From?

Dynamic Programming is commonly associated with the American
mathematician and systems analyst **Richard Bellman**, who developed the
approach during the 1950s while working on problems involving sequential
decision-making and optimization.

Bellman used the term *Dynamic Programming* in the 1950s. The name was
not chosen because the method necessarily involved something changing
dynamically.

In accounts of the naming, Bellman described choosing the word *dynamic*
partly because it sounded suitably impressive and conveyed a sense of a
multistage process. He also wanted terminology that would be acceptable
in the political and administrative environment in which he was working.
The word *programming* was used in the older sense of **planning or
scheduling**, not specifically writing computer code.

So, in this context:

-   **Dynamic** does not mean that DP is a dynamic data structure.
-   **Programming** does not mean that the technique is a programming
    language or a coding feature.
-   The name reflects the historical context in which the mathematical
    optimization method was developed.

> **Remember:** Dynamic Programming is fundamentally about solving a
> problem through structured subproblems and reusing their results---not
> about the literal meaning of the two words in its name.

------------------------------------------------------------------------

## 3. DP as an Optimization of Recursion

Recursion is a natural way to express a problem in terms of smaller
versions of itself. However, a straightforward recursive solution can
become inefficient when it repeatedly solves the same subproblems.

Dynamic Programming builds on this recursive problem-solving idea.

### The progression

``` text
Recursive thinking
       |
       v
Identify repeated subproblems
       |
       v
Store computed results
       |
       v
Reuse results instead of recomputing
       |
       v
Dynamic Programming
```

A plain recursive solution may explore the same work many times. DP
avoids that repeated work by remembering results.

**Important distinction:** DP is not simply a more advanced version of
every recursive algorithm. It is useful when the problem has the right
structure---particularly overlapping subproblems and optimal
substructure. Some recursive problems do not benefit from DP.

------------------------------------------------------------------------

## 4. The Two Fundamental Properties of DP

A problem is a strong candidate for Dynamic Programming when it exhibits
the following properties.

### 4.1 Overlapping Subproblems

A problem has **overlapping subproblems** when the recursive process
solves the same smaller subproblems multiple times.

For example, consider the Fibonacci recurrence:

\[ F(n) = F(n-1) + F(n-2) \]

A recursive call for a larger Fibonacci number branches into smaller
calls. Those branches eventually request some of the same Fibonacci
values again.

Conceptually:

``` text
                 F(5)
               /      \
            F(4)       F(3)
           /   \       /  \
        F(3)  F(2)   F(2) F(1)
        /  \
      F(2) F(1)
```

Notice that `F(3)` and `F(2)` appear more than once. A plain recursive
implementation recomputes them.

With DP, each required value can be computed once and stored for reuse.

**Key takeaway:** If the same subproblem appears repeatedly, storing its
answer can eliminate redundant computation.

### 4.2 Optimal Substructure

A problem has **optimal substructure** when an optimal solution to the
original problem can be constructed using optimal solutions to its
relevant subproblems.

In simpler terms:

**The best solution to a bigger problem can be built from the best
solutions to smaller problems.**

This property is especially important in optimization problems, such as
finding a minimum cost, maximum profit, shortest path, or maximum value
under constraints.

For example, a shortest-path problem may be decomposed into smaller path
decisions. Under the problem's conditions, an optimal route can be
formed from optimal subpaths.

**Key takeaway:** The smaller subproblems must contribute correctly to
the optimal solution of the larger problem.

### Overlapping Subproblems vs. Optimal Substructure

  -----------------------------------------------------------------------
  Property                            Meaning
  ----------------------------------- -----------------------------------
  Overlapping Subproblems             The same subproblems are
                                      encountered repeatedly.

  Optimal Substructure                An optimal overall solution can be
                                      built from optimal solutions to
                                      smaller subproblems.
  -----------------------------------------------------------------------

These properties are related, but they are **not the same thing**. A
problem may have optimal substructure without having the kind of
overlapping subproblems that makes DP useful.

------------------------------------------------------------------------

## 5. Two Main Approaches to Dynamic Programming

DP is commonly implemented using two approaches.

### 5.1 Memoization (Top-Down)

Memoization starts with a recursive solution and stores the result of
each subproblem, commonly in an array, object, or map.

-   Usually follows a recursive, top-down flow.
-   Computes subproblems when they are needed.
-   Checks stored results before solving a subproblem again.
-   Can be easier to derive when the recurrence is naturally recursive.

**Think:** Recursion + cache.

### 5.2 Tabulation (Bottom-Up)

Tabulation solves the smaller subproblems first and uses their results
to build solutions to larger subproblems.

-   Usually uses iteration rather than recursive calls.
-   Starts from known base cases.
-   Fills a DP table in a valid dependency order.
-   Avoids recursion call-stack overhead.

**Think:** Start with the smallest cases and build upward.

### Memoization vs. Tabulation

  -----------------------------------------------------------------------
  Memoization                         Tabulation
  ----------------------------------- -----------------------------------
  Top-down                            Bottom-up

  Usually recursive                   Usually iterative

  Computes states as needed           Fills states in an order

  Uses a cache                        Uses a DP table or equivalent
                                      storage

  Has recursion call-stack overhead   Avoids recursive call-stack
                                      overhead
  -----------------------------------------------------------------------

Neither approach is automatically better in every problem. Choose based
on the recurrence, state dependencies, constraints, and implementation
trade-offs.

------------------------------------------------------------------------

## 6. How to Recognize a DP Problem

Look for signals such as:

-   The problem asks for a **minimum**, **maximum**, **number of ways**,
    or **best possible result**.
-   A decision at one stage affects the remaining problem.
-   The problem can be expressed in terms of smaller states or choices.
-   A recursive solution repeats the same states.
-   The answer can be built from answers to smaller subproblems.

These are clues---not proof. Always verify the recurrence and the two
core properties before choosing DP.

------------------------------------------------------------------------

## 7. A Practical Framework for Approaching DP

When solving a DP problem, work through these questions:

1.  **State:** What does `dp[i]`, `dp[i][j]`, or another state
    represent?
2.  **Choice / transition:** What decisions can be made from the current
    state?
3.  **Recurrence:** How does the current answer depend on smaller
    states?
4.  **Base cases:** What are the smallest states whose answers are
    already known?
5.  **Evaluation order:** In what order can the dependent states be
    computed?
6.  **Final answer:** Which state represents the answer to the original
    problem?
7.  **Complexity:** How many states exist, and how much work is
    performed per state?

A useful complexity estimate is:

\[ `\text{Time Complexity}`{=tex} `\approx`{=tex}
`\text{Number of States}`{=tex} `\times`{=tex}
`\text{Work per State}`{=tex} \]

Space complexity depends on how many state results must be retained.
Some problems also allow space optimization when older states are no
longer needed.

------------------------------------------------------------------------

## 8. Common DP Patterns and Problem Categories

As you progress, you will encounter recurring DP patterns. Learning to
recognize these patterns is more valuable than memorizing isolated
solutions.

-   **1D DP:** A state commonly depends on one index or a small number
    of previous states.
-   **Grid DP:** States represent positions in a matrix or grid.
-   **Knapsack DP:** Select or skip items under capacity or resource
    constraints.
-   **Subsequence DP:** Find an optimal or counted subsequence
    satisfying given rules.
-   **String DP:** Compare, transform, or match strings using states
    over their indices.
-   **Partition DP:** Divide an input into groups or segments while
    optimizing a result.
-   **Interval DP:** Solve problems over ranges or intervals.
-   **Tree DP:** Combine information from child subtrees.
-   **Bitmask DP:** Represent a set of selected elements using bitmasks.
-   **DP on DAGs / Graphs:** Compute states according to graph
    dependencies.
-   **State-machine DP:** Track a limited set of conditions or states
    across steps.

------------------------------------------------------------------------

## 9. Dynamic Programming Practice Questions

The following questions are practice targets, not solutions. Try to
identify the state, recurrence, base cases, and whether memoization or
tabulation is suitable before coding.

### Beginner

1.  [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2.  [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
3.  [Min Cost Climbing
    Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
4.  [N-th Tribonacci
    Number](https://leetcode.com/problems/n-th-tribonacci-number/)
5.  [House Robber](https://leetcode.com/problems/house-robber/)
6.  [Divisor Game](https://leetcode.com/problems/divisor-game/)

### Easy to Medium

7.  [House Robber II](https://leetcode.com/problems/house-robber-ii/)
8.  [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
9.  [Unique Paths](https://leetcode.com/problems/unique-paths/)
10. [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
11. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
12. [Triangle](https://leetcode.com/problems/triangle/)
13. [Decode Ways](https://leetcode.com/problems/decode-ways/)
14. [Coin Change](https://leetcode.com/problems/coin-change/)
15. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)

### Medium to Advanced

16. [Longest Increasing
    Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
17. [Longest Common
    Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
18. [Longest Palindromic
    Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
19. [Edit Distance](https://leetcode.com/problems/edit-distance/)
20. [Word Break](https://leetcode.com/problems/word-break/)
21. [Partition Equal Subset
    Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
22. [Target Sum](https://leetcode.com/problems/target-sum/)
23. [Best Time to Buy and Sell Stock with
    Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
24. [Best Time to Buy and Sell Stock
    III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
25. [Partition Array for Maximum
    Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/)
26. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
27. [Regular Expression
    Matching](https://leetcode.com/problems/regular-expression-matching/)
28. [Distinct
    Subsequences](https://leetcode.com/problems/distinct-subsequences/)
29. [Maximum Profit in Job
    Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
30. [Minimum Difficulty of a Job
    Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)

### Advanced Challenge

31. [Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
32. [Shortest Path Visiting All
    Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
33. [Number of Ways to Form a Target String Given a
    Dictionary](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)
34. [Minimum Cost to Merge
    Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
35. [Profitable
    Schemes](https://leetcode.com/problems/profitable-schemes/)

------------------------------------------------------------------------

## 10. Why Dynamic Programming Matters in Interviews

Dynamic Programming is one of the most valuable DSA topics for technical
interviews because it tests much more than the ability to write code.

A DP problem often evaluates whether you can:

-   Break a complex problem into smaller, well-defined states.
-   Discover a recurrence relation.
-   Recognize repeated computation.
-   Prove or reason about optimal substructure.
-   Choose between memoization and tabulation.
-   Analyze time and space complexity.
-   Optimize a solution without losing correctness.

DP appears in interviews across product companies, technology companies,
and competitive programming assessments. The exact frequency and
difficulty vary by company, role, and interview level, but a strong DP
foundation gives you a meaningful advantage when these problems appear.

### What interviewers are really testing

They are not merely checking whether you remember a standard DP
template. They want to see how you think:

1.  Can you first derive a correct recursive solution?
2.  Can you identify repeated states?
3.  Can you define a meaningful DP state?
4.  Can you write the transition logically?
5.  Can you handle edge cases and constraints?
6.  Can you improve time or space complexity when possible?

**The real skill is not memorizing 100 DP solutions. It is learning to
recognize the structure behind an unfamiliar problem.**

------------------------------------------------------------------------

## 11. Common Mistakes to Avoid

-   Starting with a DP table before understanding the recurrence.
-   Defining a state without clearly explaining what it represents.
-   Forgetting base cases.
-   Using an incorrect transition or evaluation order.
-   Confusing overlapping subproblems with optimal substructure.
-   Assuming every recursive problem should be converted into DP.
-   Ignoring constraints, integer overflow, or impossible states.
-   Optimizing space before the basic solution is correct.
-   Memorizing patterns without understanding why they work.

------------------------------------------------------------------------

## 12. Recommended Learning Order

A structured progression can make DP much less intimidating:

1.  Strengthen recursion and recursion-tree analysis.
2.  Understand overlapping subproblems through simple recursive
    examples.
3.  Learn memoization (top-down).
4.  Convert memoized solutions into tabulation (bottom-up).
5.  Practice 1D DP.
6.  Move to grid and two-dimensional DP.
7.  Study subsequence and string DP.
8.  Learn knapsack and partition patterns.
9.  Progress to interval, tree, bitmask, and state-machine DP.
10. Practice mixed interview problems without being told the pattern.

Do not rush to advanced problems. A clear understanding of state
definition and transitions is the foundation for everything that
follows.

------------------------------------------------------------------------

## 13. Final Takeaway

Dynamic Programming may look intimidating at first, but its central
principle is remarkably practical:

> **Solve each distinct subproblem once, store its result, and reuse it
> wherever needed.**

It is not a data structure. It is not magic. It is not about the literal
meaning of the word *dynamic*. It is a powerful optimization technique
built around structured problem decomposition and avoiding repeated
work.

Recursion teaches you how to break a problem down. Dynamic Programming
teaches you how to do that efficiently when subproblems overlap.

**Master DP, and you develop a way of thinking---not just another DSA
topic.**

------------------------------------------------------------------------

### Keep Practicing

-   Be patient with state definitions.
-   Write the recurrence before writing the code.
-   Trace small examples by hand.
-   Implement both memoization and tabulation where appropriate.
-   Revisit problems after a few days and solve them without looking at
    old code.

**One problem at a time. One state at a time. Build the DP mindset.**


---

## References

- Stuart Dreyfus, [“Richard Bellman on the Birth of Dynamic Programming”](https://pubsonline.informs.org/doi/pdf/10.1287/opre.50.1.48.17791), *Operations Research*, 2002. This article reproduces Bellman's account of the early development and naming of Dynamic Programming.
- Adam B. Levy, [“The Basics of Practical Optimization, Chapter 11: Dynamic Programming”](https://epubs.siam.org/doi/10.1137/1.9781611977370.ch11), Society for Industrial and Applied Mathematics. Background on DP's origins in multistage decision processes and optimization.
- Richard Bellman, [*Dynamic Programming* (1957)](https://mathshistory.st-andrews.ac.uk/Extras/Bellman_books/), historical book reference and preface.

