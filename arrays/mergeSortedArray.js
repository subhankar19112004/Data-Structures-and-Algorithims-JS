// Merge Sorted Array
// Time Complexity O(m+n) Space Complexity O(1)
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for( let i = m + n - 1; i >= 0; i--){
        if( p2 < 0 ) break;
        if( p1 >= 0 &&  nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
}

// Alternative approach Time Complexity O(m+n) Space Complexity O(m)
function merge2(nums1, m, nums2, n) {
    let n1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if ((p2 >= n || (p1 < m && n1Copy[p1] < nums2[p2]))) {
            nums1[i] = n1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}

let nums1 = [2, 5, 6];
let m = 3;
let nums2 = [1, 2, 3, 0, 0, 0];
let n = 3;

// merge(nums1, m, nums2, n);
// console.log("After merge:", nums1);
merge2(nums1, m, nums2, n);
console.log("After merge2:", nums1);

