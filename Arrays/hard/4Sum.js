//4SUM -- CONSECUTIVE ELEMENTS OF A ARRAY WHOSE SUM IS EQUAL TO ZERO
// ALL BRUTE, BETTER AND OPTIMAL IS SIMILAR TO 3SUM BUT EXTRA NESTED LOOP IS ADDED

function fourSum(nums, target) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if ( i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if ( j > i + 1 && nums[j] == nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum < target) {
                    left ++;
                } else if (sum > target) {
                    right--;
                } else {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) { left++ };
                    while (right > left && nums[right] === nums[right + 1]) { right-- };
                }
            }
        }
    }

    return ans;
}

let nums = [2,2,2,2,2];
console.log(fourSum(nums, 8));