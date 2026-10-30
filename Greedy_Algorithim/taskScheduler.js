// Leetcode Problem: 621. Task Scheduler
// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.

// Example 3:
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: One possible solution is A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

const taskScheduler = (arr, n) => {
    let freq = Array(26).fill(0);
    let maxfreq = 0;

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].charCodeAt() - 65;
        ++freq[curr];
        maxfreq = Math.max(maxfreq, freq[curr]);
    }

    let numberofMaxCounts = 0;
    for (let i = 0; i < 26; i++) {
        if(freq[i] === maxfreq) ++numberofMaxCounts;
    }

    let intervals = ((n + 1) * (maxfreq - 1)) + numberofMaxCounts
    return Math.max(arr.length, intervals);
}

// Time Complexity: O(n), where n is the number of tasks. We iterate through the tasks to count their frequencies and then iterate through the frequency array to find the maximum frequency and the number of tasks with that frequency.
// Space Complexity: O(1), as we are using a fixed-size array of length 26 to store the frequencies of the tasks, regardless of the input size.

// Test cases
console.log(taskScheduler(["A","A","A","B","B","B"], 2));
console.log(taskScheduler(["A","A","A","B","B","B"], 0));
console.log(taskScheduler(["A","A","A","A","A","A","B","C","D","E","F","G"], 2));