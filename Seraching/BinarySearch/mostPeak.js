// leetcode 852 - Peak Index in a Mountain Array
// A mountain array is an array that:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

const mostPeak = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

        if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// Test cases
console.log(mostPeak([0,1,0])) // 1
console.log(mostPeak([0,2,1,0])) // 1
console.log(mostPeak([0,10,5,2])) // 1
