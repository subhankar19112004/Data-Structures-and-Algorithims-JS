// HackerRank - Picking Numbers
// Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to 1.
// Function Description : Complete the pickingNumbers function in the editor below.
// pickingNumbers has the following parameter(s):
// int a[n]: an array of integers

const pickingNumbers = (arr) => {
    let freq = {};

    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if(freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    let maxLength = 0;

    // WHy used Object.keys() : Bcoz the object.keys will give the direct number in the form of key fresent in freq map.
    let nums = Object.keys(freq);

    for(let i = 0; i < nums.length; i++) {

        // We used Number bcoz the Object.keys() return the keys in the form of string and we need to convert it into number to perform addition with 1 in the next line.
        // Example : [1, 2, 2, 3, 1, 2] => freq = { '1': 2, '2': 3, '3': 1 } => Object.keys(freq) => ['1', '2', '3'] => Number(nums[i]) => 1, 2, 3
        let num = Number(nums[i]);

        let currLength = freq[num] + (
            // We used || 0 because if there is no key num + 1 in the freq map, it will return undefined. So we need to return 0 in that case to avoid NaN.
            freq[num + 1] || 0
        );

        if(currLength > maxLength) {
            maxLength = currLength;
        }
    }
    return maxLength;
}

// Test cases
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // Output: 5
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5 