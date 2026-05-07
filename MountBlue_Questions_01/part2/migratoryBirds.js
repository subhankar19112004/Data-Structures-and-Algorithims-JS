// HackerRank - Migratory Birds
// Given an array of bird sightings where each element represents a bird type,
// determine the type of bird that is most frequently sighted. 
// If more than one type has been spotted that maximum amount, 
// return the smallest of their type numbers.   

const migratoryBirds = (arr) => {
    let count = [0, 0, 0, 0, 0, 0];

    for(let i = 0; i < arr.length; i++){
        count[arr[i]]++;
    }

    let max = 0;
    let answer = 0;

    for(let i = 1; i <= 5; i++){
        if(count[i] > max){
            max = count[i];
            answer = i;
        }
    }
    return answer;
}

// Test cases
console.log(migratoryBirds([1, 1, 2, 2, 3])); // Output: 1
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // Output: 4
console.log(migratoryBirds([1, 2, 3, 4, 5])); // Output: 1