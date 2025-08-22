// TO FIND THE MAX SUBARRAY WITH SUM ZERO

function maxSubArrayZero(nums) {
    let maxLen = 0;
    let sum = 0;
    let mpp = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === 0) {
            maxLen = i + 1;
        }

        if (mpp.has(sum)) {
            maxLen = Math.max(maxLen, i - mpp.get(sum));
        } else {
            mpp.set(sum, i);
        }
    }

    return maxLen;
}

let nums = [1,-1,3,2,-2,-8,1,7,10,23];
console.log(maxSubArrayZero(nums));