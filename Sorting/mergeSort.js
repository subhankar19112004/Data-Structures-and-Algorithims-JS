// Merge sort Algorithm implementation in JavaScript
// It is a Divide and Conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
// Time Complexity: O(n log n) in all cases (worst, average, best)


// Helper function to merge two sorted arrays into one sorted array using two pointers
function merge(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let p1 = 0;
    let p2 = 0;
    let n1Copy = nums1.slice(0, m);

    for( let i = 0; i < m + n; i++ ){
        if( p2 >= n || ( p1 < m && n1Copy[p1] < nums2[p2])){
            nums1[i] = n1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

function mergeSort(arr){

    // Base case
    if( arr.length <= 1 ) return arr;

    // Recursive case - divide the array into two halves and merge sort each half
    let mid = Math.floor(arr.length / 2);

    // Recursively sort the left and right halves
    let left = mergeSort(arr.slice( 0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted halves and return the result
    return mergesort(left, right); //merge -> Helper function to merge two sorted arrays
}

let arr = [5, 2, 9, 1, 5, 6];
let arr2 = [7, 5, 3, 4, 2, 1];
let result = mergeSort(arr);
let result2 = mergeSort(arr2);
console.log(result);// Output: [1, 2, 5, 5, 6, 9]
console.log(result2);// Output: [1, 2, 3, 4, 5, 7]


// Merge sort helper function using while loop
function mergesort(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let i = 0;
    let j = 0;
    let res = [];

    while (i < m && j < n) {
        if( nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    }
    return [...res, ...nums1.slice(i), ...nums2.slice(j)];
}