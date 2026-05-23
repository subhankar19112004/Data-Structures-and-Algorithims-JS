// HackerRank - Beautiful Numbers
// A beautiful number is a number that, when reversed and subtracted from the original number, results in a difference that is evenly divisible by a given integer k. The function beautifulNumbers takes three parameters: i (the starting day), j (the ending day), and k (the divisor). It counts how many beautiful numbers exist between the days i and j inclusive.
// The function iterates through each day from i to j, reverses the digits of the day, calculates the absolute difference between the original day and the reversed number, and checks if this difference is divisible by k. If it is, it increments the count of beautiful numbers. Finally, it returns the total count.
// Time Complexity: O(n * m) where n is the number of days (j - i + 1) and m is the number of digits in the largest day (which is at most 4 for days up to 1000).   
// Space Complexity: O(1) as we are using a constant amount of space to store variables.
// Function to count beautiful numbers between i and j with divisor k
// Parameters:
// i: Starting day (inclusive)
// j: Ending day (inclusive)
// k: Divisor for checking beautiful numbers
// Returns the count of beautiful numbers between i and j

const beautifulNumbers = (i, j, k) => {
    let count = 0;

    for(let day = i; day <= j; day++){
        let num = day;
        let reversed = 0;

        while(num > 0){
            let lastDigit = num % 10;
            reversed = reversed * 10 + lastDigit;
            num = Math.floor(num / 10);
        }

        let difference = Math.abs(day - reversed);

        if(difference % k === 0){
            count++;
        }
    }
    return count;
}

// Test cases
console.log(beautifulNumbers(20, 23, 6)); // 2
console.log(beautifulNumbers(1, 10, 2)); // 9
console.log(beautifulNumbers(100, 200, 10)); // 10
console.log(beautifulNumbers(10, 100, 5)); // 18
console.log(beautifulNumbers(1, 1000, 3)); // 1000