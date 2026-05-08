// HackerRank - Grading Students
// Given the initial value of a grade, round it according to the following rules:
// If the difference between the grade and the next multiple of 5 is less than 3, 
// round up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

const gradingSystem = (arr) => {
    let n = arr.length;
    let i = 0;

    while(i < n){
        if(arr[i] >= 38){
            let diff = 5 - (arr[i] % 5);
            if(diff < 3){
                arr[i] = arr[i] + diff;
            }
        }
        i++;
    }
    return arr;
}

// Test cases
console.log(gradingSystem([73, 67, 38, 33])); // Output: [75, 67, 40, 33]
console.log(gradingSystem([84, 29, 57])); // Output: [85, 29, 57]
console.log(gradingSystem([37, 38, 39])); // Output: [37, 40, 40]