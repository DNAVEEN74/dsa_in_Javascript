//Count subarrays with given sum k
//BRUTE FORCE APPROACH
// function subArrCount (nums, k) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             let sum = 0;
//             for (let m = i; m <= j; m++) {
//                 sum = sum + nums[m];
//             }
//             if(sum === k) count++;
//         }
//     }

//     return count;
// }

//BETTER APPROACH
// function subArrCount (nums, k) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if(sum === k) count++;
//         }
//     }

//     return count;
// }

//OPTIMAL APPROACH
function subArrCount(nums, k) {
    let myMap = new Map();
    myMap.set(0, 1);
    let prevSum = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        prevSum += nums[i];
        let remove = prevSum - k;
        count += myMap.get(remove) || 0;
        myMap.set(prevSum, (myMap.get(prevSum) || 0) + 1);
    }

    return count;
}

let nums = [1, 2, 3];
console.log(subArrCount(nums, 3));
