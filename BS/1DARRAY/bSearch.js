// BINARY SEARCH --- LOOP IMPLEMENTATION
// function bSearch (nums, target) {
//     let n = nums.length;
//     let low = 0;
//     let high = n - 1;

//     while (low <= high) {
//         let mid = Math.floor(((low + high) / 2));

//         if (nums[mid] == target) return mid;
//         else if (target > nums[mid]) {
//             low = mid + 1;
//         } else {
//             high = mid - 1 
//         }
//     }

//     return -1;
// }

// RECURSIVE IMPLENTATION
function bSearch(nums, low, high, target) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (nums[mid] == target) {
        return mid;
    } else if (target > nums[mid]) {
        return bSearch(nums, mid + 1, high, target);
    } else {
        return bSearch(nums, low, mid - 1, target);
    }
}

let nums = [-1,0,3,5,9,12];
console.log(bSearch(nums, 0, nums.length - 1, 12));