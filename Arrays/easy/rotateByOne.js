let arr = [-1, 0, 3, 6];

function rotateByOneElement(arr) {
    let firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstElement;

    return arr;
}

console.log(rotateByOneElement(arr));