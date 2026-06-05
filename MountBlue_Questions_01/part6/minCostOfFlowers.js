// HackerRank - Greedy Florist
// There are n flowers. Each flower has a cost c. There are k friends who want to buy all the flowers. 
// The first friend will buy the 1st flower, the second friend will buy the 2nd flower and so on until the kth friend buys the kth flower. 
// Then, the first friend will buy the (k+1)th flower, the second friend will buy the (k+2)th flower and so on until all the flowers are bought. 
// Each time a friend buys a flower they pay for it with a price equal to the cost of the flower multiplied by the number of flowers 
// that friend has already purchased plus one. 
// Given the number of friends, k, and a list of costs for each flower, c, find and print the minimum cost to purchase all of the flowers.

const minCostOfFlowers = (c, k) => {
    // Sort the costs in descending order
    c.sort((a, b) => b - a); 
    let totalCost = 0;

    for(let i = 0; i < c.length; i++){
        // Calculate the multiplier based on how many flowers have been bought by the friends.
        let multiplier = Math.floor(i / k) + 1; 
        // The multiplier is calculated as follows:
        // For the first k flowers, the multiplier will be 1 (i = 0 to k-1).
        // For the next k flowers, the multiplier will be 2 (i = k to 2k-1).
        // For the next k flowers, the multiplier will be 3 (i = 2k to 3k-1) and so on.
        // Add the cost of the current flower multiplied by the multiplier to the total cost
        totalCost += c[i] * multiplier; 
    }
    return totalCost;
}

// Test cases
console.log(minCostOfFlowers([1, 3, 5, 7, 9], 3)); // Output: 29
console.log(minCostOfFlowers([1, 2, 3, 4, 5], 2)); // Output: 22
console.log(minCostOfFlowers([2, 5, 6], 3)); // Output: 13
console.log(minCostOfFlowers([1, 2, 3, 4, 5], 1)); // Output: 35
console.log(minCostOfFlowers([1, 2, 3, 4, 5, 6], 3)); // Output: 27