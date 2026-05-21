// Hackerrank - Marc's Cakewalk
// Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a calorie count, and Marc walks a certain number of miles to burn off the calories from each cupcake. The first cupcake he eats burns 2^0 miles, the second burns 2^1 miles, the third burns 2^2 miles, and so on. Given an array of calorie counts for the cupcakes, determine the minimum number of miles Marc must walk to burn off all the calories.
// Function to calculate the minimum miles Marc must walk
// Parameters:
// calorie: An array of integers representing the calorie count of each cupcake.
// Returns:
// An integer representing the minimum miles Marc must walk to burn off all the calories.

function marcsCakewalk(calorie) {
    // Sort from largest to smallest
    calorie.sort((a, b) => b - a);

    let totalMiles = 0;

    // Calculate walking miles
    for (let i = 0; i < calorie.length; i++) {
        totalMiles += Math.pow(2, i) * calorie[i];
    }

    return totalMiles;
}

// Test cases
console.log(marcsCakewalk([1, 3, 2])); // Expected output: 11
console.log(marcsCakewalk([1, 4, 3, 2])); // Expected output: 26
console.log(marcsCakewalk([5, 10, 7])); // Expected output: 44
console.log(marcsCakewalk([1, 2, 3, 4, 5])); // Expected output: 57