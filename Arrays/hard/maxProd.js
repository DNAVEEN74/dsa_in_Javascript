

//OPTIMAL APPRAOCH
function maxProduct (nums) {
    let prefix = 1, sufix = 1;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (prefix === 0) prefix = 1;
        if (sufix === 0) sufix = 1;

        prefix = prefix * nums[i];
        sufix = sufix * nums[nums.length - 1 - i]

        max = Math.max(max, prefix, sufix);
    }

    return max;
}

let nums = [2,3,-2,4];
console.log(maxProduct(nums));