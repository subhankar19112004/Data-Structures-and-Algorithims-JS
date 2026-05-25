// HackerRank - Circular Array Rotation
// John Watson knows of an operation called a right circular rotation on an array of integers.
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
// Sherlock is to perform the rotation operation a number of times and then determine the value of the element at a given position.
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
// Example
// arr = [3, 4, 5]
// k = 2
// queries = [1, 2]
// After the first rotation, arr would become [5, 3, 4]. After the second rotation, arr would become [4, 5, 3]. 
// The indices in the rotated array are [0, 1, 2] and their corresponding values are [4, 5, 3]. 
// For each of the indices in queries, we find the corresponding value in the rotated array and return an array of results.
// Function Description
// Complete the circularArrayRotation function in the editor below. 
// It should return an array of integers representing the values in the rotated array as specified by queries.
// circularArrayRotation has the following parameter(s):
// arr: an array of integers to rotate
// k: an integer, the rotation count
// queries: an array of integers representing indices to report

const circularArrayRotation = (arr, k, queries) => {
    let n = arr.length;
    let rotated = new Array(n);

    for(let i = 0; i < arr.length; i++){
        let newIndex = (i + k) % n;

        rotated[newIndex] = arr[i];
    }

    let result = [];

    for(let i = 0; i < queries.length; i++){
        let el = rotated[queries[i]];
        result.push(el);
    }
    return result;
}

// Test cases
console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])); // Output: [2, 3, 1]
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2])); // Output: [5, 3]
console.log(circularArrayRotation([1, 2, 3, 4], 4, [0, 1, 2, 3])); // Output: [1, 2, 3, 4]