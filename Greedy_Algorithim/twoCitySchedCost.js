// Leetcode 1029. Two City Scheduling
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti],
// the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

// Example 1:
// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// Example 2:
// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859

// Example 3:
// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086

const twoCitySchedCost = (costs) => {
    costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    let ans = 0;
    let n = costs.length;

    for (let i = 0; i < n; i++) {
        if (i < n / 2) ans += costs[i][0];
        else ans += costs[i][1];
    }
    return ans;
}

// Test cases
console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]));
console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]));
console.log(twoCitySchedCost([[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]]));