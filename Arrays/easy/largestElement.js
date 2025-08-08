let arr = [3, 2, 1, 5, 2];
let largestElement = arr[0];

for ( let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
        largestElement = arr[i];
    }
}

console.log(largestElement);