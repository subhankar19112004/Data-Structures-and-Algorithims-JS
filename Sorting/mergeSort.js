function merge (nums1, nums2){
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
    return merge( left, right); //merge -> Helper function to merge two sorted arrays
}

let arr = [5, 2, 9, 1, 5, 6];
let result = mergeSort(arr);
console.log(result);// Output: [1, 2, 5, 5, 6, 9]