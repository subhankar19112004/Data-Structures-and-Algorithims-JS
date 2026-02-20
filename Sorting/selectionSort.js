function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                console.log("Before swapped : " + arr);
            }
        }
        if (min != i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
            console.log("After swapped : " + arr);
        }
    }
    return arr;
}
let arr = [7,1,5,4,3,2];
let result = selectionSort(arr);
console.log(result);