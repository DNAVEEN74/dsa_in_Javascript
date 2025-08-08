// find the missing number 
// brute force approach
// TC = O(n^2), SC = O(1)
// function findMissingNumber(arr, n){
//     for (let i = 0; i < n; i++) {
//         let found = false;
//         for (let j = 0; j < n; j++) {
//             if (arr[j] === i) {
//                 found = true;
//                 break;
//             }
//         }

//         if ( found === false) {
//             return i;
//         }
//     }

//     return -1;
// }

// better approach using extra hash array
//TC = O(2n), SC = O(n)
// function findMissingNumber(arr, n) {
//     let hashArray = new Array(n).fill(0);

//     for ( let i = 0; i < arr.length; i++) {
//         hashArray[arr[i]] = 1;
//     }

//     for (let i = 0; i < hashArray.length; i++) {
//         if ( hashArray[i] === 0) {
//             return i;
//         }
//     }
// }

// optimised approach using sum formula
// function findMissingNumber(arr, n) {
//     let sum1 = (n*(n - 1)) / 2;
//     let sum2 = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum2 += arr[i];
//     }

//     return sum1 - sum2;
// }


// optimised approach using XOR
//Tc == O(2n), SC = O(1)
function findMissingNumber(arr, n){
    let xor1 = 0;
    let xor2 = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        xor1 ^= i;
    }

    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i];
    }

    return xor1 ^ xor2;
}

let arr = [0, 1, 2, 4, 5, 6];
console.log(findMissingNumber(arr, arr.length + 1));