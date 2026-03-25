// // Write a function that returns the count of digits fora in a a number.
// function numCounts(n) { 
//     if( n == 0)return 1;
//     n = Math.abs(n); // Handle negative numbers  
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count
// } 

// console.log(numCounts(56245));

// Write a function that returns the count of digits for a in a number.
function numCounts (n){
    if( n === 0) return 1;
    n = Math.abs(n);
    let count = 0;
    while( n > 0 ){
        n = Math.floor(n / 10);
        count++
    }
    return count;
} 
console.log(numCounts(1234567890))

//How this code works:
// 1. The function `numCounts` takes a number `n` as input.
// 2. It first checks if `n` is 0, in which case it returns 1, since 0 has one digit.
// 3. It then takes the absolute value of `n` to handle negative numbers.
// 4. It initializes a `count` variable to 0, which will keep track of the number of digits.
// 5. The function enters a while loop that continues as long as `n` is greater than 0.
// 6. Inside the loop, it divides `n` by 10 and takes the floor of the result to remove the last digit.
// 7. It increments the `count` variable by 1 for each iteration of the loop.
// 8. Once the loop finishes (when `n` becomes 0), it returns the total count of digits.