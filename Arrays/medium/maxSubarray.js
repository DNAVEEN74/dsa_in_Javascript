//Kadane's Algorithm ---- Maximum Subarray
//BRUTE FORCE APPROACH

// function maxSubArray(arr) {
//     let max = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let sum = 0;
//             for (let k = i; k < j; k++) {
//                 sum += arr[k];
//             }

//             if(sum > max) {
//                 max = sum;
//             }
//         }
//     }

//     return max;
// }

//BETTER APPROACH

// function maxSubArray(nums) {
//     let max = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             max = Math.max(max, sum);
//         }
//     }

//     return max;
// }

//OPTIMAK APPROACH --- KADANE'S ALGORITHM

function maxSubArray(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
}

let arr = [-2, -3, -7, -2, -10, -4];
console.log(maxSubArray(arr));