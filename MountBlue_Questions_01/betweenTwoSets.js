// Hackerrank Problem: Between Two Sets
// Function to determine the number of integers that are between two sets
// Given two arrays of integers, a and b, we need to find the number of integers that are between the two sets. 
// An integer x is considered to be between the two sets if:
// 1. All elements in array a are factors of x (i.e., x % a[i] == 0 for all i).
// 2. x is a factor of all elements in array b (i.e., b[j] % x == 0 for all j).


//Approach 1: Brute Force
const betweenTwoSets = (a, b) => {
    let count = 0;
    let left = Math.max(...a);
    let right = Math.min(...b);

    for(let i = left; i <= right; i++){
        let valid = true;

        for(let j = 0; j < a.length; j++){
            if(i % a[j] !== 0){
                valid = false;
                break;
            }
        }
        for(let j = 0; j < b.length; j++){
            if(b[j] % i !== 0){
                valid = false;
                break;
            }
        }
        if(valid){
            count++;
        }
    }
    return count;
}

// Example usage:
const a = [2, 4];
const b = [16, 32, 96];
console.log(betweenTwoSets(a, b)); // Output: 3