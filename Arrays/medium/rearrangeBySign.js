//REARRANGE ARRAY ELEMENTS BY THEIR SIGN ---- POSITIVE FIRST, THEN NEGATIVE
//BRUTE FORCE APPROACH

// function rearrangeBySign(nums) {
//     let positivesArray = [];
//     let negativeArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] >= 0) {
//             positivesArray.push(nums[i]);
//         } else { 
//             negativeArray.push(nums[i]);
//         }
//     }

//     for (let i = 0; i < nums.length / 2; i++) {
//         nums[2 * i] = positivesArray[i];
//         nums[2 * i + 1] = negativeArray[i];
//     }

//     return nums;
// }

//OPTIMAL APPROACH
function rearrangeBySign(nums) {
    let ans = new Int32Array(nums.length);
    let positiveIndex = 0, negativeIndex = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            ans[negativeIndex] = nums[i];
            negativeIndex += 2;
        } else {
            ans[positiveIndex] = nums[i];
            positiveIndex += 2;
        }
    }

    return ans;
}

let arr = [3, 1, -2, -5, 2, -4];
console.log(rearrangeBySign(arr));