function bubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        console.log(arr)
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log(arr[j], arr[j + 1])
                console.log(j, j + 1) 

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
                console.log(arr)
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}

let arr = [0, 5, 9, 2, 3, 1];

let result = bubbleSort(arr);
console.log(result);