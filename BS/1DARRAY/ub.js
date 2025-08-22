//UPPER BOUND
function upSearch (nums, target) {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}

let nums = [1,2,2,3];
console.log(upSearch(nums, 2));