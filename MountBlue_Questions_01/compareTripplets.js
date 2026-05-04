// Hackerrank Problem: Compare the Triplets
// Function to compare two triplets and return the scores for Alice and Bob
// Alice and Bob each have three scores in three different categories.
// The task is to compare the scores of Alice and Bob in each category and determine who has the higher score in each category. 
// The person with the higher score in a category gets 1 point, and the other person gets 0 points. 
// If both scores are equal, neither person gets a point. 
// Finally, we need to return the total points for Alice and Bob as an array.

const compareTripplets = (a, b) => {
    let alice = 0;
    let bob = 0;

    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            alice++;
        } else if(a[i] < b[i]){
            bob++;
        }
    }
    return [alice, bob];
}

// Example usage:
const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTripplets(a, b)); // Output: [1, 1]