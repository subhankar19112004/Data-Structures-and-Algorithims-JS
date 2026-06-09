// HackerRank - Lonely Integer
// Given an array of integers, where all elements but one occur twice, find the unique element.
// Example
// a = [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.
// Function Description 
// Complete the lonelyinteger function in the editor below. It should return the integer that occurs only once in the input array.
// lonelyinteger has the following parameter(s):
// a: an array of integers

function lonelyinteger(a) {
    // Write your code here
    let freq = {};
    for(let i = 0; i < a.length; i++){
        if(!freq[a[i]]){
            freq[a[i]] = 1;
        } else {
            freq[a[i]]++;
        }
    }
    console.log(freq)
    
    for(let i = 0; i < a.length; i++){
        if(freq[a[i]] === 1){
            return a[i];
        }
    }
    return -1;
}

// Test case
console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1])); // Output: 4
console.log(lonelyinteger([1, 1, 2])); // Output: 2
console.log(lonelyinteger([0, 0, 1, 2, 1])); // Output: 2