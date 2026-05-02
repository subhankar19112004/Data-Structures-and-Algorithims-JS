// Hackerrank : Simple Array Sum
// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

let ar = [1, 2, 3, 4, 10, 11];
let result = simpleArraySum(ar);
console.log(result);// Output: 31