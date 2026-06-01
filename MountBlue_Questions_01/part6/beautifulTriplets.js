// HackerRank - Beautiful Triplets
// Given an increasing sequence of integers and a number, d, 
// determine the number of beautiful triplets in the sequence.
// Beautiful triplets are defined as an integer triplet (arr[i], arr[j], arr[k]) 
// where i < j < k and the following are true:
// arr[j] - arr[i] = d
// arr[k] - arr[j] = d
// Increasing sequence - A sequence of numbers where each number is greater than the previous one.
// Triplet - A group of three numbers.
// Example: If the sequence is [1, 2, 4, 5, 7, 8, 10] and d = 3, 
// the beautiful triplets are (1, 4, 7), (2, 5, 8), and (4, 7, 10).

const beautifulTriplets = (d, arr) => {
    let container = new Set(arr);
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        let a = arr[i];

        if(
            container.has(a + d) &&
            container.has(a + 2 * d)
        ) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // Output: 3
console.log(beautifulTriplets(1, [1, 2, 3, 4, 5])); // Output: 3
console.log(beautifulTriplets(2, [1, 3, 5, 7, 9])); // Output: 3