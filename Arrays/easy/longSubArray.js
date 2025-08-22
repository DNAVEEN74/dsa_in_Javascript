// longest subarray with given k value
// brute force solution 

// function longestSubArray(arr, k) {
//     let maxLength = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
        
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             if(sum > k) break;
//             if (sum === k) {
//                 maxLength = Math.max(maxLength, j - i + 1);
//                 break;
//             }
//         }
//     }

//     return maxLength;
// }

function longestSubArray(arr, k) {
    let myMap = new Map();
    let maxLength = 0;
    
}

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
console.log(longestSubArray(arr, 3));