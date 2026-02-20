function InsertionSort (a){
    let n = a.length;

    for( let i = 1; i < n; i++){
        curr = a[i]; // current element
        let prev = i - 1; // Declaring previous element 
        console.log(a)
        console.log("curr = " + curr + " prev = " + prev);

        while ( a[prev] > curr && prev >= 0){
            a[prev + 1] = a[prev];
            prev--;
            console.log(a);
            console.log("curr = " + curr + " prev = " + prev);
        }
        a[prev + 1] = curr;
        console.log(a);
    }
    return a;
}

let arr = [2, 4, 1, 5, 3];
let result = InsertionSort(arr);
console.log(result);