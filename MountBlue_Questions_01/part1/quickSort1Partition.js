// Hackerrank Problem: Quick Sort 1 - Partition
// Given an array of integers, 
// partition the array around a pivot element such that all elements less than the pivot come before it and 
// all elements greater than the pivot come after it.
// The pivot is the first element of the array. The partitioning should be done in-place, 
// and the function should return the partitioned array.

const quickSort1Partition = (arr) => {
    let pivot = arr[0];

    let left = [];
    let right = [];
    let equal = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else if(arr[i] > pivot){
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }

    return [...left, ...equal, ...right];
}

// Example usage:
const arr = [4, 5, 3, 7, 2];
console.log(quickSort1Partition(arr)); // Output: [3, 2, 4, 5, 7]