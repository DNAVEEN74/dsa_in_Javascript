let arr = [2, 3, 4, 5, 3];
let target = 3;

function linearSearch(arr, target) {
    let output = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            output = i;
            break;
        }
    }

    return output;
}

console.log(linearSearch(arr, target));
