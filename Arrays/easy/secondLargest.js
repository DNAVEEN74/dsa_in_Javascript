let arr = [1, 2, 4, 7, 7, 5];

let largest = arr[0];
let secondLargest = -Infinity;

for ( let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if ( arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);