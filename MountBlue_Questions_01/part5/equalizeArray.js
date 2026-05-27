// HackerRank - Equalize the Array
// Given an array of integers, 
// determine the minimum number of elements to delete to leave only elements of equal value.
// Example
// arr = [3, 3, 2, 1, 3]
// Delete 2 and 1, leaving arr = [3, 3, 3]. The minimum number of deletions is 2.
// Function Description
// Complete the equalizeArray function in the editor below. 
// It should return an integer that represents the minimum number of deletions required.
// equalizeArray has the following parameter(s):
// arr: an array of integers

const equalizeArray = (arr) => {
    let freq = {};
    let maxFreq = 0;

    for(let num of arr){
        if(!freq[num]){
            freq[num] = 1;
        } else {
            freq[num]++;
        }

        maxFreq = Math.max(maxFreq, freq[num]);
    }
    return arr.length - maxFreq;
}

// Test cases
console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([1, 2, 3, 3, 3, 4]));
console.log(equalizeArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5]));