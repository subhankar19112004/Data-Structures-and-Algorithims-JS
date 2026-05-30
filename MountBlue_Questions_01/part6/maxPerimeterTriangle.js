// HackerRank - Max Perimeter Triangle
// Given an array of stick lengths, determine the non-degenerate triangle with the maximum perimeter that can be formed from 3 of those sticks. 
// Return an array of the lengths of its sides as 3 space-separated integers in non-decreasing order, or return -1 if there is no such triangle.


const maxPerimeterTriangle = (sticks) => {
    sticks.sort((a, b) => a - b);

    for(let i = sticks.length - 1; i >= 2; i--) {
        const c = sticks[i];
        const b = sticks[i - 1];
        const a = sticks[i - 2];

        if(a + b > c) {
            return [a, b, c];
        }
    }
    return [-1];
}

// Test cases
console.log(maxPerimeterTriangle([1, 2, 3])); // [-1]
console.log(maxPerimeterTriangle([1, 1, 1])); // [1, 1, 1]
console.log(maxPerimeterTriangle([1, 2, 3, 4])); // [2, 3, 4]
console.log(maxPerimeterTriangle([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(maxPerimeterTriangle([1, 2, 3, 4, 5, 10])); // [3, 4, 5]