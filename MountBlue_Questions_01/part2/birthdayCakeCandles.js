// Hackerrank - Birthday Cake Candles
// Given an array of integers representing the height of candles, determine how many candles are tallest and can be blown out.

const birthdayCakeCandles = (candles) => {
    let count = 0;
    let max = 0;

    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
            count = 1;
        } else if(candles[i] === max){
            count++;
        }
    }
    return count;
}

// Test cases
console.log(birthdayCakeCandles([3, 2, 1, 3])); // Output: 2
console.log(birthdayCakeCandles([4, 4, 1, 3])); // Output: 2
console.log(birthdayCakeCandles([1, 2, 3, 4])); // Output: 1
console.log(birthdayCakeCandles([1, 1, 1, 1])); // Output: 4
console.log(birthdayCakeCandles([5, 5, 5, 5, 5])); // Output: 5