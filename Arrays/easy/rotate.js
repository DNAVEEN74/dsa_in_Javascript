let arr = [1,2,3,4,5,6,7];

function rotateByKElements(arr, k) {
    if ( k > arr.length) {
        k = k % arr.length;
    }
    if (k === 0) return arr;
    let tempArr = arr.slice(0, k);

    for (let i = k; i < arr.length ; i++) {
        arr[i - k] = arr[i];
    }

    for (let i = 0; i < tempArr.length; i++) {
        arr[arr.length - tempArr.length + i] = tempArr[i];
    }

    return arr;
}

console.log(rotateByKElements(arr, 3));


