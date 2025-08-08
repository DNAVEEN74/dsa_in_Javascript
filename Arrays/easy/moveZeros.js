let arr = [0, 1, 4, 0, 5, 0, 2];

// brute force approach
// let zerosArr = [];
// let tempArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] === 0){
//         zerosArr.push(0);
//     } else {
//         tempArr.push(arr[i]);
//     }
// }

// for (let i = 0; i < zerosArr.length; i++) {
//     tempArr[tempArr.length] = zerosArr[i];
// }

function moveZeros(arr) {
    let j = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            j = i;
            break;
        }
    }

    if(j === -1) return nums;

    for ( let i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }

    return arr;
}

console.log(moveZeros(arr));