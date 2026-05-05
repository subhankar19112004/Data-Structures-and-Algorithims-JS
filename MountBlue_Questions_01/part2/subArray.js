// HackerRank - Subarray Division
// Given a chocolate bar represented as an array of integers, 
// determine how many ways you can divide the chocolate bar into contiguous segments of length m that sum to d.


const subArray = (s, d, m) => {
    let count = 0;
    // Loop through the array and check for every contiguous segment of length m
    for(let i = 0; i <= s.length - m; i++){
        let sum = 0;
        // Calculate the sum of the current contiguous segment
        for(let j = 0; j < m; j++){
            sum = sum + s[i + j];
        }
        if(sum === d)count++;
    }
    return count;
}

// Test cases
console.log(subArray([1, 2, 1, 3, 2], 3, 2));
console.log(subArray([1, 1, 1, 1, 1], 2, 2));
console.log(subArray([4], 4, 1));