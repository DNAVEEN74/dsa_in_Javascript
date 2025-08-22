// THE CODE FOR LOWER BOUND WORKS TO THIS AS WELL

function searchInsertPosition (nums, x) {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] >= x) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

let nums = [1, 3, 5, 6];
console.log(searchInsertPosition(nums, 5));