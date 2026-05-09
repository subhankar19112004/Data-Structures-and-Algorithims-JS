// HackerRank - Mini-Max Sum
// Given five positive integers, 
// find the minimum and maximum values that can be calculated by summing exactly four of 
// the five integers.
// Then print the respective minimum and maximum values as a single line of 
// two space-separated long integers.
// Example
// arr = [1, 2, 3, 4, 5]
// The minimum sum is 1 + 2 + 3 + 4 = 10 and the maximum sum is 2 + 3 + 4 + 5 = 14. 
// The function prints
// 10 14

const minMax = (arr) => {
    let total = 0;
    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        total = total + arr[i];
        
        if(arr[i] < min){
            min = arr[i];
        } else if(arr[i] > max){
            max = arr[i];
        }
    }
    let totalMax = total - min;
    let totalMin = total - max;

    return [totalMin, totalMax];
}

//Test Cases
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([7, 69, 2, 221, 8974]));
console.log(minMax([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));