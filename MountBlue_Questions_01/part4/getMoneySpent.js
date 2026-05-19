// HackerRank - Electronics Shop
// Given a list of prices for keyboards and a list of prices for USB drives, 
// determine the maximum amount of money that can be spent on a keyboard and USB drive given a budget. 
// If it is not possible to buy both items, return -1.
// Example
// keyboards = [3, 1]
// drives = [5, 2, 8]
// budget = 10
// The person can buy a 1 keyboard and a 8 USB drive for a total of 9, 
// or a 3 keyboard and a 5 USB drive for a total of 8. 
// The maximum amount of money she can spend is 9, so the function should return 9.
// Function Description
// Complete the getMoneySpent function in the editor below. It should return an integer representing the maximum amount of money that can be spent, or -1 if it is not possible to buy both items.
// getMoneySpent has the following parameter(s):
// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: an integer, the budget

const getMoneySpent = (keyboards, drives, b) => {
    keyboards.sort((a, b) => a - b);
    drives.sort((a, b) => a - b);

    let i = 0;
    let j = drives.length - 1;
    let maxSpent = -1;

    while(i < keyboards.length && j >= 0){
        let total = keyboards[i] + drives[j];

        if(total > b){
            j--;
        } else {
            if(total > maxSpent){
                maxSpent = total;
            }
            i++;
        }
    }
    return maxSpent;
}

// Test cases
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58
console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1