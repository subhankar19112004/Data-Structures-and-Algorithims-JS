// HackerRank - Minimum Distances
// The distance between two array values is the number of indices between them. 
// Given a, find the minimum distance between any pair of equal elements in the array. 
// If no such value exists, return -1.
// Example
// a = [3, 2, 1, 2, 3]
// There are two matching pairs of values: 3 and 2. 
// The indices of the 3's are i=0 and j=4, so their distance is d=|j-i|=4. 
// The indices of the 2's are i=1 and j=3, so their distance is d=|j-i|=2. The minimum distance is 2.

function minimumDistances(arr) {
    let map = {};
    let min = Infinity;

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];

        if(map[num] === undefined){
            map[num] = i;
        } else {
            let distance = i - map[num];
            min = Math.min(min, distance);
            map[num] = i;
        }
    }
    return min === Infinity ? -1 : min;
}

// Test cases
console.log(minimumDistances([7, 1, 3, 4, 1, 7])); // Expected output: 3
console.log(minimumDistances([1, 2, 3, 4, 5])); // Expected output: -1
console.log(minimumDistances([1, 1, 1, 1, 1])); // Expected output: 1
console.log(minimumDistances([1, 2, 3, 4, 5, 1])); // Expected output: 5
console.log(minimumDistances([1, 2, 3, 4, 5, 6])); // Expected output: -1