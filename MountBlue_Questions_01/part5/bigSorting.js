// HackerRank - Big Sorting
// Consider an array of numeric strings where each string is a positive number with anywhere from 1 to 10^6 digits. 
// Sort the array's elements in non-decreasing order of their integer values and return the sorted array.
// Example
// unsorted = ['1', '200', '50']
// The sorted array is ['1', '50', '200'].
// Function Description
// Complete the bigSorting function in the editor below. It should return a sorted array of strings.
// bigSorting has the following parameter(s):
// unsorted: an unsorted array of integers as strings


const bigSorting = (unsorted) => {
    unsorted.sort((a, b) => {
        if(a.length !== b.length) {
            return a.length - b.length
        }

        if(a < b){
            return -1
        }

        if(a > b){
            return 1
        }
        return 0;
    });
    return unsorted;
}

// Test cases
console.log(bigSorting(['1', '2', '100', '12303479849857341718340192371', '3084193741082937', '3084193741082938', '111', '200']));
console.log(bigSorting(['31415926535897932384626433832795', '1', '3', '10', '3', '5']));
console.log(bigSorting(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']));