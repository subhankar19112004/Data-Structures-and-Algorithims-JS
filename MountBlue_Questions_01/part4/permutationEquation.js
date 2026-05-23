// HackerRank - Permutation Equation
// The function permutationEquation takes an array p, which represents a permutation of the first n natural numbers. The function returns an array where the value at each index x is the position of the element that is at the position of the element that is at position x in the original array p. In other words, for each x from 1 to n, it finds the position of x in p, then finds the position of that position in p, and stores it in the result array.
// The function iterates through each number from 1 to n, uses indexOf to find the positions in the array, and constructs the result array accordingly. Finally, it returns the result array.
// Time Complexity: O(n^2) due to the use of indexOf inside a loop, which can be inefficient for large arrays. 
// Space Complexity: O(n) for storing the result array.
// Function to compute the permutation equation
// Parameters:
// p: An array representing a permutation of the first n natural numbers
// Returns an array where the value at each index x is the position of the element that is at the position of the element that is at position x in p
// Example: If p = [5, 2, 1, 3, 4], then the output will be [4, 2, 5, 1, 3] because:
// For x = 1: p[1] = 5, p[5] = 4, so result[1] = 4
// For x = 2: p[2] = 2, p[2] = 2, so result[2] = 2
// For x = 3: p[3] = 1, p[1] = 5, so result[3] = 5
// For x = 4: p[4] = 3, p[3] = 1, so result[4] = 1
// For x = 5: p[5] = 4, p[4] = 3, so result[5] = 3
 

const permutationEquation = (p) => {
    const result = [];

    for(let x = 1; x <= p.length; x++){
        let fistPos = p.indexOf(x) + 1;

        let secondPos = p.indexOf(fistPos) + 1;

        result.push(secondPos);
    }
    return result;
}

// Test cases
console.log(permutationEquation([5, 2, 1, 3, 4]));
console.log(permutationEquation([2, 3, 1]));
console.log(permutationEquation([4, 3, 5, 1, 2]));
console.log(permutationEquation([1, 2, 3, 4, 5]));
console.log(permutationEquation([5, 4, 3, 2, 1]));