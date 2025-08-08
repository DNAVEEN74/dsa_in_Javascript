let arr = [1,9,6,8,5,4,0];

function isSorted(arr) {
    let isSorted = true;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] >= arr[i -1]) {
            continue;
        } else {
            isSorted = false;
            break;
        }
    }

    return isSorted;

}

console.log(isSorted(arr));